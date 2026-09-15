import os
from pathlib import Path

# ─────────────────────────────────────────────
# Base Directory
# ─────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent

# ─────────────────────────────────────────────
# Database
# ─────────────────────────────────────────────
# Defaults to SQLite for prototype; switch to PostgreSQL by changing DATABASE_URL
DATABASE_URL = os.getenv("DATABASE_URL", f"sqlite:///{BASE_DIR / 'farmdirect.db'}")

# ─────────────────────────────────────────────
# Official Government & Verified Agricultural Data API Keys
# CRITICAL: These credentials stay strictly server-side.
# NEVER expose these in React code, HTML, JS, GitHub, or browser network responses.
# ─────────────────────────────────────────────
DATA_GOV_API_KEY    = os.getenv("DATA_GOV_API_KEY",   "DEMO_KEY_DATAGOVIN_NOT_SET")
AGMARKNET_API_KEY   = os.getenv("AGMARKNET_API_KEY",  "DEMO_KEY_AGMARKNET_NOT_SET")
ENAM_API_KEY        = os.getenv("ENAM_API_KEY",        "DEMO_KEY_ENAM_NOT_SET")

# Optional Server-Side Cloud AI Provider Keys (Kept strictly on backend server)
OPENAI_API_KEY      = os.getenv("OPENAI_API_KEY", "")
GEMINI_API_KEY      = os.getenv("GEMINI_API_KEY", "")
GROQ_API_KEY        = os.getenv("GROQ_API_KEY", "")
SARVAM_API_KEY      = os.getenv("SARVAM_API_KEY", "")

# Voice Assistant Settings
DEFAULT_VOICE_LANGUAGE = os.getenv("DEFAULT_VOICE_LANGUAGE", "te")
VOICE_SESSION_TIMEOUT_MINUTES = int(os.getenv("VOICE_SESSION_TIMEOUT_MINUTES", "30"))

# data.gov.in resource ID for "Current Daily Price of Various Commodities from Various Markets"
DATA_GOV_MANDI_RESOURCE_ID = os.getenv(
    "DATA_GOV_MANDI_RESOURCE_ID",
    "9ef84268-d588-465a-a308-a864a43d0070"
)

# ─────────────────────────────────────────────
# Application Mode
# ─────────────────────────────────────────────
# DEMO_MODE=true  → Use seeded offline data clearly labelled "DEMO DATA"
# DEMO_MODE=false → Use live government API endpoints with fallback cache
DEMO_MODE = os.getenv("DEMO_MODE", "true").lower() in ("true", "1", "yes")

# ─────────────────────────────────────────────
# Server
# ─────────────────────────────────────────────
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", "8000"))

# ─────────────────────────────────────────────
# Security
# ─────────────────────────────────────────────
SECRET_KEY   = os.getenv("SECRET_KEY",   "farmdirect-please-change-this-key-in-production-2026")
ADMIN_SECRET = os.getenv("ADMIN_SECRET", "farmdirect-admin-change-this-in-production")
ALGORITHM    = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 24 hours

# ─────────────────────────────────────────────
# Rate Limiting
# ─────────────────────────────────────────────
RATE_LIMIT_PUBLIC  = int(os.getenv("RATE_LIMIT_PUBLIC",  "60"))   # requests per minute
RATE_LIMIT_VOICE   = int(os.getenv("RATE_LIMIT_VOICE",   "15"))   # voice queries per minute

# ─────────────────────────────────────────────
# Price Freshness Thresholds (days)
# ─────────────────────────────────────────────
FRESHNESS_FRESH_DAYS  = 1    # 🟢 Updated today
FRESHNESS_RECENT_DAYS = 3    # 🟡 Updated within 3 days
FRESHNESS_STALE_DAYS  = 14   # 🔴 > 3 days but < 14 days = stale; > 14 = UNAVAILABLE
