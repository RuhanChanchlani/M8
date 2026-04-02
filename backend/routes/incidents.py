# incidents.py — All incident-related API endpoints
#
# TODO: Create an APIRouter and define these endpoints:
#
# POST /incidents
#   - Accepts CreateIncidentRequest body
#   - Calls gemini_service.classify_incident()
#   - Calls assignment_service.find_best_responder()
#   - Saves to Firebase Realtime DB under /incidents/{id}
#   - Triggers notification_service.notify_staff()
#   - Returns the full created incident object
#
# GET /incidents
#   - Returns all incidents from Firebase (optional: filter by status)
#
# GET /incidents/{incident_id}
#   - Returns a single incident by ID
#
# PATCH /incidents/{incident_id}/assign
#   - Assigns a responder to an incident
#   - Updates Firebase, notifies that specific staff member
#
# PATCH /incidents/{incident_id}/resolve
#   - Marks incident as resolved
#   - Writes resolution timestamp to Firestore audit log
