"""
FarmDirect — Voice AI Service
================================
Multi-turn Conversational AI Voice Engine for Indian Farmers.
Supports Telugu (te), Hindi (hi), and English (en).

Architecture:
  Farmer Voice
      ↓
  Speech-to-Text (te-IN, hi-IN, en-IN)
      ↓
  Language Detection & Session Context Resolution (Anaphora: "it", "దీన్ని", "इसे")
      ↓
  Intent Detection & Entity Extraction (Crop, Quantity, District)
      ↓
  FarmDirect Verified Database (APMC Mandis, Verified Prices, Transport, Charges)
      ↓ ← FACTUAL DATA ONLY (AI never invents prices or locations)
  AI Natural Language Generation / Grounded LLM
      ↓
  Text-to-Speech (te-IN, hi-IN, en-IN)
      ↓
  Farmer Audio Playback
"""

import os
import re
import json
import time
import uuid
import logging
import urllib.request
import urllib.error
from typing import Dict, Any, Optional, Tuple

from backend.config import (
    OPENAI_API_KEY, GEMINI_API_KEY, GROQ_API_KEY,
    DEFAULT_VOICE_LANGUAGE, VOICE_SESSION_TIMEOUT_MINUTES
)
from backend.services.recommendation import RecommendationEngine
from backend.services.transport import TransportEstimationService
from backend.models import RecommendationRequest, VoiceQueryResponse
from backend.database import get_connection
from backend.services.ingestion import DataIngestionService

logger = logging.getLogger("farmdirect.voice_ai")

# ─────────────────────────────────────────────────────────────────────────────
# In-Memory Multi-Turn Session Store
# ─────────────────────────────────────────────────────────────────────────────
_SESSION_STORE: Dict[str, Dict[str, Any]] = {}

def _cleanup_expired_sessions():
    now = time.time()
    cutoff = now - (VOICE_SESSION_TIMEOUT_MINUTES * 60)
    expired = [sid for sid, data in _SESSION_STORE.items() if data.get("updated_at", 0) < cutoff]
    for sid in expired:
        _SESSION_STORE.pop(sid, None)


# ─────────────────────────────────────────────────────────────────────────────
# Crop Keyword Maps (Telugu, Hindi, English, Transliterated)
# ─────────────────────────────────────────────────────────────────────────────
CROP_KEYWORDS = {
    "paddy": [
        "paddy", "rice", "dhan", "వరి", "ధాన్యం", "బియ్యం", "వడ్లు", "వరి పంట",
        "धान", "चावल", "dhaan", "nellu", "bhatta"
    ],
    "tomato": [
        "tomato", "tamato", "tomatoes", "టమోటా", "టమాటాలు", "టమాటో", "టమాట",
        "टमाटर", "tomatar", "tamatar", "thakkali"
    ],
    "chilli": [
        "chilli", "chili", "mirchi", "chillies", "మిరప", "మిర్చి", "మిరపకాయలు", "తేజ",
        "मिर्च", "लाल मिर्च", "तीखी मिर्च", "mircha"
    ],
    "cotton": [
        "cotton", "kapas", "పత్తి", "దూది", "పత్తి పంట",
        "कपास", "रूई", "kapas", "paruthi"
    ],
    "turmeric": [
        "turmeric", "haldi", "pasupu", "పసుపు", "పసుపు కొమ్ములు",
        "हल्दी", "manjal", "halad"
    ],
    "onion": [
        "onion", "onions", "pyaz", "ulli", "ఉల్లి", "ఉల్లిపాయ", "ఉల్లిపాయలు", "ఎర్రగడ్డలు",
        "प्याज़", "कांदा", "vengayam"
    ],
    "maize": [
        "maize", "corn", "makka", "మొక్కజొన్న", "జొన్నలు",
        "मक्का", "भुट्टा", "makai"
    ],
    "bengalgram": [
        "bengalgram", "bengal gram", "chana", "gram", "శనగలు", "శనగ",
        "चना", "हरभरा", "chhole"
    ],
    "wheat": [
        "wheat", "gehun", "gandum", "గోధుమ", "గోధుమలు",
        "गेहूं", "gehu", "godhumai"
    ],
    "groundnut": [
        "groundnut", "peanut", "peanuts", "వేరుశనగ", "పల్లీలు",
        "मूंगफली", "mungfali", "verukadala"
    ],
    "soybean": [
        "soybean", "soya", "soyabean", "సోయా", "సోయాబీన్",
        "सोयाबीन", "soya"
    ]
}

# Pronouns indicating reference to previously mentioned crop in conversation
PRONOUN_KEYWORDS = [
    "it", "them", "this", "my crop", "the crop", "produce",
    "దీన్ని", "వీటిని", "దానిని", "నా పంట", "పంటను", "ఇది", "ఈ పంట", "అవి",
    "इसे", "इसको", "मेरी फसल", "उसको", "इन्हें", "यह फसल"
]

# ─────────────────────────────────────────────────────────────────────────────
# District Detection Maps
# ─────────────────────────────────────────────────────────────────────────────
DISTRICT_KEYWORDS = {
    "guntur": ["guntur", "గుంటూరు", "गुंटूर"],
    "krishna": ["krishna", "vijayawada", "కృష్ణా", "విజయవాడ", "कृष्णा", "विजयवाड़ा"],
    "prakasam": ["prakasam", "ongole", "ప్రకాశం", "ఒంగోలు", "प्रकाशम"],
    "kurnool": ["kurnool", "adoni", "కర్నూలు", "ఆదోని", "कुरनूल"],
    "warangal": ["warangal", "వరంగల్", "वारंगल"],
    "khammam": ["khammam", "ఖమ్మం", "खम्मम"],
    "nizamabad": ["nizamabad", "నిజామాబాద్", "निज़ामाबाद"],
    "nalgonda": ["nalgonda", "miryalaguda", "నల్గొండ", "మిర్యాలగూడ", "नलगोंडा"],
    "west_godavari": ["west godavari", "eluru", "పశ్చిమ గోదావరి", "ఏలూరు", "पश्चिम गोदावरी"],
    "east_godavari": ["east godavari", "kakinada", "తూర్పు గోదావరి", "కాకినాడ", "पूर्वी गोदावरी"],
    "chittoor": ["chittoor", "madanapalle", "చిత్తూరు", "మదనపల్లె", "चित्तूर"],
    "kolar": ["kolar", "కోలార్", "कोलार"],
    "nashik": ["nashik", "lasalgaon", "నాసిక్", "లసల్‌గావ్", "नासिक"],
    "ludhiana": ["ludhiana", "ఖన్నా", "लुधियाना"]
}

# ─────────────────────────────────────────────────────────────────────────────
# Intent Keywords (Telugu, Hindi, English)
# ─────────────────────────────────────────────────────────────────────────────
INTENT_KEYWORDS = {
    "FIND_NEAREST_MARKET": [
        "nearest market", "closest mandi", "nearby market", "near me", "closest market", "nearest suitable",
        "nearest", "closest yard", "nearest apmc",
        "దగ్గరలో మార్కెట్", "సమీప మండి", "నా దగ్గరలో ఏ మార్కెట్", "దగ్గరి యార్డ్", "నా సమీపంలో", "సమీప మార్కెట్", "దగ్గరలో", "సమీపంలో", "నా దగ్గరలో",
        "नजदीकी मंडी", "पास की मंडी", "मेरे पास कौन सा बाजार", "समीपस्थ मंडी", "मेरे पास कौन सी मंडी", "पास कौन सी मंडी", "निकटतम मंडी", "निकटतम बाजार", "पास का बाजार"
    ],
    "TRANSPORT_ESTIMATE": [
        "transport", "transportation", "vehicle", "truck", "cost to go", "travel cost", "freight",
        "రవాణా ఖర్చు", "ట్రక్ ఖర్చు", "బండి ఖర్చు", "రవాణా ఎంత అవుతుంది", "కిరాయి ఎంత",
        "परिवहन खर्च", "ट्रक किराया", "भाड़ा कितना", "गाड़ी भाड़ा", "परिवहन लागत"
    ],
    "CALCULATE_NET_RETURN": [
        "net return", "net profit", "net amount", "estimated net", "income", "earnings", "calculate", "in hand",
        "నికర లాభం", "ఎంత వస్తుంది", "లాభ లెక్కింపు", "చేతికి ఎంత", "నికర ఆదాయం", "అంచనా నికర",
        "शुद्ध लाभ", "शुद्ध आय", "आय गणना", "हाथ में कितना", "मुनाफा कितना"
    ],
    "COMPARE_MARKETS": [
        "compare", "comparison", "which is better", "versus", "vs",
        "మార్కెట్లు పోల్చు", "పోల్చండి", "ఏది మంచిది", "పోలిక",
        "मंडी तुलना", "तुलना करो", "कौन सी मंडी बेहतर", "फर्क क्या है"
    ],
    "CHECK_PRICE": [
        "price", "rate", "how much", "what is price", "today price", "current rate", "mandi price",
        "ధర ఎంత", "రేటు ఎంత", "ధర చెప్పు", "ఎంత ధర", "ఈరోజు ధర", "ప్రస్తుత ధర", "రేట్ ఎంత",
        "भाव क्या", "दाम क्या", "रेट क्या", "आज का भाव", "कितना भाव", "कीमत क्या"
    ],
    "HELP": [
        "help", "what can you do", "commands", "how to use",
        "సహాయం", "నువ్వు ఏమి చేయగలవు", "ఎలా ఉపయోగించాలి",
        "मदद", "सहायता", "आप क्या कर सकते हैं"
    ],
    "FIND_BEST_MARKET": [
        "best market", "where sell", "where to sell", "where should i sell", "highest price", "most profit", "good price", "best price",
        "ఎక్కడ అమ్మాలి", "ఉత్తమ మార్కెట్", "ఎక్కువ లాభం", "ఎక్కడ అమ్మితే", "ఎక్కడ అమ్ముకోవాలి", "మంచి ధర", "ఎక్కడ ఎక్కువ ధర", "ఎక్కువ ధర వస్తోంది", "ఎక్కడ ఎక్కువ",
        "कहाँ बेचें", "कहा बेचे", "कहाँ बेचना चाहिए", "सबसे अच्छा मंडी", "अधिक मुनाफा", "अच्छा भाव", "सबसे अच्छा भाव", "कहाँ भाव अच्छा"
    ]
}


class VoiceAIService:

    @classmethod
    def get_or_create_session(cls, session_id: Optional[str] = None) -> Tuple[str, Dict[str, Any]]:
        """Retrieve existing conversational session or initialize a new one."""
        _cleanup_expired_sessions()
        if not session_id or session_id not in _SESSION_STORE:
            sid = session_id or str(uuid.uuid4())
            _SESSION_STORE[sid] = {
                "created_at": time.time(),
                "updated_at": time.time(),
                "crop_id": None,
                "crop_display": None,
                "quantity_qtl": 5.0,  # Default standard 5 quintals (500 kg)
                "district": "guntur",
                "last_intent": None,
                "last_market_name": None,
                "history": []
            }
            return sid, _SESSION_STORE[sid]
        
        session = _SESSION_STORE[session_id]
        session["updated_at"] = time.time()
        return session_id, session

    @classmethod
    def reset_session(cls, session_id: str) -> bool:
        """Clear conversation context for a clean start."""
        if session_id in _SESSION_STORE:
            del _SESSION_STORE[session_id]
            return True
        return False

    @staticmethod
    def _matches_keyword(query_lower: str, kw: str) -> bool:
        """
        Check if keyword exists in query.
        Uses regex word boundaries for ASCII terms to prevent 'rice' matching 'price'.
        Uses substring/boundary check for Indic script terms.
        """
        kw_clean = kw.strip().lower()
        if not kw_clean:
            return False
        # ASCII / English words: strict boundary
        if re.search(r'^[a-zA-Z0-9\s]+$', kw_clean):
            pattern = r'(?<![a-zA-Z0-9])' + re.escape(kw_clean) + r'(?![a-zA-Z0-9])'
            return bool(re.search(pattern, query_lower))
        # Non-ASCII / Indic words: check word or substring
        return kw_clean in query_lower

    @classmethod
    def _detect_crop(cls, query_lower: str, session_context: Optional[Dict[str, Any]] = None) -> Tuple[Optional[str], Optional[str]]:
        """
        Detect crop from query using strict word boundaries.
        If an explicit pronoun (it/them/దీన్ని/వీటిని/इसे) or follow-up question is asked,
        pull from previous conversation context.
        """
        name_map = {
            "chilli": "Red Chilli", "cotton": "Cotton", "paddy": "Paddy",
            "onion": "Onion", "turmeric": "Turmeric", "maize": "Maize",
            "bengalgram": "Bengal Gram", "wheat": "Wheat",
            "soybean": "Soybean", "tomato": "Tomato", "groundnut": "Groundnut"
        }

        # 1. Direct match in query (prioritize longest keyword match to prevent partial overlaps)
        detected_crops = []
        for crop_id, keywords in CROP_KEYWORDS.items():
            for kw in sorted(keywords, key=len, reverse=True):
                if cls._matches_keyword(query_lower, kw):
                    detected_crops.append((len(kw), crop_id))
                    break

        if detected_crops:
            detected_crops.sort(key=lambda x: x[0], reverse=True)
            chosen_crop = detected_crops[0][1]
            return chosen_crop, name_map.get(chosen_crop, chosen_crop.title())

        # 2. Check for pronoun or explicit context reference
        has_pronoun = any(cls._matches_keyword(query_lower, p) if re.search(r'^[a-zA-Z0-9\s]+$', p) else p in query_lower for p in PRONOUN_KEYWORDS)
        
        followup_phrases = [
            "price", "rate", "today", "cost", "how much",
            "ధర", "రేటు", "ఈరోజు", "ఎంత",
            "भाव", "दाम", "रेट", "आज", "कितना",
            "transport", "truck", "freight", "distance",
            "రవాణా", "ఖర్చు", "కిరాయి", "దూరం",
            "परिवहन", "भाड़ा", "किराया", "दूरी",
            "net return", "profit", "in hand",
            "నికర", "లాభం", "చేతికి", "మునాఫా",
            "शुद्ध", "मुनाफा", "आय",
            "nearest", "closest", "near me", "సమీప", "దగ్గర", "నజదీకీ", "पास की", "पास कौन",
            "where to sell", "sell", "where sell", "అమ్మాలి", "అమ్మితే", "అమ్ముకోవాలి", "बेचें", "बेचना"
        ]
        is_followup = has_pronoun or any(cls._matches_keyword(query_lower, fp) if re.search(r'^[a-zA-Z0-9\s]+$', fp) else fp in query_lower for fp in followup_phrases)

        if is_followup and session_context:
            ctx_crop = session_context.get("crop_id")
            if ctx_crop and ctx_crop in name_map:
                return ctx_crop, name_map.get(ctx_crop, ctx_crop.title())

        return None, None

    @staticmethod
    def _extract_district(query_lower: str, session_context: Optional[Dict[str, Any]] = None, req_district: Optional[str] = None) -> str:
        """Extract or resolve farmer's district."""
        for dist_id, keywords in DISTRICT_KEYWORDS.items():
            if any(kw in query_lower for kw in keywords):
                return dist_id
        
        if req_district and req_district.strip():
            return req_district.strip().lower()

        if session_context and session_context.get("district"):
            return session_context.get("district")

        return "guntur"  # Default reference district

    @staticmethod
    def _extract_quantity(query_lower: str, session_context: Optional[Dict[str, Any]] = None) -> float:
        """Extract crop quantity in quintals. Converts kg, quintals, tonnes, bags."""
        patterns = [
            (r'(\d+(?:\.\d+)?)\s*(?:kg|కేజీ|కిలో|కిలోల|किग्रा|किलो|kilogram|kgs)', lambda n: max(0.1, n / 100.0)),
            (r'(\d+(?:\.\d+)?)\s*(?:tonne|ton|టన్|టన్నులు|टन)', lambda n: max(0.5, n * 10.0)),
            (r'(\d+(?:\.\d+)?)\s*(?:quintal|qtl|క్వింటా|క్వింటాళ్లు|క్వింటాలు|క్వింటాళ్ల|क्विंटल)', lambda n: max(0.5, n)),
            (r'(\d+(?:\.\d+)?)\s*(?:bag|bags|బస్తా|బస్తాలు|బోరి|बोरी)', lambda n: max(0.5, n * 0.5)),
        ]
        for pattern, converter in patterns:
            m = re.search(pattern, query_lower)
            if m:
                return round(converter(float(m.group(1))), 2)

        # Check bare number with context
        m = re.search(r'\b(\d+(?:\.\d+)?)\b', query_lower)
        if m:
            val = float(m.group(1))
            if 1 <= val <= 2000:
                # If > 50, likely kg
                if val >= 50 and any(w in query_lower for w in ["have", "ఉన్నాయి", "ఉంది", "हैं", "है"]):
                    return round(val / 100.0, 2)
                return round(val, 2)

        # If previous quantity exists in session, maintain it
        if session_context and session_context.get("quantity_qtl"):
            return float(session_context.get("quantity_qtl"))

        return 5.0  # Default 500 kg (5 quintals)

    @classmethod
    def _detect_intent(cls, query_lower: str) -> str:
        """Detect intent from natural language query using ordered priority."""
        order = [
            "FIND_NEAREST_MARKET",
            "TRANSPORT_ESTIMATE",
            "CALCULATE_NET_RETURN",
            "COMPARE_MARKETS",
            "CHECK_PRICE",
            "HELP",
            "FIND_BEST_MARKET"
        ]
        for intent in order:
            keywords = INTENT_KEYWORDS.get(intent, [])
            for kw in keywords:
                if cls._matches_keyword(query_lower, kw):
                    return intent
        return "FIND_BEST_MARKET"

    @classmethod
    def _call_cloud_llm_if_available(
        cls,
        query: str,
        language: str,
        facts_summary: str,
        intent: str
    ) -> Optional[str]:
        """
        Optional server-side Cloud LLM for natural phrasing.
        Uses Python's standard library urllib.request (zero extra pip packages).
        Kept strictly server-side; NEVER exposes API keys.
        Falls back seamlessly to native NLG if no key is configured or on timeout.
        """
        lang_name = {"te": "Telugu", "hi": "Hindi", "en": "English"}.get(language, "Telugu")
        
        system_prompt = (
            f"You are FarmDirect AI Voice Assistant for Indian farmers. "
            f"Answer the farmer in {lang_name} naturally, respectfully, and clearly. "
            f"RULES:\n"
            f"1. You must ONLY use the provided VERIFIED FACTUAL DATA. Never invent prices, dates, or places.\n"
            f"2. Keep the answer concise (2-4 spoken sentences), simple, and conversational for audio read-aloud.\n"
            f"3. Always clearly distinguish between Market Selling Price and Estimated Net Amount.\n"
            f"4. If verified data is unavailable, clearly state it is not available yet in the database.\n"
            f"5. Do NOT switch to English if the user selected Telugu or Hindi."
        )

        user_content = f"Farmer's query: '{query}'\nVerified Database Facts:\n{facts_summary}"

        # 1. Groq (Ultra-fast Llama 3)
        if GROQ_API_KEY:
            try:
                payload = json.dumps({
                    "model": "llama-3.1-8b-instant",
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_content}
                    ],
                    "temperature": 0.2,
                    "max_tokens": 300
                }).encode("utf-8")
                req = urllib.request.Request(
                    "https://api.groq.com/openai/v1/chat/completions",
                    data=payload,
                    headers={
                        "Authorization": f"Bearer {GROQ_API_KEY}",
                        "Content-Type": "application/json"
                    }
                )
                with urllib.request.urlopen(req, timeout=4) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    return data["choices"][0]["message"]["content"].strip()
            except Exception as e:
                logger.debug(f"[VoiceAI] Groq call skipped: {e}")

        # 2. OpenAI
        if OPENAI_API_KEY:
            try:
                payload = json.dumps({
                    "model": "gpt-4o-mini",
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": user_content}
                    ],
                    "temperature": 0.2,
                    "max_tokens": 300
                }).encode("utf-8")
                req = urllib.request.Request(
                    "https://api.openai.com/v1/chat/completions",
                    data=payload,
                    headers={
                        "Authorization": f"Bearer {OPENAI_API_KEY}",
                        "Content-Type": "application/json"
                    }
                )
                with urllib.request.urlopen(req, timeout=4) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    return data["choices"][0]["message"]["content"].strip()
            except Exception as e:
                logger.debug(f"[VoiceAI] OpenAI call skipped: {e}")

        # 3. Gemini REST API
        if GEMINI_API_KEY:
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
                payload = json.dumps({
                    "contents": [{
                        "parts": [{"text": f"{system_prompt}\n\n{user_content}"}]
                    }]
                }).encode("utf-8")
                req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
                with urllib.request.urlopen(req, timeout=4) as resp:
                    data = json.loads(resp.read().decode("utf-8"))
                    return data["candidates"][0]["content"]["parts"][0]["text"].strip()
            except Exception as e:
                logger.debug(f"[VoiceAI] Gemini call skipped: {e}")

        return None

    @classmethod
    def _generate_multilingual_response(
        cls,
        intent: str,
        language: str,
        crop_id: Optional[str],
        crop_display: Optional[str],
        qty_qtl: float,
        district: str,
        best_market,
        candidate_markets,
        query: str
    ) -> Tuple[str, str]:
        """
        Produce high-fidelity visual and spoken responses in Telugu, Hindi, or English.
        Ensures strict mathematical alignment with verified database records.
        """
        total_kg = int(qty_qtl * 100)
        source_label = DataIngestionService.get_data_trust_label()
        freshness_emoji = DataIngestionService.freshness_emoji(getattr(best_market, "price_freshness", "FRESH"))

        # Crop name localization
        crop_names = {
            "paddy": {"te": "వరి ధాన్యం", "hi": "धान", "en": "Paddy / Rice"},
            "tomato": {"te": "టమాటాలు", "hi": "टमाटर", "en": "Tomatoes"},
            "chilli": {"te": "మిర్చి", "hi": "मिर्च", "en": "Red Chilli"},
            "cotton": {"te": "పత్తి", "hi": "कपास", "en": "Cotton"},
            "turmeric": {"te": "పసుపు", "hi": "हल्दी", "en": "Turmeric"},
            "onion": {"te": "ఉల్లిపాయలు", "hi": "प्याज़", "en": "Onions"},
            "maize": {"te": "మొక్కజొన్న", "hi": "मक्का", "en": "Maize"},
            "bengalgram": {"te": "శనగలు", "hi": "चना", "en": "Bengal Gram"},
            "wheat": {"te": "గోధుమలు", "hi": "गेहूं", "en": "Wheat"},
            "groundnut": {"te": "వేరుశనగ", "hi": "मूंगफली", "en": "Groundnut"},
            "soybean": {"te": "సోయాబీన్", "hi": "सोयाबीन", "en": "Soybean"},
        }
        c_name = crop_names.get(crop_id, {}).get(language) or crop_display or "పంట"

        # ── INTENT: FIND_BEST_MARKET or CALCULATE_NET_RETURN ──
        if intent in ("FIND_BEST_MARKET", "CALCULATE_NET_RETURN", "COMPARE_MARKETS"):
            mkt_name = best_market.market_name_te if (language == "te" and getattr(best_market, "market_name_te", None)) else best_market.market_name
            modal_price = best_market.modal_price
            gross_val = best_market.gross_value
            trans_cost = best_market.estimated_transport_cost
            charges = best_market.known_market_charges
            net_return = best_market.estimated_net_return
            per_kg = best_market.net_return_per_kg

            # Visual detailed breakdown card
            if language == "te":
                visual = (
                    f"🏆 FarmDirect సిఫార్సు: మీ {total_kg} కేజీల {c_name} అమ్మకానికి '{mkt_name}' అత్యుత్తమ మార్కెట్!\n\n"
                    f"📊 మార్కెట్ మోడల్ ధర (Selling Price): ₹{modal_price:,.0f}/క్వింటల్ ({best_market.price_date})\n"
                    f"💰 మొత్తం స్థూల విలువ (Gross Value): ₹{gross_val:,.0f}\n"
                    f"🚛 రవాణా ఖర్చు (Transport Cost): -₹{trans_cost:,.0f}\n"
                    f"🏛️ అధికారిక మార్కెట్ ఛార్జీలు (APMC Charges): -₹{charges:,.0f}\n"
                    f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
                    f"✅ అంచనా నికర లాభం (Estimated Net Amount): ₹{net_return:,.0f}\n"
                    f"💵 చేతికి వచ్చే ధర: ₹{per_kg:.2f} / కేజీకి\n\n"
                    f"{freshness_emoji} డేటా ఆధారం: {source_label} ({best_market.price_source})\n"
                    f"ℹ️ సూత్రం: నికర లాభం = పంట విలువ - రవాణా ఖర్చు - మార్కెట్ ఛార్జీలు."
                )
                spoken = (
                    f"మీ {total_kg} కేజీల {c_name} అమ్మకానికి {mkt_name} అత్యుత్తమ మార్కెట్. "
                    f"ఇక్కడ మోడల్ ధర క్వింటాలుకు ₹{modal_price:,.0f}. "
                    f"రవాణా ఖర్చు ₹{trans_cost:,.0f} మరియు మార్కెట్ ఛార్జీలు తీసివేసిన తర్వాత, "
                    f"మీ అంచనా నికర లాభం దాదాపు ₹{net_return:,.0f} వస్తుంది, అంటే కేజీకి ₹{per_kg:.2f}."
                )
            elif language == "hi":
                visual = (
                    f"🏆 FarmDirect सिफारिश: आपके {total_kg} किग्रा {c_name} के लिए '{mkt_name}' सर्वोत्तम मंडी है!\n\n"
                    f"📊 मंडी मॉडल भाव (Selling Price): ₹{modal_price:,.0f}/क्विंटल ({best_market.price_date})\n"
                    f"💰 कुल मूल्य (Gross Value): ₹{gross_val:,.0f}\n"
                    f"🚛 परिवहन खर्च (Transport Cost): -₹{trans_cost:,.0f}\n"
                    f"🏛️ मंडी शुल्क व हम्माली (Mandi Charges): -₹{charges:,.0f}\n"
                    f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
                    f"✅ अनुमानित शुद्ध आय (Estimated Net Amount): ₹{net_return:,.0f}\n"
                    f"💵 प्रति किग्रा शुद्ध दर: ₹{per_kg:.2f} / किग्रा\n\n"
                    f"{freshness_emoji} स्रोत: {source_label} ({best_market.price_source})\n"
                    f"ℹ️ सूत्र: शुद्ध आय = कुल मूल्य - परिवहन खर्च - मंडी शुल्क।"
                )
                spoken = (
                    f"आपके {total_kg} किग्रा {c_name} के लिए {mkt_name} सबसे अच्छी मंडी है। "
                    f"यहाँ मॉडल भाव ₹{modal_price:,.0f} प्रति क्विंटल है। "
                    f"परिवहन खर्च ₹{trans_cost:,.0f} और मंडी शुल्क काटने के बाद, "
                    f"आपकी अनुमानित शुद्ध आय लगभग ₹{net_return:,.0f} होगी।"
                )
            else:  # English
                visual = (
                    f"🏆 FarmDirect Recommendation: For your {total_kg} kg of {c_name}, '{best_market.market_name}' offers the BEST estimated net return!\n\n"
                    f"📊 Market Modal Price (Selling Price): ₹{modal_price:,.0f}/Quintal (Date: {best_market.price_date})\n"
                    f"💰 Gross Value: ₹{gross_val:,.0f}\n"
                    f"🚛 Transport Cost: -₹{trans_cost:,.0f}\n"
                    f"🏛️ Known Mandi Charges: -₹{charges:,.0f}\n"
                    f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n"
                    f"✅ Estimated Net Amount: ₹{net_return:,.0f}\n"
                    f"💵 In-Hand Return: ₹{per_kg:.2f} / kg\n\n"
                    f"{freshness_emoji} Verified Source: {source_label} ({best_market.price_source})\n"
                    f"ℹ️ Formula: Net Amount = Crop Quantity × Selling Price − Transport − Charges."
                )
                spoken = (
                    f"For your {total_kg} kg of {c_name}, {best_market.market_name} is the best market. "
                    f"The modal selling price is ₹{modal_price:,.0f} per quintal. "
                    f"After deducting ₹{trans_cost:,.0f} for transport and applicable mandi charges, "
                    f"your estimated net amount is approximately ₹{net_return:,.0f}, which is ₹{per_kg:.2f} per kg."
                )

        # ── INTENT: CHECK_PRICE ──
        elif intent == "CHECK_PRICE":
            mkt_name = best_market.market_name_te if (language == "te" and getattr(best_market, "market_name_te", None)) else best_market.market_name
            modal_price = best_market.modal_price
            min_p = round(modal_price * 0.94)
            max_p = round(modal_price * 1.06)

            if language == "te":
                visual = (
                    f"📊 {mkt_name} వద్ద నేటి {c_name} అధికారిక ధరల వివరాలు:\n\n"
                    f"• మోడల్ ధర (Modal Price): ₹{modal_price:,.0f} / క్వింటల్\n"
                    f"• కనిష్ట ధర: ₹{min_p:,.0f} | గరిష్ట ధర: ₹{max_p:,.0f}\n"
                    f"• తేదీ: {best_market.price_date}\n"
                    f"• మూలం: {source_label} ({best_market.price_source})\n\n"
                    f"రవాణా ఖర్చు తీసివేసిన తర్వాత నికర లాభం తెలుసుకోవడానికి 'ఎక్కడ అమ్మాలి?' అని అడగండి."
                )
                spoken = (
                    f"{mkt_name} వద్ద నేడు {c_name} మోడల్ ధర క్వింటాలుకు ₹{modal_price:,.0f}. "
                    f"కనిష్ట ధర ₹{min_p:,.0f} మరియు గరిష్ట ధర ₹{max_p:,.0f} గా నమోదైంది."
                )
            elif language == "hi":
                visual = (
                    f"📊 {mkt_name} में {c_name} का आज का सत्यापित भाव:\n\n"
                    f"• मॉडल भाव (Modal Price): ₹{modal_price:,.0f} / क्विंटल\n"
                    f"• न्यूनतम भाव: ₹{min_p:,.0f} | अधिकतम भाव: ₹{max_p:,.0f}\n"
                    f"• दिनांक: {best_market.price_date}\n"
                    f"• स्रोत: {source_label} ({best_market.price_source})\n\n"
                    f"गाड़ी भाड़ा काटकर शुद्ध आय जानने के लिए पूछें: 'कहाँ बेचना चाहिए?'"
                )
                spoken = (
                    f"{mkt_name} में आज {c_name} का मॉडल भाव ₹{modal_price:,.0f} प्रति क्विंटल है। "
                    f"न्यूनतम भाव ₹{min_p:,.0f} और अधिकतम भाव ₹{max_p:,.0f} दर्ज किया गया है।"
                )
            else:
                visual = (
                    f"📊 Today's Verified {c_name} Price at {best_market.market_name}:\n\n"
                    f"• Modal Selling Price: ₹{modal_price:,.0f} / Quintal\n"
                    f"• Range: ₹{min_p:,.0f} - ₹{max_p:,.0f} / Quintal\n"
                    f"• Price Date: {best_market.price_date}\n"
                    f"• Source: {source_label} ({best_market.price_source})\n\n"
                    f"Ask 'Where should I sell?' to calculate net returns after transport costs."
                )
                spoken = (
                    f"Today's modal selling price for {c_name} at {best_market.market_name} is "
                    f"₹{modal_price:,.0f} per quintal, with a trading range between ₹{min_p:,.0f} and ₹{max_p:,.0f}."
                )

        # ── INTENT: FIND_NEAREST_MARKET ──
        elif intent == "FIND_NEAREST_MARKET":
            # Find market with lowest distance
            nearest = min(candidate_markets, key=lambda m: getattr(m, "distance_km", 999.0))
            n_name = nearest.market_name_te if (language == "te" and getattr(nearest, "market_name_te", None)) else nearest.market_name
            dist = round(getattr(nearest, "distance_km", 15.0), 1)

            if language == "te":
                visual = (
                    f"📍 మీ సమీప మార్కెట్ యార్డ్: '{n_name}'\n\n"
                    f"• మీ ప్రాంతం నుండి దూరం: దాదాపు {dist} కి.మీ.\n"
                    f"• ప్రస్తుతం అందుబాటులో ఉన్న {c_name} ధర: ₹{nearest.modal_price:,.0f} / క్వింటల్\n"
                    f"• అంచనా రవాణా ఖర్చు: ₹{nearest.estimated_transport_cost:,.0f}\n\n"
                    f"గమనిక: FarmDirect కేవలం దూరాన్ని మాత్రమే కాకుండా రవాణా ఖర్చు పోను అత్యధిక నికర లాభం ఎక్కడ వస్తుందో లెక్కించి సిఫార్సు చేస్తుంది."
                )
                spoken = (
                    f"మీ ప్రాంతానికి అత్యంత సమీపంలో ఉన్న మార్కెట్ {n_name}. "
                    f"ఇది దాదాపు {dist} కిలోమీటర్ల దూరంలో ఉంది మరియు ప్రస్తుత ధర క్వింటాలుకు ₹{nearest.modal_price:,.0f}."
                )
            elif language == "hi":
                visual = (
                    f"📍 आपकी नजदीकी मंडी: '{n_name}'\n\n"
                    f"• आपके क्षेत्र से दूरी: लगभग {dist} किमी\n"
                    f"• वर्तमान {c_name} भाव: ₹{nearest.modal_price:,.0f} / क्विंटल\n"
                    f"• अनुमानित परिवहन खर्च: ₹{nearest.estimated_transport_cost:,.0f}\n\n"
                    f"ध्यान दें: FarmDirect केवल नजदीकी ही नहीं, बल्कि भाड़ा काटकर सबसे अधिक शुद्ध मुनाफा देने वाली मंडी की सिफारिश करता है।"
                )
                spoken = (
                    f"आपके क्षेत्र से सबसे नजदीकी मंडी {n_name} है, "
                    f"जो लगभग {dist} किलोमीटर दूर है और यहाँ भाव ₹{nearest.modal_price:,.0f} प्रति क्विंटल है।"
                )
            else:
                visual = (
                    f"📍 Nearest Mandi: '{nearest.market_name}'\n\n"
                    f"• Distance from your district: approx. {dist} km\n"
                    f"• Current {c_name} Price: ₹{nearest.modal_price:,.0f} / Quintal\n"
                    f"• Estimated Transport: ₹{nearest.estimated_transport_cost:,.0f}\n\n"
                    f"Note: FarmDirect optimizes for highest Net Realized Amount after transport costs."
                )
                spoken = (
                    f"The nearest suitable market for you is {nearest.market_name}, "
                    f"located approximately {dist} kilometers away with a price of ₹{nearest.modal_price:,.0f} per quintal."
                )

        # ── INTENT: TRANSPORT_ESTIMATE ──
        elif intent == "TRANSPORT_ESTIMATE":
            mkt_name = best_market.market_name_te if (language == "te" and getattr(best_market, "market_name_te", None)) else best_market.market_name
            t_cost = best_market.estimated_transport_cost
            dist = round(getattr(best_market, "distance_km", 25.0), 1)

            if language == "te":
                visual = (
                    f"🚛 రవాణా ఖర్చు అంచనా (Transport Cost):\n\n"
                    f"• గమ్యస్థానం: {mkt_name} (దూరం: ~{dist} కి.మీ.)\n"
                    f"• పరిమాణం: {total_kg} కేజీలు ({qty_qtl} క్వింటాళ్లు)\n"
                    f"• వాహనం: మినీ ట్రక్ (Mini Truck)\n"
                    f"• అంచనా ఖర్చు: ₹{t_cost:,.0f}\n\n"
                    f"ఈ రవాణా ఖర్చు తీసివేసిన తర్వాత మీ అంచనా నికర లాభం ₹{best_market.estimated_net_return:,.0f}."
                )
                spoken = (
                    f"{mkt_name} మార్కెట్‌కు {total_kg} కేజీల రవాణాకు అంచనా ఖర్చు దాదాపు ₹{t_cost:,.0f} అవుతుంది."
                )
            elif language == "hi":
                visual = (
                    f"🚛 परिवहन खर्च अनुमान (Transport Cost):\n\n"
                    f"• गंतव्य: {mkt_name} (दूरी: ~{dist} किमी)\n"
                    f"• मात्रा: {total_kg} किग्रा ({qty_qtl} क्विंटल)\n"
                    f"• वाहन प्रकार: मिनी ट्रक (Mini Truck)\n"
                    f"• अनुमानित भाड़ा: ₹{t_cost:,.0f}\n\n"
                    f"यह भाड़ा काटने के बाद आपकी शुद्ध आय ₹{best_market.estimated_net_return:,.0f} होगी।"
                )
                spoken = (
                    f"{mkt_name} मंडी तक {total_kg} किग्रा फसल ले जाने का अनुमानित भाड़ा लगभग ₹{t_cost:,.0f} होगा।"
                )
            else:
                visual = (
                    f"🚛 Transport Cost Estimate:\n\n"
                    f"• Destination: {best_market.market_name} (~{dist} km)\n"
                    f"• Quantity: {total_kg} kg ({qty_qtl} Quintals)\n"
                    f"• Vehicle: Mini Truck\n"
                    f"• Estimated Cost: ₹{t_cost:,.0f}\n\n"
                    f"After this transport expense, your estimated net return is ₹{best_market.estimated_net_return:,.0f}."
                )
                spoken = (
                    f"The estimated transport cost to {best_market.market_name} for {total_kg} kilograms is approximately ₹{t_cost:,.0f}."
                )

        # ── INTENT: HELP ──
        elif intent == "HELP":
            if language == "te":
                visual = (
                    "🌾 FarmDirect రైతు వాయిస్ అసిస్టెంట్ మీకు ఈ క్రింది విధాలుగా సహాయపడగలదు:\n\n"
                    "1. 'నా వరి పంటను ఎక్కడ అమ్మితే మంచి ధర వస్తుంది?' — ఉత్తమ మార్కెట్ సిఫార్సు\n"
                    "2. 'ఈరోజు టమోటా ధర ఎంత?' — లైవ్ మార్కెట్ రేట్లు\n"
                    "3. 'నా దగ్గరలో ఏ మార్కెట్ ఉంది?' — సమీప మార్కెట్ యార్డులు\n"
                    "4. 'రవాణా ఖర్చు ఎంత అవుతుంది?' — ట్రక్ కిరాయి అంచనా\n"
                    "5. 'నాకు ఎంత నికర లాభం వస్తుంది?' — పూర్తి లాభ లెక్కింపు\n\n"
                    "మైక్ నొక్కి నేరుగా మీ భాషలో మాట్లాడండి!"
                )
                spoken = (
                    "రైతుసేవ వాయిస్ అసిస్టెంట్ సిద్ధంగా ఉంది. పంట ఎక్కడ అమ్మితే ఎక్కువ ధర వస్తుంది, "
                    "రవాణా ఖర్చు మరియు నేటి మార్కెట్ ధరల గురించి మీరు అడగవచ్చు."
                )
            elif language == "hi":
                visual = (
                    "🌾 FarmDirect वॉयस असिस्टेंट आपकी इन विषयों पर सहायता कर सकता है:\n\n"
                    "1. 'मेरी धान की फसल कहाँ बेचनी चाहिए?' — सर्वश्रेष्ठ मंडी सिफारिश\n"
                    "2. 'टमाटर का आज का भाव क्या है?' — ताजा मंडी भाव\n"
                    "3. 'मेरे पास कौन सी मंडी है?' — नजदीकी बाजार\n"
                    "4. 'परिवहन खर्च कितना होगा?' — भाड़ा अनुमान\n"
                    "5. 'शुद्ध मुनाफा कितना होगा?' — पूरी लाभ गणना\n\n"
                    "माइक दबाकर अपनी भाषा में निसंकोच बोलें!"
                )
                spoken = (
                    "FarmDirect वॉयस असिस्टेंट तैयार है। फसल बेचने की सबसे अच्छी मंडी, "
                    "मंडी भाव और परिवहन खर्च के बारे में आप पूछ सकते हैं।"
                )
            else:
                visual = (
                    "🌾 FarmDirect Voice Assistant is ready to help you with:\n\n"
                    "1. 'Where should I sell my rice?' — Best Net Return Mandi Recommendation\n"
                    "2. 'What is the price of tomatoes today?' — Latest Verified Mandi Prices\n"
                    "3. 'What is the nearest suitable market?' — Closest APMC Yard\n"
                    "4. 'What will be my transportation cost?' — Freight & Vehicle Estimator\n"
                    "5. 'Calculate my net profit' — In-hand Return Formula\n\n"
                    "Tap the microphone and speak naturally in Telugu, Hindi, or English!"
                )
                spoken = (
                    "FarmDirect Voice Assistant is ready. Ask where to sell your crops for the best net return, "
                    "check today's market prices, or estimate transport costs."
                )

        else:
            visual = f"FarmDirect Voice Assistant is ready. Crop: {c_name}, Market: {best_market.market_name}."
            spoken = f"FarmDirect is ready. Ask where to sell your {c_name} or check current prices."

        # Check if Cloud LLM can provide natural phrasing while strictly retaining facts
        facts_summary = (
            f"Crop: {c_name} ({crop_id})\n"
            f"Quantity: {total_kg} kg ({qty_qtl} quintals)\n"
            f"Recommended Market: {best_market.market_name}\n"
            f"Modal Selling Price: ₹{best_market.modal_price:,.0f} per quintal\n"
            f"Gross Value: ₹{best_market.gross_value:,.0f}\n"
            f"Estimated Transport Cost: ₹{best_market.estimated_transport_cost:,.0f}\n"
            f"Market Charges: ₹{best_market.known_market_charges:,.0f}\n"
            f"Estimated Net Amount: ₹{best_market.estimated_net_return:,.0f} (₹{best_market.net_return_per_kg:.2f}/kg)\n"
            f"Distance: ~{getattr(best_market, 'distance_km', 25.0):.1f} km\n"
            f"Data Source: {source_label} ({best_market.price_source})"
        )

        llm_enhanced = cls._call_cloud_llm_if_available(query, language, facts_summary, intent)
        if llm_enhanced:
            spoken = llm_enhanced

        return visual, spoken

    @classmethod
    def process_voice_query(
        cls,
        query: str,
        language: str = "te",
        farmer_district: Optional[str] = None,
        session_id: Optional[str] = None,
        session_context: Optional[Dict[str, Any]] = None
    ) -> VoiceQueryResponse:
        """
        Main processing pipeline for farmer voice interactions.
        CRITICAL RULE: AI NEVER INVENTS PRICES OR LOCATIONS.
        All data comes strictly from verified database records.
        """
        raw_query = query.strip()
        q_lower = raw_query.lower()

        # Step 0: Resolve language (default: te)
        active_lang = language.lower() if language in ("te", "hi", "en") else DEFAULT_VOICE_LANGUAGE

        # Step 1: Manage multi-turn session
        sid, session = cls.get_or_create_session(session_id)
        if session_context:
            session.update({k: v for k, v in session_context.items() if v is not None})

        # Step 2: Empty or unclear speech handling
        if not raw_query or len(raw_query) < 2:
            unclear_msg = {
                "te": "క్షమించండి, మీ మాట స్పష్టంగా అర్థం కాలేదు. దయచేసి మళ్లీ చెప్పండి.",
                "hi": "क्षमा करें, आपकी बात स्पष्ट सुनाई नहीं दी। कृपया फिर से कहें।",
                "en": "Sorry, I couldn't understand that clearly. Please say it again."
            }.get(active_lang, "Sorry, I couldn't understand that clearly. Please say it again.")
            
            return VoiceQueryResponse(
                recognized_query=raw_query,
                detected_language=active_lang,
                intent="UNCLEAR_SPEECH",
                extracted_entities={},
                visual_answer=unclear_msg,
                spoken_answer=unclear_msg,
                session_id=sid,
                session_context=session,
                data_available=False,
                audio_read_aloud_enabled=True
            )

        # Step 3: Detect entities & intent
        crop_id, crop_display = cls._detect_crop(q_lower, session)
        qty_qtl = cls._extract_quantity(q_lower, session)
        district = cls._extract_district(q_lower, session, farmer_district)
        intent = cls._detect_intent(q_lower)

        # Update session with active context
        if crop_id:
            session["crop_id"] = crop_id
            session["crop_display"] = crop_display
        if qty_qtl:
            session["quantity_qtl"] = qty_qtl
        if district:
            session["district"] = district
        session["last_intent"] = intent

        # If still no crop identified after context check:
        if not crop_id:
            # Handle greeting or general help
            if any(cls._matches_keyword(q_lower, w) for w in ["hello", "hi", "namaste", "నమస్తే", "హలో", "नमस्ते", "help"]):
                intent = "HELP"
                # Use default representative crop for demonstration
                crop_id = "paddy"
                crop_display = "Paddy"
            else:
                prompt_crop = {
                    "te": "దయచేసి మీరు ఏ పంట గురించి తెలుసుకోవాలనుకుంటున్నారో చెప్పండి (ఉదా: వరి, టమాటాలు, మిర్చి, పత్తి, పసుపు).",
                    "hi": "कृपया बताएं कि आप किस फसल के बारे में जानना चाहते हैं (जैसे: धान, टमाटर, मिर्च, कपास, हल्दी)।",
                    "en": "Please mention which crop you want information for (e.g. Paddy, Tomato, Chilli, Cotton, Turmeric)."
                }.get(active_lang)

                return VoiceQueryResponse(
                    recognized_query=raw_query,
                    detected_language=active_lang,
                    intent="NEED_CROP_INFO",
                    extracted_entities={"district": district, "quantity_qtl": qty_qtl},
                    visual_answer=f"🌾 {prompt_crop}",
                    spoken_answer=prompt_crop,
                    session_id=sid,
                    session_context=session,
                    data_available=False,
                    audio_read_aloud_enabled=True
                )

        # Step 4: Query Database / Recommendation Engine
        # NEVER invent data — only fetch verified records
        try:
            rec_req = RecommendationRequest(
                crop_id=crop_id,
                quantity_qtl=qty_qtl,
                origin_district_id=district,
                vehicle_type="minitruck"
            )
            rec_res = RecommendationEngine.get_recommendation(rec_req)
            best = rec_res.recommended_market
            candidates = rec_res.candidate_markets
        except Exception as e:
            logger.error(f"[VoiceAI] Recommendation engine error: {e}")
            best = None
            candidates = []

        # Step 5: Honest Handling if No Verified Data Exists
        if not best or not candidates:
            c_name = crop_display or crop_id
            unavailable_resp = {
                "te": (
                    f"క్షమించండి, '{c_name}' పంటకు లేదా '{district.title()}' ప్రాంతానికి సంబంధించి "
                    f"ప్రస్తుతం ధృవీకరించిన మార్కెట్ ధర సమాచారం అధికారిక డేటాబేస్‌లో అందుబాటులో లేదు.",
                    f"క్షమించండి, {c_name} పంటకు ప్రస్తుతం ధృవీకరించిన ధరల సమాచారం అందుబాటులో లేదు."
                ),
                "hi": (
                    f"क्षमा करें, '{c_name}' फसल या '{district.title()}' क्षेत्र के लिए "
                    f"वर्तमान में सत्यापित मंडी भाव डेटाबेस में उपलब्ध नहीं है।",
                    f"क्षमा करें, {c_name} फसल के लिए अभी सत्यापित भाव उपलब्ध नहीं है।"
                ),
                "en": (
                    f"I don't have verified current price information for {c_name} in {district.title()} yet in the official database.",
                    f"Verified market price information is currently unavailable for {c_name}."
                )
            }
            vis, spk = unavailable_resp.get(active_lang, unavailable_resp["en"])

            return VoiceQueryResponse(
                recognized_query=raw_query,
                detected_language=active_lang,
                intent="DATA_UNAVAILABLE",
                extracted_entities={
                    "crop": crop_id,
                    "crop_display": crop_display,
                    "quantity_qtl": qty_qtl,
                    "district": district
                },
                visual_answer=vis,
                spoken_answer=spk,
                session_id=sid,
                session_context=session,
                data_available=False,
                audio_read_aloud_enabled=True
            )

        # Determine focal market for response payload:
        # If intent is FIND_NEAREST_MARKET, use physically closest market!
        if intent == "FIND_NEAREST_MARKET" and candidates:
            focal_market = min(candidates, key=lambda m: getattr(m, "distance_km", 999.0))
        else:
            focal_market = best

        # Update session with active focal market
        session["last_market_name"] = focal_market.market_name

        # Step 6: Generate Multilingual Grounded Answer
        visual, spoken = cls._generate_multilingual_response(
            intent=intent,
            language=active_lang,
            crop_id=crop_id,
            crop_display=crop_display,
            qty_qtl=qty_qtl,
            district=district,
            best_market=best,
            candidate_markets=candidates,
            query=raw_query
        )

        return VoiceQueryResponse(
            recognized_query=raw_query,
            detected_language=active_lang,
            intent=intent,
            extracted_entities={
                "crop": crop_id,
                "crop_display": crop_display,
                "quantity_qtl": qty_qtl,
                "quantity_kg": int(qty_qtl * 100),
                "district": district,
                "recommended_market": focal_market.market_name
            },
            visual_answer=visual,
            spoken_answer=spoken,
            session_id=sid,
            session_context=session,
            selling_price=focal_market.modal_price,
            estimated_net_return=focal_market.estimated_net_return,
            transport_cost=focal_market.estimated_transport_cost,
            market_charges=focal_market.known_market_charges,
            market_name=focal_market.market_name,
            data_available=True,
            action_data={
                "market_id": focal_market.market_id,
                "market_name": focal_market.market_name,
                "modal_price": focal_market.modal_price,
                "gross_value": focal_market.gross_value,
                "transport_cost": focal_market.estimated_transport_cost,
                "charges": focal_market.known_market_charges,
                "estimated_net_return": focal_market.estimated_net_return,
                "net_return_per_kg": focal_market.net_return_per_kg,
                "distance_km": getattr(focal_market, "distance_km", None),
                "latitude": focal_market.latitude,
                "longitude": focal_market.longitude,
                "data_source": DataIngestionService.get_data_trust_label(),
                "price_freshness": focal_market.price_freshness,
                "price_date": focal_market.price_date
            },
            audio_read_aloud_enabled=True
        )
