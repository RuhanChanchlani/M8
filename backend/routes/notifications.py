# notifications.py — Notification endpoints
#
# TODO: Create an APIRouter and define these endpoints:
#
# POST /notify/staff/{staff_id}
#   - Send push notification to a specific staff member via FCM
#   - Body: { title, body, incident_id }
#
# POST /notify/sms
#   - Send SMS via Twilio to emergency contacts
#   - Used for critical severity incidents only
#   - Body: { phone_number, message }
#
# POST /notify/broadcast
#   - Send push to ALL staff (for mass evacuations)
#   - Body: { title, body }
