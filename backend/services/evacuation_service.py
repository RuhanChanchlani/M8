from typing import List, Dict, Optional

# Mock coordinates for rooms (x, y) where 0,0 is top-left
# Values are percentages (0-100) for responsive mapping
ROOM_COORDINATES = {
    "101": {"x": 20, "y": 30, "area": "Outpatient Clinics"},
    "102": {"x": 25, "y": 30, "area": "Outpatient Clinics"},
    "201": {"x": 50, "y": 20, "area": "Rays Department"},
    "202": {"x": 55, "y": 20, "area": "Rays Department"},
    "301": {"x": 80, "y": 40, "area": "Emergency Department"},
    "304": {"x": 85, "y": 45, "area": "Emergency Department"},
    "502": {"x": 50, "y": 80, "area": "Main Entrance Hall"},
}

EXITS = [
    {"id": "main", "name": "Main Entrance", "x": 50, "y": 95},
    {"id": "emergency_right", "name": "Emergency Exit", "x": 65, "y": 30},
    {"id": "service", "name": "Service Exit", "x": 30, "y": 30},
    {"id": "outpatient", "name": "Outpatient Entrance", "x": 5, "y": 60},
    {"id": "emergency_entrance", "name": "Emergency Entrance", "x": 95, "y": 60},
]

def get_room_location(room_id: str) -> Optional[Dict]:
    return ROOM_COORDINATES.get(room_id)

def get_nearest_exit(room_id: str) -> Dict:
    room_loc = get_room_location(room_id)
    if not room_loc:
        return EXITS[0] # Default to main exit
    
    # Simple Euclidean distance to find nearest exit
    def dist(e):
        return ((e["x"] - room_loc["x"])**2 + ((e["y"] - room_loc["y"])**2))**0.5
    
    return min(EXITS, key=dist)

def get_evacuation_path(room_id: str) -> Dict:
    room_loc = get_room_location(room_id)
    nearest_exit = get_nearest_exit(room_id)
    
    if not room_loc:
        return {
            "start": {"x": 50, "y": 50},
            "end": nearest_exit,
            "path": [{"x": 50, "y": 50}, nearest_exit]
        }

    # For a real app, we'd use a pathfinding algorithm on a graph of the floor plan.
    # Here we simulate a path.
    return {
        "start": room_loc,
        "end": nearest_exit,
        "path": [room_loc, nearest_exit] # Direct path for MVP
    }
