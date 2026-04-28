from services.firebase_service import get_available_staff

def find_best_responder(incident_type: str, floor: int) -> dict | None:
    available_staff = get_available_staff()
    if not available_staff:
        return None

    # Role relevance mapping
    role_priority = {
        "fire": ["security", "housekeeping"],
        "medical": ["medical"],
        "security": ["security"],
        "maintenance": ["housekeeping"],
        "other": ["housekeeping", "security"]
    }

    type_key = incident_type.lower()
    prioritized_roles = role_priority.get(type_key, ["security", "housekeeping"])
    
    # Try to find someone with a matching role
    for role in prioritized_roles:
        matching_staff = [s for s in available_staff if s.get('role') == role]
        if matching_staff:
            # Prefer same floor
            same_floor = [s for s in matching_staff if s.get('floor') == floor]
            if same_floor:
                return same_floor[0]
            return matching_staff[0]

    # Fallback: any available staff
    return available_staff[0]
