# notification_service.py — FCM push + Twilio SMS
#
# TODO:
#
# def send_push_to_staff(fcm_token: str, title: str, body: str, data: dict):
#   - Use firebase_admin.messaging to send FCM push notification
#   - Include incident_id in the data payload so frontend knows what to open
#
# def send_sms(phone_number: str, message: str):
#   - Use Twilio client to send SMS
#   - Only call this for critical severity incidents
#   - Log success/failure
#
# def broadcast_to_all_staff(title: str, body: str):
#   - Fetch all staff FCM tokens from Firebase
#   - Send FCM multicast message to all tokens
#   - Used for evacuation alerts
