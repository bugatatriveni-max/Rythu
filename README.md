# FarmDirect (RythuMitra / రైతుమిత్ర)
### AI-Powered Multi-turn Voice Assistant & Mandi Recommendation Engine for Farmers

FarmDirect is an agricultural intelligence platform that connects government agricultural datasets (e-NAM, Agmarknet, data.gov.in) to a multi-turn Voice AI Assistant and a verified recommendation engine. It helps Indian farmers identify where to sell their produce for the highest net realized return after factoring in real-time APMC prices, transport freight, and statutory market charges.

---

## Key Features

1. **Multilingual Farmer Voice Assistant**:
   - Spoken natural language understanding in **Telugu**, **Hindi**, and **English**.
   - Speech-to-text, intent classification, and entity extraction (crop, quantity, district).
   - Multi-turn conversation continuity (anaphora resolution across questions).
   - Audio read-aloud via browser SpeechSynthesis.
   - Grounded strictly on verified APMC records — zero price hallucination.

2. **Smart Mandi Recommendation Engine**:
   - Formula: `Estimated Net Amount = (Quantity × Selling Price) - Transport Cost - APMC Charges`
   - Dynamically calculates vehicle transport costs (mini truck, tractor, pickup) based on road distance.
   - Compares nearby and regional APMC yards to maximize farmer net profit.

3. **Multi-device Responsive UI**:
   - Touch targets $\ge 48	ext{px}$ optimized for mobile use in the field.
   - Visual comparison cards, market maps, price trend graphs, and slot booking.

---

## Project Structure

```
├── backend/
│   ├── main.py              # FastAPI server entry point & static asset mounter
│   ├── config.py            # Environment configurations & defaults
│   ├── database.py          # SQLite connection and query layer
│   ├── models.py            # Pydantic request/response schemas
│   ├── schema.sql           # Database schema definition
│   ├── routers/             # REST endpoints (voice, markets, prices, recommendations, etc.)
│   └── services/            # Core logic (voice_ai, recommendation, transport, ingestion)
├── css/                     # Application stylesheets
├── js/                      # Modular JavaScript (voice engine, data, calculator, i18n)
├── bolt.html                # Smart Farmer Procurement Portal entry
├── index.html               # Voice-first Farmer Homepage with Voice Hero
├── bundle.js                # Compiled frontend bundle with Voice AI integration
├── bundle.css               # Production styling bundle
├── farmdirect.db            # Embedded verified SQLite database
├── requirements.txt         # Python dependencies
├── render.yaml              # Render.com deployment configuration
├── Procfile                 # Process file for cloud deployment
├── Dockerfile               # Container deployment specification
└── README.md
```

---

## Getting Started Locally

### Prerequisites
- Python 3.9+ installed
- Web browser (Chrome, Edge, Safari, or Firefox)

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the Server
```bash
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000 --reload
```

### 3. Open in Browser
- **Smart Farmer Portal**: [http://localhost:8000/bolt](http://localhost:8000/bolt)
- **Homepage with Voice Hero**: [http://localhost:8000/](http://localhost:8000/)
- **API Documentation**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

## Deploy to Cloud (Render / Railway / Docker)

### Option 1: Render.com (100% Free)
1. Push this repository to GitHub.
2. In Render Dashboard, click **New +** → **Web Service** and connect the repository.
3. Set:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn backend.main:app --host 0.0.0.0 --port $PORT`
4. Deploy!

### Option 2: Docker
```bash
docker build -t farmdirect .
docker run -p 8000:8000 farmdirect
```
