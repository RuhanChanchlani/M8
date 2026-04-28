import firebase_admin
from firebase_admin import credentials, db, firestore
import os
from dotenv import load_dotenv

load_dotenv()

def initialize_firebase():
    try:
        # Check if already initialized
        firebase_admin.get_app()
    except ValueError:
        cred_dict = {
            "type": "service_account",
            "project_id": os.getenv("FIREBASE_PROJECT_ID"),
            "private_key": os.getenv("FIREBASE_PRIVATE_KEY", "").replace("\\n", "\n"),
            "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
            "token_uri": "https://oauth2.googleapis.com/token",
        }
        
        # Only initialize if we have the required config
        if cred_dict["project_id"] and cred_dict["private_key"] and cred_dict["client_email"]:
            cred = credentials.Certificate(cred_dict)
            firebase_admin.initialize_app(cred, {
                'databaseURL': f"https://{cred_dict['project_id']}-default-rtdb.firebaseio.com"
            })
        else:
            print("Firebase credentials not fully provided. Running in mock mode.")
            return None

    return db

# Initialize and export db and firestore client
database = None
firestore_client = None

if os.getenv("FIREBASE_PROJECT_ID"):
    try:
        initialize_firebase()
        database = db
        firestore_client = firestore.client()
    except Exception as e:
        print(f"Error initializing Firebase: {e}")

def get_db():
    return database

def get_firestore():
    return firestore_client
