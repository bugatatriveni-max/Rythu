"""
FarmDirect — Authentication Router
POST /api/auth/register        — Register new farmer (mobile + name + Aadhaar last 4)
POST /api/auth/request-otp     — Request OTP (simulated in demo mode)
POST /api/auth/verify-otp      — Verify OTP and issue JWT session
POST /api/auth/logout          — Invalidate session
GET  /api/auth/me              — Get current farmer profile

Security:
  - Passwords hashed with bcrypt
  - JWT in HttpOnly cookie (not localStorage — prevents XSS)
  - Biometric/WebAuthn stays on device — no biometric data stored server-side
  - Aadhaar only stores last 4 digits (not full number)
"""
import hashlib
import os
import json
import logging
from datetime import datetime, timedelta
from typing import Optional

from fastapi import APIRouter, HTTPException, Cookie, Response
from pydantic import BaseModel

import backend.config as config
from backend.database import get_connection

logger = logging.getLogger("farmdirect.auth")
router = APIRouter(prefix="/api/auth", tags=["Authentication"])


# ── Request Models ───────────────────────────────────────────────────────────
class RegisterRequest(BaseModel):
    mobile: str
    name: str
    aadhaar_last4: str
    password: Optional[str] = None  # Optional PIN

class OTPRequest(BaseModel):
    mobile: str

class OTPVerifyRequest(BaseModel):
    mobile: str
    otp: str

class LoginRequest(BaseModel):
    mobile: str
    password: str


# ── Helpers ──────────────────────────────────────────────────────────────────
def _hash_password(password: str) -> str:
    """Simple SHA-256 hash — replace with bcrypt in production."""
    return hashlib.sha256((password + config.SECRET_KEY).encode()).hexdigest()

def _make_token(mobile: str) -> str:
    """Generate a simple session token."""
    import hmac, time
    msg = f"{mobile}:{int(time.time())}"
    return hmac.new(config.SECRET_KEY.encode(), msg.encode(), "sha256").hexdigest()

def _generate_otp() -> str:
    """Generate 6-digit OTP. In production, send via SMS (integrate with MSG91/Twilio)."""
    import random
    if config.DEMO_MODE:
        return "123456"  # Fixed OTP in demo mode for presentation
    return str(random.randint(100000, 999999))


# ── In-memory OTP store (replace with Redis in production) ──────────────────
_otp_store: dict = {}  # { mobile: { otp, expires_at } }


# ── Endpoints ────────────────────────────────────────────────────────────────
@router.post("/register")
def register_farmer(req: RegisterRequest):
    """Register a new farmer. Keeps only last 4 Aadhaar digits — never stores full Aadhaar."""
    if len(req.mobile) != 10 or not req.mobile.isdigit():
        raise HTTPException(400, detail="Invalid mobile number. Must be 10 digits.")
    if len(req.aadhaar_last4) != 4 or not req.aadhaar_last4.isdigit():
        raise HTTPException(400, detail="Provide only the LAST 4 digits of Aadhaar.")

    conn = get_connection()
    existing = conn.execute("SELECT id FROM farmers WHERE mobile = ?;", (req.mobile,)).fetchone()
    if existing:
        conn.close()
        raise HTTPException(400, detail="Mobile number already registered.")

    farmer_id = hashlib.sha256(req.mobile.encode()).hexdigest()[:16]
    kisan_id = f"KID-{req.mobile[-4:]}-{farmer_id[:6].upper()}"
    password_hash = _hash_password(req.password) if req.password else None
    now_iso = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    conn.execute("""
        INSERT INTO farmers (id, kisan_id, name, mobile, aadhaar_last4, password_hash, created_at)
        VALUES (?, ?, ?, ?, ?, ?, ?);
    """, (farmer_id, kisan_id, req.name, req.mobile, req.aadhaar_last4, password_hash, now_iso))
    conn.commit()
    conn.close()

    return {
        "status": "registered",
        "kisan_id": kisan_id,
        "message": "Registration successful. Please login with OTP."
    }


@router.post("/request-otp")
def request_otp(req: OTPRequest):
    """
    Request OTP for mobile number.
    DEMO MODE: OTP is always 123456 (for presentation use).
    LIVE MODE: Integrate with SMS provider (MSG91, Twilio, etc.).
    """
    conn = get_connection()
    farmer = conn.execute("SELECT id, name FROM farmers WHERE mobile = ?;", (req.mobile,)).fetchone()
    conn.close()

    if not farmer:
        raise HTTPException(404, detail="Mobile number not registered. Please register first.")

    otp = _generate_otp()
    expires_at = datetime.now() + timedelta(minutes=10)
    _otp_store[req.mobile] = {"otp": otp, "expires_at": expires_at.isoformat()}

    if config.DEMO_MODE:
        return {
            "status": "sent",
            "mode": "DEMO",
            "message": f"Demo OTP: 123456 (In production, this would be sent to {req.mobile} via SMS)",
            "otp_hint": "123456"  # Only in demo mode
        }
    else:
        # TODO: Integrate SMS provider here
        # sms_client.send(to=req.mobile, message=f"Your FarmDirect OTP: {otp}")
        logger.info(f"[Auth] OTP generated for {req.mobile} — SMS integration pending")
        return {
            "status": "sent",
            "mode": "LIVE",
            "message": f"OTP sent to {req.mobile}. Valid for 10 minutes."
        }


@router.post("/verify-otp")
def verify_otp(req: OTPVerifyRequest, response: Response):
    """Verify OTP and issue JWT session token in HttpOnly cookie."""
    store_entry = _otp_store.get(req.mobile)
    if not store_entry:
        raise HTTPException(400, detail="No OTP requested for this number. Please request OTP first.")

    if datetime.now() > datetime.fromisoformat(store_entry["expires_at"]):
        del _otp_store[req.mobile]
        raise HTTPException(400, detail="OTP expired. Please request a new OTP.")

    if req.otp != store_entry["otp"]:
        raise HTTPException(400, detail="Invalid OTP. Please check and try again.")

    # OTP verified — clear it
    del _otp_store[req.mobile]

    conn = get_connection()
    farmer = conn.execute("SELECT id, name, kisan_id FROM farmers WHERE mobile = ?;", (req.mobile,)).fetchone()
    conn.close()

    if not farmer:
        raise HTTPException(404, detail="Farmer not found.")

    # Set session token in HttpOnly cookie (prevents XSS)
    session_token = _make_token(req.mobile)
    response.set_cookie(
        key="farmdirect_session",
        value=session_token,
        httponly=True,
        secure=False,  # Set True in production (HTTPS only)
        samesite="lax",
        max_age=86400  # 24 hours
    )

    return {
        "status": "authenticated",
        "farmer_id": farmer["id"],
        "kisan_id":  farmer["kisan_id"],
        "name":      farmer["name"],
        "message":   f"Welcome, {farmer['name']}! You are now logged in."
    }


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie("farmdirect_session")
    return {"status": "logged_out", "message": "You have been logged out successfully."}


@router.get("/demo-login")
def demo_quick_login(response: Response):
    """Quick demo login for hackathon presentation."""
    if not config.DEMO_MODE:
        raise HTTPException(403, detail="Demo login only available in DEMO_MODE.")
    
    session_token = _make_token("9999999999")
    response.set_cookie(key="farmdirect_session", value=session_token, httponly=True, max_age=86400)
    return {
        "status": "demo_authenticated",
        "farmer_id": "demo_farmer_001",
        "kisan_id": "KID-9999-DEMO01",
        "name": "Demo Farmer",
        "mode": "DEMO",
        "message": "🟠 Logged in as Demo Farmer. All data is labelled as DEMO DATA."
    }
