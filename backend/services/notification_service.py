from firebase_admin import messaging
from twilio.rest import Client
import os
from dotenv import load_dotenv

load_dotenv()

# Twilio setup
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = os.getenv("TWILIO_PHONE_NUMBER")

twilio_client = None
if TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN:
    try:
        twilio_client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    except Exception as e:
        print(f"Error initializing Twilio: {e}")

def send_push_to_staff(fcm_token: str, title: str, body: str, data: dict = None):
    if not fcm_token:
        return
    
    message = messaging.Message(
        notification=messaging.Notification(
            title=title,
            body=body,
        ),
        data=data or {},
        token=fcm_token,
    )
    
    try:
        response = messaging.send(message)
        print(f"Successfully sent FCM message: {response}")
    except Exception as e:
        print(f"Error sending FCM message: {e}")

def send_sms(phone_number: str, message_body: str):
    if not twilio_client or not TWILIO_PHONE_NUMBER:
        print(f"Twilio not configured. SMS not sent to {phone_number}: {message_body}")
        return

    try:
        message = twilio_client.messages.create(
            body=message_body,
            from_=TWILIO_PHONE_NUMBER,
            to=phone_number
        )
        print(f"Successfully sent SMS: {message.sid}")
    except Exception as e:
        print(f"Error sending SMS: {e}")

def broadcast_to_all_staff(title: str, body: str, fcm_tokens: list):
    if not fcm_tokens:
        return

    message = messaging.MulticastMessage(
        notification=messaging.Notification(
            title=title,
            body=body,
        ),
        tokens=fcm_tokens,
    )
    
    try:
        response = messaging.send_multicast(message)
        print(f"Successfully sent broadcast: {response.success_count} successes")
    except Exception as e:
        print(f"Error sending broadcast: {e}")
