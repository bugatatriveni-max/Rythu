"""
FarmDirect — Voice Query Router
POST /api/voice/query — Process farmer voice queries with multi-turn session awareness
POST /api/voice/reset-session — Reset voice session context
GET /api/voice/status — Check Voice AI engine status and supported languages
"""
from fastapi import APIRouter
from backend.models import (
    VoiceQueryRequest, VoiceQueryResponse,
    VoiceSessionResetRequest, VoiceStatusResponse
)
from backend.services.voice_ai import VoiceAIService
from backend.config import (
    DEFAULT_VOICE_LANGUAGE, OPENAI_API_KEY, GEMINI_API_KEY, GROQ_API_KEY
)
from backend.database import get_connection

router = APIRouter(prefix="/api/voice", tags=["Voice AI"])

@router.post("/query", response_model=VoiceQueryResponse)
def voice_query(request: VoiceQueryRequest):
    """
    Process a farmer's voice query.
    Architecture: Query → Multi-turn Context Resolution → Intent Detection → Database Lookup → NLG → Answer
    IMPORTANT: AI never invents prices. All data from verified database.
    """
    return VoiceAIService.process_voice_query(
        query=request.query,
        language=request.language,
        farmer_district=request.farmer_district,
        session_id=request.session_id,
        session_context=request.session_context
    )

@router.post("/reset-session")
def reset_voice_session(request: VoiceSessionResetRequest):
    """Reset the current conversation context."""
    success = VoiceAIService.reset_session(request.session_id)
    return {"status": "SUCCESS", "session_id": request.session_id, "cleared": success}

@router.get("/status", response_model=VoiceStatusResponse)
def voice_status():
    """Returns the operational status of the Voice AI service."""
    # Determine active provider
    if GROQ_API_KEY:
        provider = "Groq Llama 3 (Verified Database Grounded)"
    elif OPENAI_API_KEY:
        provider = "OpenAI GPT-4o-mini (Verified Database Grounded)"
    elif GEMINI_API_KEY:
        provider = "Google Gemini (Verified Database Grounded)"
    else:
        provider = "FarmDirect Native Multilingual Engine (Verified Database Grounded)"

    conn = get_connection()
    c = conn.cursor()
    c.execute("SELECT COUNT(*) FROM crops;")
    crops_count = c.fetchone()[0]
    c.execute("SELECT COUNT(*) FROM markets WHERE status = 'ACTIVE';")
    markets_count = c.fetchone()[0]
    conn.close()

    return VoiceStatusResponse(
        service="FarmDirect Multilingual Voice AI",
        version="2.1.0",
        default_language=DEFAULT_VOICE_LANGUAGE,
        supported_languages=["te", "hi", "en"],
        ai_provider=provider,
        crops_supported=crops_count,
        verified_markets_count=markets_count
    )
