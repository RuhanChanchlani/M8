from fastapi import APIRouter, HTTPException, BackgroundTasks
from typing import List, Optional
from models.incident import Incident, CreateIncidentRequest, UpdateIncidentRequest, IncidentStatus
from services import firebase_service, gemini_service, assignment_service, notification_service
from datetime import datetime

router = APIRouter()

@router.post("/", response_model=Incident)
async def create_incident(request: CreateIncidentRequest, background_tasks: BackgroundTasks):
    # 1. Classify with Gemini
    classification = gemini_service.classify_incident(request.description)
    
    # 2. Find best responder
    assigned_staff = assignment_service.find_best_responder(
        classification["type"], 
        request.floor
    )
    assigned_staff_id = assigned_staff["id"] if assigned_staff else None
    assigned_staff_name = assigned_staff["name"] if assigned_staff else None
    
    # 3. Create incident object
    incident_data = {
        "room": request.room,
        "floor": request.floor,
        "description": request.description,
        "reported_by": request.reported_by,
        "type": classification["type"],
        "severity": classification["severity"],
        "status": IncidentStatus.assigned if assigned_staff_id else IncidentStatus.pending,
        "assigned_to": assigned_staff_id,
        "assigned_name": assigned_staff_name,
        "created_at": datetime.now().isoformat()
    }
    
    # 4. Save to Firebase
    incident_id = firebase_service.save_incident(incident_data)
    incident_data["id"] = incident_id
    
    # 5. Notify (background task)
    if assigned_staff_id:
        background_tasks.add_task(
            notification_service.send_push_to_staff,
            fcm_token=None, # In real app, fetch from staff profile
            title=f"New Incident: {classification['type']}",
            body=f"Room {request.room}: {request.description}",
            data={"incident_id": incident_id}
        )
    
    return incident_data

@router.get("/", response_model=List[Incident])
async def get_incidents(status: Optional[IncidentStatus] = None):
    incidents = firebase_service.get_all_incidents()
    if status:
        incidents = [i for i in incidents if i.get("status") == status]
    return incidents

@router.get("/{incident_id}", response_model=Incident)
async def get_incident(incident_id: str):
    incident = firebase_service.get_incident(incident_id)
    if not incident:
        raise HTTPException(status_code=404, detail="Incident not found")
    return incident

@router.patch("/{incident_id}/assign")
async def assign_incident(incident_id: str, staff_id: str):
    updates = {
        "assigned_to": staff_id,
        "status": IncidentStatus.assigned
    }
    firebase_service.update_incident(incident_id, updates)
    return {"status": "assigned"}

@router.patch("/{incident_id}/resolve")
async def resolve_incident(incident_id: str):
    updates = {
        "status": IncidentStatus.resolved,
        "resolved_at": datetime.now().isoformat()
    }
    firebase_service.update_incident(incident_id, updates)
    
    # Audit log
    firebase_service.write_audit_log({
        "incident_id": incident_id,
        "action": "resolved",
        "timestamp": updates["resolved_at"]
    })
    
    return {"status": "resolved"}
