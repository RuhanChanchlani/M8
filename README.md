# RapidResponse — Hotel Crisis Coordination Platform
### GDG Solution Challenge 2026 | Build with AI

A real-time emergency response and crisis coordination platform for hotels,
powered by Gemini AI, Firebase, and Google Maps.

## Team
- Member 1 — Frontend Lead (Dashboard + Maps)
- Member 2 — Backend Lead (Python + Gemini AI)
- Member 3 — Firebase + Notifications
- Member 4 — Guest App + Pitch/Docs

## Live Demo
- Frontend: https://your-app.web.app
- Backend API: https://your-backend.run.app
- Guest SOS: https://your-app.web.app/sos

## Tech Stack
- Frontend: React.js + TailwindCSS + Vite
- Backend: Python + FastAPI
- Database: Firebase Realtime DB + Firestore
- AI: Google Gemini API
- Maps: Google Maps Platform
- Notifications: Firebase Cloud Messaging + Twilio SMS
- Deployment: Firebase Hosting + Google Cloud Run

## Quick Start
See docs/setup-guide.md for full setup instructions.

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && pip install -r requirements.txt && uvicorn main:app --reload
```

## Project Structure
See docs/architecture.md for the full architecture diagram and explanation.

## Problem Statement
Hotels lack a unified system for emergency response. Vital information is
fragmented across teams — delaying coordinated action between guests, staff,
and emergency services. RapidResponse solves this with a single AI-powered
platform.

## Google Technologies Used
- Gemini API — incident classification and severity scoring
- Google Maps Platform — live floor map with incident pins
- Firebase Realtime Database — live sync across all devices
- Firebase Cloud Messaging — push notifications to staff
- Google Cloud Run — backend deployment
- Firebase Hosting — frontend deployment
