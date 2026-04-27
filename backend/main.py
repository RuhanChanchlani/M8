import json
import os
import uuid
import google.generativeai as genai
from datetime import datetime
from typing import Optional, List, Dict, Any
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="RapidResponse API - Hospitality Service")

# Initialize Gemini
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash')
else:
    model = None
    print("Warning: GEMINI_API_KEY not found in environment. AI features will be mocked.")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "db.json"

# Default Database Structure
default_db = {
    "incidents": {},
    "rooms": {
        "101": {
            "room": "101",
            "floor": 1,
            "guest_name": "Demo Guest",
            "pin": "1234",
            "safety_status": "unknown",
            "fcm_token": None
        }
    },
    "staff": {
        "s1": {"id": "s1", "name": "John Security", "role": "security", "status": "available", "fcm_token": None},
        "m1": {"id": "m1", "name": "Dr. Sarah", "role": "medical", "status": "available", "fcm_token": None},
        "h1": {"id": "h1", "name": "Mike Housekeeping", "role": "housekeeping", "status": "available", "fcm_token": None},
        "mgr1": {"id": "mgr1", "name": "Alice Manager", "role": "manager", "status": "available", "fcm_token": None},
    },
    "audit": []
}

def load_db():
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, "r") as f:
                return json.load(f)
        except Exception:
            return default_db.copy()
    return default_db.copy()

def save_db():
    with open(DB_FILE, "w") as f:
        json.dump(db, f, indent=4)

db = load_db()

def add_audit_log(log_type: str, details: str):
    db["audit"].append({
        "id": str(uuid.uuid4()),
        "type": log_type,
        "details": details,
        "timestamp": datetime.utcnow().isoformat()
    })
    save_db()

# --- Models ---
import random

def get_random_location():
    """Generates a random lat/lng around a central point (Mumbai for demo)."""
    # Mumbai center approx: 19.0760, 72.8777
    lat = 19.0760 + (random.uniform(-0.05, 0.05))
    lng = 72.8777 + (random.uniform(-0.05, 0.05))
    return lat, lng

class CreateIncidentRequest(BaseModel):
    room: Optional[str] = None
    floor: Optional[int] = None
    description: str
    reported_by: str = "guest"
    type: str = "other"
    severity: str = "medium"
    lat: Optional[float] = None
    lng: Optional[float] = None

class AssignResponderRequest(BaseModel):
    staff_id: str

class ResponderStatusRequest(BaseModel):
    status: str

class BroadcastEvacuateRequest(BaseModel):
    floor: int
    incident_id: Optional[str] = None

class BroadcastAllClearRequest(BaseModel):
    floor: int

class TriggerSensorRequest(BaseModel):
    floor: int
    sensor_id: str
    type: str

class GuestLoginRequest(BaseModel):
    room: str
    pin: str

class FcmTokenRequest(BaseModel):
    token: str

class SafetyStatusRequest(BaseModel):
    status: str

class CreateRoomRequest(BaseModel):
    room: str
    floor: int
    guest_name: str
    pin: str

# --- Endpoints ---

@app.get("/")
def read_root():
    return {"status": "ok", "message": "RapidResponse API for Hospitality is running!"}

@app.get("/health")
def health_check():
    return {"status": "ok"}

def classify_incident_ai(description: str):
    """Uses Gemini to classify incident and provide recommended actions."""
    prompt = f"""
    You are an emergency dispatcher for a high-end hotel. 
    Analyze the following incident description and return a JSON object with:
    - "type": One of [fire, medical, security, housekeeping, other]
    - "severity": One of [low, medium, high, critical]
    - "recommended_action": A short (1-sentence) instruction for the responder.

    Incident Description: "{description}"
    
    Return ONLY the JSON object.
    """
    
    if model:
        try:
            response = model.generate_content(prompt)
            # Simple JSON extraction from response
            text = response.text.strip()
            if "```json" in text:
                text = text.split("```json")[1].split("```")[0].strip()
            elif "```" in text:
                text = text.split("```")[1].split("```")[0].strip()
            
            data = json.loads(text)
            return data
        except Exception as e:
            print(f"Gemini API error: {e}. Falling back to keyword classification.")
    
    # Fallback keyword-based classification
    severity = "medium"
    inc_type = "other"
    desc_lower = description.lower()
    
    if "fire" in desc_lower or "smoke" in desc_lower:
        inc_type = "fire"
        severity = "critical"
        action = "Evacuate immediate area and use nearest fire extinguisher if safe."
    elif "heart" in desc_lower or "bleed" in desc_lower or "medical" in desc_lower or "unconscious" in desc_lower:
        inc_type = "medical"
        severity = "critical"
        action = "Bring AED and first aid kit. Call for emergency medical services."
    elif "noise" in desc_lower or "fight" in desc_lower or "suspicious" in desc_lower:
        inc_type = "security"
        severity = "high"
        action = "Approach with backup. De-escalate or escort from premises."
    elif "spill" in desc_lower or "leak" in desc_lower or "clean" in desc_lower:
        inc_type = "housekeeping"
        severity = "low"
        action = "Bring appropriate cleaning supplies and wet floor signs."
    else:
        action = "Assess the situation and report back to command center."

    return {
        "type": inc_type,
        "severity": severity,
        "recommended_action": action
    }

# Incidents
@app.post("/incidents")
def create_incident(req: CreateIncidentRequest):
    incident_id = str(uuid.uuid4())
    
    # Classify using AI or Fallback
    ai_data = classify_incident_ai(req.description)
    
    # Assign location if not provided
    lat, lng = (req.lat, req.lng) if req.lat and req.lng else get_random_location()
    
    # Override with request values if they aren't 'other' or 'medium' (user manually selected)
    inc_type = req.type if req.type != "other" else ai_data["type"]
    severity = req.severity if req.severity != "medium" else ai_data["severity"]
    recommended_action = ai_data["recommended_action"]

    incident = {
        "id": incident_id,
        "type": inc_type,
        "severity": severity,
        "status": "pending",
        "room": req.room,
        "floor": req.floor,
        "description": req.description,
        "reported_by": req.reported_by,
        "assigned_to": None,
        "responder_status": None,
        "recommended_action": recommended_action,
        "lat": lat,
        "lng": lng,
        "created_at": datetime.utcnow().isoformat(),
        "resolved_at": None
    }
    db["incidents"][incident_id] = incident
    add_audit_log("incident_created", f"Incident {incident_id} created ({inc_type} - {severity})")
    save_db()
    return incident

@app.get("/incidents")
def get_incidents(status: Optional[str] = None):
    incidents = list(db["incidents"].values())
    if status:
        incidents = [i for i in incidents if i["status"] == status]
    # Sort by newest first
    incidents.sort(key=lambda x: x["created_at"], reverse=True)
    return incidents

@app.patch("/incidents/{incident_id}/assign")
def assign_responder(incident_id: str, req: AssignResponderRequest):
    if incident_id not in db["incidents"]:
        raise HTTPException(status_code=404, detail="Incident not found")
    if req.staff_id not in db["staff"]:
        raise HTTPException(status_code=404, detail="Staff not found")
        
    incident = db["incidents"][incident_id]
    incident["assigned_to"] = req.staff_id
    incident["status"] = "assigned"
    incident["responder_status"] = "dispatched"
    
    db["staff"][req.staff_id]["status"] = "busy"
    
    add_audit_log("incident_assigned", f"Incident {incident_id} assigned to staff {req.staff_id}")
    save_db()
    return incident

@app.patch("/incidents/{incident_id}/resolve")
def resolve_incident(incident_id: str):
    if incident_id not in db["incidents"]:
        raise HTTPException(status_code=404, detail="Incident not found")
        
    incident = db["incidents"][incident_id]
    incident["status"] = "resolved"
    incident["resolved_at"] = datetime.utcnow().isoformat()
    
    if incident["assigned_to"] and incident["assigned_to"] in db["staff"]:
        db["staff"][incident["assigned_to"]]["status"] = "available"
        
    add_audit_log("incident_resolved", f"Incident {incident_id} resolved")
    save_db()
    return incident

@app.patch("/incidents/{incident_id}/responder-status")
def update_responder_status(incident_id: str, req: ResponderStatusRequest):
    if incident_id not in db["incidents"]:
        raise HTTPException(status_code=404, detail="Incident not found")
        
    db["incidents"][incident_id]["responder_status"] = req.status
    add_audit_log("responder_status_updated", f"Incident {incident_id} responder status -> {req.status}")
    save_db()
    return db["incidents"][incident_id]

# Broadcast + Emergency
@app.post("/broadcast/evacuate")
def broadcast_evacuate(req: BroadcastEvacuateRequest):
    add_audit_log("evacuation_broadcast", f"Evacuation broadcasted for floor {req.floor}")
    return {"status": "success", "message": f"Evacuation alert sent to floor {req.floor}"}

@app.post("/broadcast/all-clear")
def broadcast_all_clear(req: BroadcastAllClearRequest):
    add_audit_log("all_clear_broadcast", f"All clear broadcasted for floor {req.floor}")
    return {"status": "success", "message": f"All clear sent to floor {req.floor}"}

@app.post("/sensor/trigger")
def trigger_sensor(req: TriggerSensorRequest):
    add_audit_log("sensor_triggered", f"Sensor {req.sensor_id} on floor {req.floor} triggered ({req.type})")
    # Auto-create incident
    create_incident(CreateIncidentRequest(
        floor=req.floor,
        description=f"Automated sensor alert: {req.type} detected from sensor {req.sensor_id}",
        reported_by="sensor",
        type=req.type,
        severity="high"
    ))
    return {"status": "success"}

# Guest Session
@app.post("/guest/login")
def guest_login(req: GuestLoginRequest):
    # Flexible login: allow any room number if PIN is 1234
    if req.pin == "1234":
        # If room exists in DB, return its data
        if req.room in db["rooms"]:
            return db["rooms"][req.room]
        
        # Otherwise, return a temporary guest profile for this room
        return {
            "room": req.room,
            "floor": int(req.room[0]) if req.room.isdigit() else 1,
            "guest_name": f"Guest {req.room}",
            "pin": "1234",
            "safety_status": "unknown",
            "fcm_token": None
        }
    
    # Standard check for other PINs
    if req.room not in db["rooms"]:
        raise HTTPException(status_code=404, detail="Room not found")
    if db["rooms"][req.room]["pin"] != req.pin:
        raise HTTPException(status_code=401, detail="Invalid PIN")
    
    return db["rooms"][req.room]

@app.patch("/guest/{room}/fcm-token")
def update_guest_fcm(room: str, req: FcmTokenRequest):
    if room not in db["rooms"]:
        raise HTTPException(status_code=404, detail="Room not found")
    db["rooms"][room]["fcm_token"] = req.token
    save_db()
    return {"status": "success"}

@app.patch("/guest/{room}/safety-status")
def update_safety_status(room: str, req: SafetyStatusRequest):
    if room not in db["rooms"]:
        raise HTTPException(status_code=404, detail="Room not found")
    db["rooms"][room]["safety_status"] = req.status
    add_audit_log("guest_safety_update", f"Room {room} safety status -> {req.status}")
    save_db()
    return db["rooms"][room]

# Rooms
@app.get("/rooms")
def get_rooms():
    return list(db["rooms"].values())

@app.post("/rooms")
def create_room(req: CreateRoomRequest):
    room_data = {
        "room": req.room,
        "floor": req.floor,
        "guest_name": req.guest_name,
        "pin": req.pin,
        "safety_status": "unknown",
        "fcm_token": None
    }
    db["rooms"][req.room] = room_data
    save_db()
    return room_data

@app.patch("/rooms/{room}/checkout")
def checkout_guest(room: str):
    if room in db["rooms"]:
        del db["rooms"][room]
        save_db()
    return {"status": "success"}

# Staff
@app.get("/staff")
def get_staff():
    return list(db["staff"].values())

@app.get("/staff/available")
def get_available_staff():
    return [s for s in db["staff"].values() if s["status"] == "available"]

@app.patch("/staff/{id}/fcm-token")
def update_staff_fcm(id: str, req: FcmTokenRequest):
    if id not in db["staff"]:
        raise HTTPException(status_code=404, detail="Staff not found")
    db["staff"][id]["fcm_token"] = req.token
    save_db()
    return {"status": "success"}

# Audit
@app.get("/audit")
def get_audit_log():
    logs = list(db["audit"])
    logs.sort(key=lambda x: x["timestamp"], reverse=True)
    return logs
