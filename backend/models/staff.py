from pydantic import BaseModel
from enum import Enum
from typing import Optional

class StaffRole(str, Enum):
    manager = "manager"
    security = "security"
    housekeeping = "housekeeping"
    medical = "medical"

class Staff(BaseModel):
    id: str
    name: str
    role: StaffRole
    floor: int
    available: bool = True
    fcm_token: Optional[str] = None
    phone: Optional[str] = None
