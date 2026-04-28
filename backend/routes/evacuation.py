from fastapi import APIRouter, HTTPException
from services import evacuation_service

router = APIRouter()

@router.get("/{room_id}")
async def get_evacuation_info(room_id: str):
    location = evacuation_service.get_room_location(room_id)
    if not location:
        # Fallback location if room not found in coordinates map
        location = {"x": 50, "y": 50, "area": "Unknown"}
        
    path_info = evacuation_service.get_evacuation_path(room_id)
    
    return {
        "room_id": room_id,
        "current_location": location,
        "nearest_exit": path_info["end"],
        "evacuation_path": path_info["path"]
    }
