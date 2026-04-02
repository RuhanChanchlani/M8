# Setup Guide

## Prerequisites
- Node.js 18+
- Python 3.11+
- A Firebase project (free Spark plan is enough)
- Gemini API key (free at aistudio.google.com)
- Twilio account (free trial works for demo)

## Step 1: Clone the repo
```bash
git clone https://github.com/your-team/rapidresponse.git
cd rapidresponse
```

## Step 2: Firebase setup
1. Go to console.firebase.google.com
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Realtime Database (start in test mode)
5. Enable Firestore
6. Enable Cloud Messaging
7. Go to Project Settings → Service Accounts → Generate new private key
8. Save as backend/serviceAccountKey.json (NEVER commit this file)

## Step 3: Backend setup
```bash
cd backend
cp .env.example .env
# Fill in your values in .env
pip install -r requirements.txt
uvicorn main:app --reload
# Backend runs at http://localhost:8000
```

## Step 4: Frontend setup
```bash
cd frontend
cp .env.example .env.local
# Fill in Firebase web config values from Firebase Console → Project Settings → Your apps
npm install
npm run dev
# Frontend runs at http://localhost:5173
```

## Step 5: Create staff accounts
- Go to Firebase Console → Authentication → Add user
- Create one manager account and a few staff accounts
- Add their profiles to Realtime DB under /staff/{uid}

## Deployment

### Frontend → Firebase Hosting
```bash
cd frontend
npm run build
firebase deploy --only hosting
```

### Backend → Google Cloud Run
```bash
cd backend
gcloud run deploy rapidresponse-api --source . --region asia-south1
```
