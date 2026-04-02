# assignment_service.py — Responder auto-assignment logic
#
# TODO:
#
# def find_best_responder(incident_type: str, floor: int) -> str | None:
#   - Fetch all available staff from firebase_service.get_available_staff()
#   - Filter by role relevance:
#       fire → security first, then housekeeping
#       medical → medical role first, then any
#       security → security role only
#   - Among matched role, prefer staff on the same floor as the incident
#   - Return the staff_id of the best match, or None if no one available
#
# This keeps it simple for MVP — no complex ML needed.
# Just role matching + floor proximity = good enough for judges.
