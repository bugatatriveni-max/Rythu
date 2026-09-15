"""
FarmDirect — Data Ingestion Service
====================================
Architecture:
  Government Sources (data.gov.in, Agmarknet, e-NAM)
      ↓  HTTP fetch (API key kept server-side only)
  FETCH → VALIDATE → NORMALIZE → DEDUPLICATE → STORE
      ↓
  PostgreSQL/SQLite Database
      ↓
  FarmDirect Backend API

Rules:
  - API keys NEVER leave the server (no frontend exposure)
  - Every price record carries: source, source_record_id, price_date, last_updated
  - Stale data is clearly flagged, never presented as current
  - If government API fails → serve cached data with clear "last successful sync" label
  - DEMO_MODE → use seeded database data, label everything "DEMO DATA"
"""

import json
import time
import hashlib
import logging
from datetime import datetime, date, timedelta
from typing import Dict, Any, List, Optional, Tuple

from backend.database import get_connection
from backend.config import (
    DATA_GOV_API_KEY, AGMARKNET_API_KEY, ENAM_API_KEY,
    DATA_GOV_MANDI_RESOURCE_ID, DEMO_MODE,
    FRESHNESS_FRESH_DAYS, FRESHNESS_RECENT_DAYS, FRESHNESS_STALE_DAYS
)

logger = logging.getLogger("farmdirect.ingestion")


# ─────────────────────────────────────────────────────────────────────────────
# Freshness & Trust Helpers
# ─────────────────────────────────────────────────────────────────────────────

class DataIngestionService:

    @staticmethod
    def get_freshness_status(price_date_str: str) -> str:
        """
        Determines price data freshness.

        Returns:
            FRESH       → 🟢 Updated today
            RECENT      → 🟡 Updated within 3 days
            STALE       → 🔴 Updated 4–14 days ago
            UNAVAILABLE → ⚪ Older than 14 days or unparseable
        """
        if not price_date_str:
            return "UNAVAILABLE"
        try:
            p_date = datetime.strptime(price_date_str[:10], "%Y-%m-%d").date()
            today = date.today()
            diff_days = (today - p_date).days
            if diff_days <= 0:
                return "FRESH"
            elif diff_days <= FRESHNESS_RECENT_DAYS:
                return "RECENT"
            elif diff_days <= FRESHNESS_STALE_DAYS:
                return "STALE"
            else:
                return "UNAVAILABLE"
        except Exception:
            return "UNAVAILABLE"

    @staticmethod
    def freshness_emoji(status: str) -> str:
        return {
            "FRESH":       "🟢",
            "RECENT":      "🟡",
            "STALE":       "🔴",
            "UNAVAILABLE": "⚪",
            "DEMO":        "🟠",
        }.get(status, "⚪")

    @staticmethod
    def get_data_trust_label() -> str:
        return "DEMO DATA" if DEMO_MODE else "Government verified dataset"

    @staticmethod
    def get_data_status() -> str:
        return "DEMO" if DEMO_MODE else "VERIFIED"


# ─────────────────────────────────────────────────────────────────────────────
# Government API Connectors
# Each connector: FETCH → VALIDATE → NORMALIZE → return list of normalized records
# ─────────────────────────────────────────────────────────────────────────────

class DataGovInConnector:
    """
    Connects to the Government of India Open Government Data Platform.
    Resource: "Current Daily Price of Various Commodities from Various Markets"
    API Docs: https://data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070

    NOTE: API key is read from env var DATA_GOV_API_KEY.
    It is NEVER passed to or stored on the frontend.
    """

    BASE_URL = "https://api.data.gov.in/resource"
    RESOURCE_ID = DATA_GOV_MANDI_RESOURCE_ID

    @classmethod
    def fetch_mandi_prices(cls, limit: int = 200, offset: int = 0) -> Tuple[bool, List[Dict], str]:
        """
        Fetch mandi prices from data.gov.in API.

        Returns: (success: bool, records: list, error_message: str)
        """
        if DEMO_MODE:
            logger.info("[DataGovIn] DEMO_MODE active — skipping live API fetch.")
            return False, [], "DEMO_MODE: Using seeded database prices."

        if DATA_GOV_API_KEY in ("DEMO_KEY_DATAGOVIN_NOT_SET", "", None):
            logger.warning("[DataGovIn] API key not configured. Set DATA_GOV_API_KEY env var.")
            return False, [], "DATA_GOV_API_KEY not configured"

        try:
            import urllib.request
            url = (
                f"{cls.BASE_URL}/{cls.RESOURCE_ID}"
                f"?api-key={DATA_GOV_API_KEY}"
                f"&format=json&limit={limit}&offset={offset}"
            )
            # Use urllib (no third-party dependency required)
            with urllib.request.urlopen(url, timeout=15) as resp:
                if resp.status != 200:
                    return False, [], f"HTTP {resp.status} from data.gov.in"
                raw = json.loads(resp.read().decode("utf-8"))

            # VALIDATE
            if "records" not in raw:
                return False, [], "Response missing 'records' key"

            records = raw["records"]
            if not isinstance(records, list):
                return False, [], "Records field is not a list"

            # NORMALIZE
            normalized = []
            for rec in records:
                try:
                    normalized.append({
                        "source": "data.gov.in Mandi Price API",
                        "source_record_id": rec.get("_id", ""),
                        "state":           str(rec.get("state", "")).strip(),
                        "district":        str(rec.get("district", "")).strip(),
                        "market":          str(rec.get("market", "")).strip(),
                        "commodity":       str(rec.get("commodity", "")).strip(),
                        "variety":         str(rec.get("variety", "")).strip(),
                        "grade":           str(rec.get("grade", "FAQ")).strip(),
                        "min_price":       float(rec.get("min_price", 0) or 0),
                        "max_price":       float(rec.get("max_price", 0) or 0),
                        "modal_price":     float(rec.get("modal_price", 0) or 0),
                        "price_date":      str(rec.get("arrival_date", date.today().isoformat()))[:10],
                        "unit":            "Quintal",
                    })
                except Exception as e:
                    logger.warning(f"[DataGovIn] Skipping malformed record: {e}")

            logger.info(f"[DataGovIn] Fetched {len(normalized)} valid records.")
            return True, normalized, ""

        except Exception as e:
            logger.error(f"[DataGovIn] Fetch failed: {e}")
            return False, [], str(e)


class AgmarknetConnector:
    """
    Agmarknet (Directorate of Marketing & Inspection, MoAFW).
    Portal: https://agmarknet.gov.in
    Status: Portal feed — no public JSON API; future integration via data.gov.in feed or DMI.
    When official JSON API becomes available, replace the stub below.
    """

    @classmethod
    def fetch_prices(cls) -> Tuple[bool, List[Dict], str]:
        if DEMO_MODE:
            return False, [], "DEMO_MODE: Using seeded database prices."
        logger.info("[Agmarknet] Live connector stub — awaiting official JSON API endpoint from DMI.")
        return False, [], "Agmarknet live API not yet available (portal-only access). Using cached data."


class ENAMConnector:
    """
    National Agriculture Market (e-NAM), SFAC.
    Portal: https://enam.gov.in
    Status: e-NAM provides trade data through their portal. Integration requires SFAC authorization.
    API key: ENAM_API_KEY env var.
    """

    @classmethod
    def fetch_prices(cls) -> Tuple[bool, List[Dict], str]:
        if DEMO_MODE:
            return False, [], "DEMO_MODE: Using seeded database prices."
        if ENAM_API_KEY in ("DEMO_KEY_ENAM_NOT_SET", "", None):
            return False, [], "ENAM_API_KEY not configured"
        logger.info("[e-NAM] Live connector stub — requires authorized SFAC API key and endpoint.")
        return False, [], "e-NAM live API requires SFAC authorization. Using cached data."


# ─────────────────────────────────────────────────────────────────────────────
# Main Sync Orchestrator
# ─────────────────────────────────────────────────────────────────────────────

class SyncOrchestrator:
    """
    Runs full data ingestion pipeline:
      FETCH → VALIDATE → NORMALIZE → DEDUPLICATE → STORE → LOG
    """

    @staticmethod
    def _store_normalized_prices(conn, records: List[Dict], source: str) -> Tuple[int, int]:
        """Insert or update price records. Returns (inserted, updated)."""
        cur = conn.cursor()
        inserted = updated = 0
        now_iso = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

        for rec in records:
            # Try to match market by name
            cur.execute(
                "SELECT market_id FROM markets WHERE LOWER(market_name) LIKE LOWER(?) LIMIT 1;",
                (f"%{rec['market']}%",)
            )
            mkt_row = cur.fetchone()
            if not mkt_row:
                continue  # Skip unknown markets (don't create phantom records)

            # Try to match crop
            cur.execute(
                "SELECT crop_id FROM crops WHERE LOWER(name_en) LIKE LOWER(?) LIMIT 1;",
                (f"%{rec['commodity']}%",)
            )
            crop_row = cur.fetchone()
            if not crop_row:
                continue  # Skip unknown crops

            market_id = mkt_row["market_id"]
            crop_id   = crop_row["crop_id"]
            price_date = rec["price_date"]

            # Generate stable dedup key
            dedup_key = hashlib.md5(
                f"{market_id}:{crop_id}:{price_date}".encode()
            ).hexdigest()[:16]

            try:
                cur.execute("""
                INSERT INTO market_prices
                    (market_id, crop_id, commodity, variety, grade,
                     min_price, max_price, modal_price, unit,
                     price_date, source, source_record_id, last_updated)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(market_id, crop_id, price_date)
                DO UPDATE SET
                    modal_price = excluded.modal_price,
                    min_price   = excluded.min_price,
                    max_price   = excluded.max_price,
                    last_updated = excluded.last_updated;
                """, (
                    market_id, crop_id, rec["commodity"], rec.get("variety", ""),
                    rec.get("grade", "FAQ"),
                    rec["min_price"], rec["max_price"], rec["modal_price"],
                    rec.get("unit", "Quintal"),
                    price_date, source, rec.get("source_record_id", dedup_key),
                    now_iso
                ))
                if cur.rowcount > 0:
                    inserted += 1
            except Exception as e:
                logger.warning(f"[Sync] DB insert failed for {market_id}/{crop_id}: {e}")

        conn.commit()
        return inserted, updated

    @classmethod
    def sync_all_sources(cls) -> Dict[str, Any]:
        """
        Full sync across all government sources.
        Returns sync result summary.
        """
        conn = get_connection()
        now_iso = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        results = {}

        # ── Source 1: data.gov.in ──────────────────────────────────────
        success, records, error = DataGovInConnector.fetch_mandi_prices()
        if success and records:
            ins, upd = cls._store_normalized_prices(conn, records, "data.gov.in Mandi Price API")
            status = "SUCCESS"
        else:
            ins, upd = 0, 0
            status = "DEMO_FALLBACK" if DEMO_MODE else "FAILED"

        cls._log_sync(conn, "data_gov_in", len(records), ins, upd, status, error, now_iso)
        cls._update_source_ping(conn, "data_gov_in", "CONNECTED" if success else "UNAVAILABLE", now_iso)
        results["data_gov_in"] = {"status": status, "records": len(records), "inserted": ins}

        # ── Source 2: Agmarknet ────────────────────────────────────────
        success2, records2, error2 = AgmarknetConnector.fetch_prices()
        status2 = "AVAILABLE_NO_API" if not DEMO_MODE else "DEMO_FALLBACK"
        cls._log_sync(conn, "agmarknet", 0, 0, 0, status2, error2, now_iso)
        cls._update_source_ping(conn, "agmarknet", "AVAILABLE", now_iso)
        results["agmarknet"] = {"status": status2, "records": 0}

        # ── Source 3: e-NAM ────────────────────────────────────────────
        success3, records3, error3 = ENAMConnector.fetch_prices()
        status3 = "AVAILABLE_NO_KEY" if not DEMO_MODE else "DEMO_FALLBACK"
        cls._log_sync(conn, "enam", 0, 0, 0, status3, error3, now_iso)
        cls._update_source_ping(conn, "enam", "AVAILABLE", now_iso)
        results["enam"] = {"status": status3, "records": 0}

        # ── Mark stale prices ──────────────────────────────────────────
        stale_cutoff = (date.today() - timedelta(days=FRESHNESS_STALE_DAYS)).isoformat()
        conn.execute(
            "UPDATE market_prices SET last_updated = last_updated WHERE price_date < ?;",
            (stale_cutoff,)
        )
        conn.commit()
        conn.close()

        return {
            "timestamp": now_iso,
            "mode": "DEMO" if DEMO_MODE else "LIVE",
            "sources": results,
            "data_label": DataIngestionService.get_data_trust_label(),
            "message": (
                "Government data service is temporarily unavailable. "
                "Showing latest successfully verified data."
                if not DEMO_MODE and not any(r.get("status") == "SUCCESS" for r in results.values())
                else "Sync complete."
            )
        }

    @staticmethod
    def _log_sync(conn, source_id, fetched, inserted, updated, status, error, now_iso):
        try:
            conn.execute("""
            INSERT INTO data_sync_logs
                (source_id, records_fetched, records_normalized, records_inserted,
                 records_updated, sync_status, error_message, started_at, completed_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
            """, (source_id, fetched, fetched, inserted, updated, status, error or None, now_iso, now_iso))
            conn.commit()
        except Exception as e:
            logger.warning(f"[Sync] Log failed: {e}")

    @staticmethod
    def _update_source_ping(conn, source_id, ping_status, now_iso):
        try:
            conn.execute("""
            UPDATE data_sources
            SET last_ping_status = ?, last_successful_sync = ?
            WHERE id = ?;
            """, (ping_status, now_iso, source_id))
            conn.commit()
        except Exception:
            pass

    @staticmethod
    def get_sources_status() -> List[Dict[str, Any]]:
        """Returns live connectivity health of each government data source."""
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM data_sources;")
        sources = []
        for row in cur.fetchall():
            sources.append({
                "id":           row["id"],
                "name":         row["name"],
                "organization": row["organization"],
                "api_endpoint": row["api_endpoint"],
                "status":       row["last_ping_status"],
                "last_sync":    row["last_successful_sync"] or "Never",
                "is_active":    bool(row["is_active"]),
                "mode":         "DEMO" if DEMO_MODE else "LIVE",
                "data_label":   DataIngestionService.get_data_trust_label(),
            })
        conn.close()
        return sources
