from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path
import os

from backend.config import HOST, PORT, BASE_DIR
from backend.database import init_db
from backend.routers import markets, prices, recommendations, voice, admin, auth, bookings
from fastapi import Request
from fastapi.responses import JSONResponse
import logging
import traceback

logger = logging.getLogger("farmdirect.server")

app = FastAPI(
    title="FarmDirect Agricultural Intelligence API",
    description="Production-grade API layer connecting Government Agricultural Datasets (data.gov.in, Agmarknet, e-NAM) to FarmDirect Recommendation Engine & Multilingual Farmer UI.",
    version="2.0.0"
)

# Global Zero-Crash Exception Handler
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    logger.error(f"[ZeroCrashSafe] Handled error on {request.method} {request.url}: {exc}")
    return JSONResponse(
        status_code=500,
        content={
            "error": True,
            "status": "SERVER_SAFE",
            "message": "Request processed safely without crashing server.",
            "detail": str(exc)
        }
    )

# Enable CORS for flexible development and cross-origin frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register REST Routers under /api
app.include_router(recommendations.router)
app.include_router(markets.router)
app.include_router(prices.router)
app.include_router(voice.router)
app.include_router(admin.router)
app.include_router(auth.router)
app.include_router(bookings.router)

@app.on_event("startup")
def on_startup():
    print("[FarmDirect] Initializing database and verifying schema...")
    init_db()
    print("[FarmDirect] Database initialized successfully.")

@app.get("/api/health")
def health_check():
    return {
        "status": "HEALTHY",
        "service": "FarmDirect Production Backend",
        "version": "2.0.0",
        "docs_url": "/docs"
    }

# Mount static frontend directories
app.mount("/css", StaticFiles(directory=str(BASE_DIR / "css")), name="css")
app.mount("/js", StaticFiles(directory=str(BASE_DIR / "js")), name="js")

@app.get("/bundle.js")
def serve_bundle_js():
    return FileResponse(str(BASE_DIR / "bundle.js"), media_type="application/javascript")

@app.get("/bundle.css")
def serve_bundle_css():
    return FileResponse(str(BASE_DIR / "bundle.css"), media_type="text/css")

@app.get("/assets/{path:path}")
def serve_assets(path: str):
    if path.endswith(".js"):
        return FileResponse(str(BASE_DIR / "bundle.js"), media_type="application/javascript")
    if path.endswith(".css"):
        return FileResponse(str(BASE_DIR / "bundle.css"), media_type="text/css")
    return FileResponse(str(BASE_DIR / "bundle.js"))

@app.get("/bolt")
def serve_bolt():
    return FileResponse(str(BASE_DIR / "bolt.html"))

@app.get("/")
def serve_index():
    return FileResponse(str(BASE_DIR / "index.html"))

if __name__ == "__main__":
    import uvicorn
    is_dev = os.getenv("ENV", "production").lower() == "development"
    uvicorn.run("backend.main:app", host=HOST, port=PORT, reload=is_dev)

