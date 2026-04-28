from config.firebase_config import get_db, get_firestore
from datetime import datetime
import uuid

# Mock database for when Firebase is not configured
mock_incidents = {}
mock_staff = {
    "staff1": {"id": "staff1", "name": "John Doe", "role": "security", "floor": 1, "available": True},
    "staff2": {"id": "staff2", "name": "Jane Smith", "role": "medical", "floor": 2, "available": True},
}
mock_audit_log = []

def save_incident(incident_data: dict) -> str:
    db = get_db()
    incident_id = str(uuid.uuid4())
    incident_data["id"] = incident_id
    
    if db:
        ref = db.reference('incidents')
        new_ref = ref.push(incident_data)
        incident_id = new_ref.key
        db.reference(f'incidents/{incident_id}').update({"id": incident_id})
        return incident_id
    else:
        mock_incidents[incident_id] = incident_data
        return incident_id

def get_all_incidents() -> list:
    db = get_db()
    if db:
        ref = db.reference('incidents')
        data = ref.get()
        if not data:
            return []
        return list(data.values())
    else:
        return list(mock_incidents.values())

def get_incident(incident_id: str) -> dict:
    db = get_db()
    if db:
        ref = db.reference(f'incidents/{incident_id}')
        return ref.get()
    else:
        return mock_incidents.get(incident_id)

def update_incident(incident_id: str, updates: dict):
    db = get_db()
    if db:
        ref = db.reference(f'incidents/{incident_id}')
        ref.update(updates)
    else:
        if incident_id in mock_incidents:
            mock_incidents[incident_id].update(updates)

def get_available_staff() -> list:
    db = get_db()
    staff_data = []
    if db:
        ref = db.reference('staff')
        data = ref.get()
        if data:
            staff_data = list(data.values())
        else:
            # Fallback to mock staff if Firebase is empty
            staff_data = list(mock_staff.values())
    else:
        staff_data = list(mock_staff.values())
        
    return [s for s in staff_data if s.get('available')]

def write_audit_log(entry: dict):
    fs = get_firestore()
    entry["timestamp"] = datetime.now().isoformat()
    if fs:
        fs.collection('auditLog').add(entry)
    else:
        mock_audit_log.append(entry)
