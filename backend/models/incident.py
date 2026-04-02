# incident.py — Pydantic models for incident data
#
# TODO: Define these Pydantic BaseModel classes:
#
# class IncidentType(str, Enum):
#     fire, medical, security, maintenance, other
#
# class SeverityLevel(str, Enum):
#     critical, high, medium, low
#
# class CreateIncidentRequest:
#     room: str
#     floor: int
#     description: str
#     reported_by: str  ("guest" or staff ID)
#
# class Incident (full model with all fields including id, status, timestamps)
#
# class UpdateIncidentRequest (for assigning responder or resolving)
