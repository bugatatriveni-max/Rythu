"""
FarmDirect — Admin Dashboard API Router
GET  /api/admin/data-sources/status  — Health of all government data sources
GET  /api/admin/sync-logs            — Recent synchronization log
GET  /api/admin/stats                — Database statistics
POST /api/admin/sync                 — Trigger manual data sync
POST /api/admin/toggle-mode         — Switch DEMO ↔ LIVE mode (session-level)

Admin authentication: ADMIN_SECRET header required.
"""
from fastapi import APIRouter, HTTPException, Header
from typing import Optional
from datetime import datetime

import backend.config as config
from backend.database import get_connection
from backend.services.ingestion import SyncOrchestrator, DataIngestionService

router = APIRouter(prefix="/api/admin", tags=["Admin Dashboard"])


def _verify_admin(x_admin_secret: Optional[str]):
    if not x_admin_secret or x_admin_secret != config.ADMIN_SECRET:
        raise HTTPException(status_code=401, detail="Invalid admin credentials.")


@router.get("/data-sources/status")
def get_data_sources_status(x_admin_secret: Optional[str] = Header(None)):
    _verify_admin(x_admin_secret)
    sources = SyncOrchestrator.get_sources_status()
    return {
        "sources": sources,
        "mode": "DEMO" if config.DEMO_MODE else "LIVE",
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }


@router.get("/sync-logs")
def get_sync_logs(limit: int = 20, x_admin_secret: Optional[str] = Header(None)):
    _verify_admin(x_admin_secret)
    conn = get_connection()
    rows = conn.execute(
        "SELECT * FROM data_sync_logs ORDER BY id DESC LIMIT ?;", (limit,)
    ).fetchall()
    conn.close()
    return {
        "logs": [
            {
                "id":                 r["id"],
                "source_id":          r["source_id"],
                "records_fetched":    r["records_fetched"],
                "records_inserted":   r["records_inserted"],
                "records_updated":    r["records_updated"],
                "sync_status":        r["sync_status"],
                "error_message":      r["error_message"],
                "started_at":         r["started_at"],
                "completed_at":       r["completed_at"],
            }
            for r in rows
        ]
    }


@router.get("/stats")
def get_admin_stats(x_admin_secret: Optional[str] = Header(None)):
    _verify_admin(x_admin_secret)
    conn = get_connection()

    def count(table, condition="1=1"):
        return conn.execute(f"SELECT COUNT(*) FROM {table} WHERE {condition};").fetchone()[0]

    from datetime import date, timedelta
    stale_cutoff = (date.today() - timedelta(days=3)).isoformat()

    stats = {
        "states":          count("states"),
        "districts":       count("districts"),
        "markets":         count("markets"),
        "markets_active":  count("markets", "status = 'ACTIVE'"),
        "crops":           count("crops"),
        "prices_total":    count("market_prices"),
        "prices_fresh":    count("market_prices", f"price_date >= '{date.today().isoformat()}'"),
        "prices_stale":    count("market_prices", f"price_date < '{stale_cutoff}'"),
        "farmers":         count("farmers"),
        "recommendations": count("recommendations"),
        "mode":            "DEMO" if config.DEMO_MODE else "LIVE",
        "data_label":      DataIngestionService.get_data_trust_label(),
        "timestamp":       datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }
    conn.close()
    return stats


@router.post("/sync")
def trigger_manual_sync(x_admin_secret: Optional[str] = Header(None)):
    _verify_admin(x_admin_secret)
    result = SyncOrchestrator.sync_all_sources()
    return result


@router.post("/toggle-mode")
def toggle_demo_live(x_admin_secret: Optional[str] = Header(None)):
    """
    Toggle DEMO ↔ LIVE mode at runtime (session-level).
    Note: For permanent change, update DEMO_MODE in .env and restart.
    """
    _verify_admin(x_admin_secret)
    config.DEMO_MODE = not config.DEMO_MODE
    new_mode = "DEMO" if config.DEMO_MODE else "LIVE"
    return {
        "status": "OK",
        "mode": new_mode,
        "message": (
            f"Switched to {new_mode} mode. "
            "Note: To make this permanent, update DEMO_MODE in your .env file."
        ),
        "data_label": DataIngestionService.get_data_trust_label()
    }
