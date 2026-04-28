from pydantic import BaseModel
from enum import Enum
from typing import Optional, List
from datetime import datetime

class IncidentType(str, Enum):
    fire = "fire"
    medical = "medical"
    security = "security"
    maintenance = "maintenance"
    other = "other"

class SeverityLevel(str, Enum):
    critical = "critical"
    high = "high"
    medium = "medium"
    low = "low"

class IncidentStatus(str, Enum):
    pending = "pending"
    assigned = "assigned"
    resolved = "resolved"

class CreateIncidentRequest(BaseModel):
    room: str
    floor: int
    description: str
    reported_by: str

class Incident(BaseModel):
    id: Optional[str] = None
    room: str
    floor: int
    description: str
    reported_by: str
    type: IncidentType
    severity: SeverityLevel
    status: IncidentStatus = IncidentStatus.pending
    assigned_to: Optional[str] = None
    assigned_name: Optional[str] = None
    created_at: datetime
    resolved_at: Optional[datetime] = None

class UpdateIncidentRequest(BaseModel):
    status: Optional[IncidentStatus] = None
    assigned_to: Optional[str] = None
    resolved_at: Optional[datetime] = None
