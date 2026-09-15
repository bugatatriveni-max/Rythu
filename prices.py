"""
FarmDirect — Prices Router (legacy redirect; main price endpoints in markets.py)
The /api/prices and /api/prices/latest endpoints are now in markets.py.
This file kept for backward compatibility.
"""
from fastapi import APIRouter
router = APIRouter(prefix="/api", tags=["Prices"])
# Price endpoints are now served from markets.py GET /api/prices and /api/prices/latest
