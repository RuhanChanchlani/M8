# firebase_service.py — All Firebase read/write operations
#
# TODO:
#   - Import firebase_admin.db (initialized in firebase_config.py)
#
# def save_incident(incident: dict) -> str:
#   - Push incident to /incidents in Realtime DB
#   - Return the auto-generated Firebase key as the incident ID
#
# def get_all_incidents() -> list:
#   - Read all incidents from /incidents
#   - Return as a list of dicts
#
# def update_incident(incident_id: str, updates: dict):
#   - Update specific fields of an incident
#
# def get_available_staff() -> list:
#   - Read /staff where available == true
#
# def write_audit_log(entry: dict):
#   - Write to Firestore (not Realtime DB) under /auditLog collection
#   - Include: incident_id, action, by, timestamp
