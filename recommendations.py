from fastapi import APIRouter, Query, HTTPException
from backend.models import (
    RecommendationRequest, RecommendationResponse, MarketNetReturnDetail
)
from backend.services.recommendation import RecommendationEngine

router = APIRouter(prefix="/api", tags=["Recommendation Engine & Calculator"])

@router.post("/recommend-market", response_model=RecommendationResponse)
def recommend_market(request: RecommendationRequest):
    try:
        return RecommendationEngine.get_recommendation(request)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Recommendation engine error: {str(e)}")

@router.post("/calculate-net-return", response_model=RecommendationResponse)
def calculate_net_return(request: RecommendationRequest):
    return recommend_market(request)

@router.get("/markets/compare", response_model=RecommendationResponse)
def compare_markets(
    crop_id: str = Query("tomato"),
    quantity_qtl: float = Query(5.0),
    origin_district_id: str = Query("krishna"),
    vehicle_type: str = Query("minitruck")
):
    req = RecommendationRequest(
        crop_id=crop_id,
        quantity_qtl=quantity_qtl,
        origin_district_id=origin_district_id,
        vehicle_type=vehicle_type
    )
    return recommend_market(req)
