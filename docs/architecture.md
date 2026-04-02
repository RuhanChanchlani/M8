# System Architecture

## Overview
RapidResponse is a two-service architecture:
- Frontend: React SPA hosted on Firebase Hosting
- Backend: Python FastAPI hosted on Google Cloud Run

## Data Flow
1. Guest submits SOS via React PWA
2. Frontend POSTs to FastAPI backend
3. Backend calls Gemini API to classify incident
4. Backend runs assignment algorithm to find best responder
5. Backend saves incident to Firebase Realtime DB
6. Backend triggers FCM push + Twilio SMS notifications
7. All connected dashboards update in real-time via Firebase listeners
8. Manager assigns/confirms responder via dashboard → backend PATCH call
9. Responder resolves → backend writes audit log to Firestore

## Why Realtime DB for incidents, Firestore for audit?
- Realtime DB: optimized for live sync — perfect for incident status updates
- Firestore: better querying and indexing — perfect for audit log analytics

## Google Technologies Used
- Gemini API: incident classification and recommended action generation
- Firebase Realtime Database: live incident sync across all clients
- Firebase Auth: staff authentication and role management
- Firebase Cloud Messaging: push notifications to staff devices
- Firebase Hosting: frontend deployment
- Google Cloud Run: backend deployment (auto-scales to zero when idle)
- Google Maps Platform: live incident map with severity-colored markers
