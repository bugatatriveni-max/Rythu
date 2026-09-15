"""
FarmDirect — Markets, Crops, Prices & Map API Router
Provides: GET /api/states, /api/states/{id}/districts, /api/districts/{id}/markets,
          GET /api/markets/{id}, GET /api/markets/map (lat/lng for Leaflet),
          GET /api/crops, GET /api/prices, GET /api/prices/latest
"""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from backend.database import get_connection
from backend.models import StateModel, DistrictModel, MarketModel, MarketCoordinatesModel, MarketPriceModel
from backend.services.ingestion import DataIngestionService

router = APIRouter(prefix="/api", tags=["Markets, Crops & Prices"])


# ── States ─────────────────────────────────────────────────────────────────
@router.get("/states", response_model=List[StateModel])
def get_all_states():
    conn = get_connection()
    rows = conn.execute("SELECT * FROM states ORDER BY name_en ASC;").fetchall()
    conn.close()
    return [StateModel(id=r["id"], code=r["code"], name_en=r["name_en"],
                       name_te=r["name_te"], name_hi=r["name_hi"], region=r["region"]) for r in rows]


# ── Districts ───────────────────────────────────────────────────────────────
@router.get("/states/{state_id}/districts", response_model=List[DistrictModel])
def get_districts_by_state(state_id: str):
    conn = get_connection()
    rows = conn.execute(
        "SELECT * FROM districts WHERE state_id = ? ORDER BY name_en ASC;", (state_id,)
    ).fetchall()
    conn.close()
    return [DistrictModel(id=r["id"], state_id=r["state_id"], name_en=r["name_en"],
                          name_te=r["name_te"], name_hi=r["name_hi"]) for r in rows]


# ── Markets by District ─────────────────────────────────────────────────────
@router.get("/districts/{district_id}/markets", response_model=List[MarketModel])
def get_markets_by_district(district_id: str):
    conn = get_connection()
    rows = conn.execute("""
        SELECT m.*, mc.latitude, mc.longitude, mc.geo_source, mc.is_verified
        FROM markets m
        LEFT JOIN market_coordinates mc ON m.market_id = mc.market_id
        WHERE m.district_id = ?
        ORDER BY m.market_name ASC;
    """, (district_id,)).fetchall()
    conn.close()
    return [_build_market_model(r) for r in rows]


# ── All Markets for Map (lat/lng only) ─────────────────────────────────────
@router.get("/markets/map/all")
def get_markets_for_map():
    """Returns lightweight market data for Leaflet map markers."""
    conn = get_connection()
    rows = conn.execute("""
        SELECT m.market_id, m.market_name, m.market_name_te, m.state_id,
               m.district_id, m.market_type, m.address, m.phone, m.status,
               mc.latitude, mc.longitude, mc.is_verified,
               p.modal_price, p.price_date, p.source as price_source, p.unit
        FROM markets m
        LEFT JOIN market_coordinates mc ON m.market_id = mc.market_id
        LEFT JOIN (
            SELECT market_id, modal_price, price_date, source, unit
            FROM market_prices
            WHERE id IN (SELECT MAX(id) FROM market_prices GROUP BY market_id)
        ) p ON m.market_id = p.market_id
        WHERE m.status = 'ACTIVE'
        ORDER BY m.market_name ASC;
    """).fetchall()
    conn.close()

    result = []
    for r in rows:
        has_coords = r["latitude"] is not None and r["longitude"] is not None
        freshness = DataIngestionService.get_freshness_status(r["price_date"]) if r["price_date"] else "UNAVAILABLE"
        result.append({
            "market_id":     r["market_id"],
            "market_name":   r["market_name"],
            "market_name_te": r["market_name_te"],
            "state_id":      r["state_id"],
            "district_id":   r["district_id"],
            "market_type":   r["market_type"],
            "address":       r["address"],
            "phone":         r["phone"],
            "has_coordinates": has_coords,
            "latitude":      float(r["latitude"]) if has_coords else None,
            "longitude":     float(r["longitude"]) if has_coords else None,
            "coordinates_note": None if has_coords else "Location coordinates unavailable",
            "geo_verified":  bool(r["is_verified"]) if r["is_verified"] is not None else False,
            "latest_price":  float(r["modal_price"]) if r["modal_price"] else None,
            "price_unit":    r["unit"] or "Quintal",
            "price_date":    r["price_date"],
            "price_source":  r["price_source"],
            "price_freshness": freshness,
            "freshness_emoji": DataIngestionService.freshness_emoji(freshness),
            "data_label":    DataIngestionService.get_data_trust_label(),
        })
    return {"markets": result, "total": len(result), "data_label": DataIngestionService.get_data_trust_label()}


# ── Market Detail ───────────────────────────────────────────────────────────
@router.get("/markets/{market_id}", response_model=MarketModel)
def get_market_detail(market_id: str):
    conn = get_connection()
    r = conn.execute("""
        SELECT m.*, mc.latitude, mc.longitude, mc.geo_source, mc.is_verified
        FROM markets m
        LEFT JOIN market_coordinates mc ON m.market_id = mc.market_id
        WHERE m.market_id = ?;
    """, (market_id,)).fetchone()
    conn.close()
    if not r:
        raise HTTPException(status_code=404, detail="Market not found.")
    return _build_market_model(r)


# ── Crops ───────────────────────────────────────────────────────────────────
@router.get("/crops")
def get_all_crops():
    conn = get_connection()
    rows = conn.execute("SELECT * FROM crops ORDER BY name_en ASC;").fetchall()
    conn.close()
    return {
        "crops": [
            {
                "crop_id":      r["crop_id"],
                "name_en":      r["name_en"],
                "name_te":      r["name_te"],
                "name_hi":      r["name_hi"],
                "name_ta":      r["name_ta"],
                "name_kn":      r["name_kn"],
                "category":     r["category"],
                "official_msp": r["official_msp"],
                "default_unit": r["default_unit"],
                "icon":         r["icon"],
            }
            for r in rows
        ]
    }


# ── Latest Prices with Freshness ────────────────────────────────────────────
@router.get("/prices/latest")
def get_latest_prices(
    crop_id:    Optional[str] = Query(None),
    state_id:   Optional[str] = Query(None),
    district_id: Optional[str] = Query(None),
    limit:      int = Query(50, ge=1, le=200)
):
    """
    Returns latest prices with freshness & trust labels.
    Every result shows: source, price_date, freshness status.
    """
    conn = get_connection()
    query = """
        SELECT p.*, m.market_name, m.market_name_te, m.state_id, m.district_id
        FROM market_prices p
        JOIN markets m ON p.market_id = m.market_id
        WHERE 1=1
    """
    params = []
    if crop_id:
        query += " AND p.crop_id = ?"
        params.append(crop_id)
    if state_id:
        query += " AND m.state_id = ?"
        params.append(state_id)
    if district_id:
        query += " AND m.district_id = ?"
        params.append(district_id)
    query += " ORDER BY p.price_date DESC, p.modal_price DESC LIMIT ?"
    params.append(limit)

    rows = conn.execute(query, params).fetchall()
    conn.close()

    results = []
    for r in rows:
        freshness = DataIngestionService.get_freshness_status(r["price_date"])
        results.append({
            "id":            r["id"],
            "market_id":     r["market_id"],
            "market_name":   r["market_name"],
            "market_name_te": r["market_name_te"],
            "state_id":      r["state_id"],
            "district_id":   r["district_id"],
            "crop_id":       r["crop_id"],
            "commodity":     r["commodity"],
            "variety":       r["variety"],
            "grade":         r["grade"],
            "min_price":     r["min_price"],
            "max_price":     r["max_price"],
            "modal_price":   r["modal_price"],
            "unit":          r["unit"],
            "arrival_quantity": r["arrival_quantity"],
            "price_date":    r["price_date"],
            "source":        r["source"],
            "last_updated":  r["last_updated"],
            "freshness":     freshness,
            "freshness_emoji": DataIngestionService.freshness_emoji(freshness),
            "data_status":   DataIngestionService.get_data_status(),
            "data_label":    DataIngestionService.get_data_trust_label(),
        })

    return {
        "prices": results,
        "total": len(results),
        "data_label": DataIngestionService.get_data_trust_label(),
        "mode": "DEMO" if __import__("backend.config", fromlist=["DEMO_MODE"]).DEMO_MODE else "LIVE",
    }


@router.get("/prices")
def get_prices(
    crop_id:    Optional[str] = Query(None),
    market_id:  Optional[str] = Query(None),
    limit:      int = Query(20, ge=1, le=100)
):
    return get_latest_prices(crop_id=crop_id, state_id=None, district_id=None, limit=limit)


# ── Helpers ─────────────────────────────────────────────────────────────────
def _build_market_model(r) -> MarketModel:
    has_coords = r["latitude"] is not None and r["longitude"] is not None
    coords = None
    if has_coords:
        coords = MarketCoordinatesModel(
            latitude=float(r["latitude"]),
            longitude=float(r["longitude"]),
            geo_source=r["geo_source"],
            is_verified=bool(r["is_verified"])
        )
    return MarketModel(
        market_id=r["market_id"], market_name=r["market_name"],
        market_name_te=r["market_name_te"], market_name_hi=r["market_name_hi"],
        state_id=r["state_id"], district_id=r["district_id"],
        market_type=r["market_type"], address=r["address"],
        pincode=r["pincode"], phone=r["phone"], email=r["email"],
        website=r["website"], commodities_traded=r["commodities_traded"],
        source=r["source"], source_url=r["source_url"],
        last_verified_at=r["last_verified_at"], status=r["status"],
        coordinates=coords
    )
