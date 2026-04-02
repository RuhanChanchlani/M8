# staff.py — Staff management endpoints
#
# TODO: Create an APIRouter and define these endpoints:
#
# GET /staff
#   - Returns all staff members from Firebase
#
# GET /staff/available
#   - Returns only staff who are currently available (available: true)
#
# PATCH /staff/{staff_id}/availability
#   - Toggle a staff member's available status
#   - Used when a responder accepts or completes a task
#
# POST /staff/{staff_id}/fcm-token
#   - Update a staff member's FCM token
#   - Called from frontend when they log in on a new device
