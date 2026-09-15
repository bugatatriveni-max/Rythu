from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import date, datetime

# --- Location Models ---
class StateModel(BaseModel):
    id: str
    code: str
    name_en: str
    name_te: Optional[str] = None
    name_hi: Optional[str] = None
    region: Optional[str] = None

class DistrictModel(BaseModel):
    id: str
    state_id: str
    name_en: str
    name_te: Optional[str] = None
    name_hi: Optional[str] = None

class MarketCoordinatesModel(BaseModel):
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    geo_source: Optional[str] = "Survey of India / Official Mandi Registry"
    is_verified: bool = False

class MarketModel(BaseModel):
    market_id: str
    market_name: str
    market_name_te: Optional[str] = None
    market_name_hi: Optional[str] = None
    state_id: str
    district_id: str
    market_type: str
    address: str
    pincode: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None
    commodities_traded: Optional[str] = None
    source: str = "Agmarknet / DMI"
    source_url: Optional[str] = None
    last_verified_at: Optional[str] = None
    status: str = "ACTIVE"
    coordinates: Optional[MarketCoordinatesModel] = None

# --- Crop & Price Models ---
class CropModel(BaseModel):
    crop_id: str
    name_en: str
    name_te: Optional[str] = None
    name_hi: Optional[str] = None
    name_ta: Optional[str] = None
    name_kn: Optional[str] = None
    category: str
    official_msp: Optional[float] = None
    default_unit: str = "Quintal"
    icon: str = "🌾"

class MarketPriceModel(BaseModel):
    id: Optional[int] = None
    market_id: str
    market_name: Optional[str] = None
    crop_id: str
    commodity: str
    variety: Optional[str] = None
    grade: Optional[str] = "FAQ"
    min_price: float
    max_price: float
    modal_price: float
    unit: str = "Quintal"
    arrival_quantity: float = 0.0
    price_date: str
    source: str
    last_updated: Optional[str] = None
    freshness: str = "FRESH" # FRESH, RECENT, STALE, UNAVAILABLE
    data_status: str = "VERIFIED" # VERIFIED, ESTIMATED, DEMO

# --- Charges & Transport ---
class MarketChargesModel(BaseModel):
    market_id: str
    market_fee_percent: float = 1.0
    loading_charge_per_qtl: float = 10.0
    unloading_charge_per_qtl: float = 18.0
    weighing_charge_per_qtl: float = 5.0
    handling_charge_per_qtl: float = 0.0
    other_charge_per_qtl: float = 0.0
    source: str = "State APMC Act Schedule"

class TransportEstimateModel(BaseModel):
    vehicle_type: str
    name_display: str
    base_fee: float
    rate_per_km: float
    trip_factor: float = 1.0
    capacity_quintals: float
    assumptions_note: str

# --- Recommendation & Calculator Payloads ---
class RecommendationRequest(BaseModel):
    crop_id: str
    quantity_qtl: float = Field(..., gt=0)
    origin_district_id: str
    vehicle_type: Optional[str] = "minitruck"
    preferred_date: Optional[str] = None

class MarketNetReturnDetail(BaseModel):
    market_id: str
    market_name: str
    market_name_te: Optional[str] = None
    state_id: str
    district_id: str
    market_type: str
    address: str
    phone: Optional[str] = None
    has_coordinates: bool = False
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    distance_km: float
    modal_price: float
    price_unit: str = "Quintal"
    price_date: str
    price_source: str
    price_freshness: str
    data_status: str
    gross_value: float
    estimated_transport_cost: float
    transport_assumptions: str
    known_market_charges: float
    charges_breakdown: Dict[str, float]
    charges_source: str
    estimated_net_return: float
    net_return_per_kg: float
    is_best_recommendation: bool = False
    reasons_why: List[str] = []

class RecommendationResponse(BaseModel):
    crop: CropModel
    quantity_qtl: float
    origin_district_id: str
    candidate_markets: List[MarketNetReturnDetail]
    recommended_market: Optional[MarketNetReturnDetail] = None
    calculation_formula: str = "Net Return = Gross Value (Quantity × Modal Price) − Transport Estimate − Known APMC Charges"
    disclaimer: str = "FarmDirect recommends the market with the highest estimated net return based on the latest verified data available. Estimates may change based on actual market price, vehicle cost and applicable charges."

# --- Voice AI Models ---
class VoiceQueryRequest(BaseModel):
    query: str
    language: str = "te"
    farmer_district: Optional[str] = None
    session_id: Optional[str] = None
    session_context: Optional[Dict[str, Any]] = None

class VoiceQueryResponse(BaseModel):
    recognized_query: str
    detected_language: str
    intent: str
    extracted_entities: Dict[str, Any]
    visual_answer: str
    spoken_answer: str
    session_id: Optional[str] = None
    session_context: Optional[Dict[str, Any]] = None
    selling_price: Optional[float] = None
    estimated_net_return: Optional[float] = None
    transport_cost: Optional[float] = None
    market_charges: Optional[float] = None
    market_name: Optional[str] = None
    data_available: bool = True
    action_data: Optional[Dict[str, Any]] = None
    audio_read_aloud_enabled: bool = True

class VoiceSessionResetRequest(BaseModel):
    session_id: str

class VoiceStatusResponse(BaseModel):
    service: str
    version: str
    default_language: str
    supported_languages: List[str]
    ai_provider: str
    crops_supported: int
    verified_markets_count: int

# --- Admin & Data Ingestion Models ---
class DataSourceStatusModel(BaseModel):
    id: str
    name: str
    status: str # CONNECTED, AVAILABLE, PARTIAL, OFFLINE
    last_sync: str
    records_count: int
    active_mode: str # LIVE vs DEMO

class AdminSyncResponse(BaseModel):
    status: str
    message: str
    records_updated: int
    sync_timestamp: str
