from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import incidents, evacuation
import uvicorn
import os
import sys

# Add the current directory to sys.path to handle imports correctly when running main.py directly
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

app = FastAPI(title="RapidResponse API")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(incidents.router, prefix="/incidents", tags=["incidents"])
app.include_router(evacuation.router, prefix="/evacuation", tags=["evacuation"])

@app.get("/")
async def health_check():
    return {"status": "ok", "message": "RapidResponse Backend is running"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
