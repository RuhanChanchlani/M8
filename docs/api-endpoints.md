# API Endpoints Reference

Base URL: http://localhost:8000 (dev) | https://your-backend.run.app (prod)

## Incidents

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /incidents | Create new incident (triggers Gemini + assignment) |
| GET | /incidents | Get all incidents |
| GET | /incidents/{id} | Get single incident |
| PATCH | /incidents/{id}/assign | Assign a responder |
| PATCH | /incidents/{id}/resolve | Mark as resolved |

## Staff

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /staff | Get all staff |
| GET | /staff/available | Get available staff only |
| PATCH | /staff/{id}/availability | Toggle availability |
| POST | /staff/{id}/fcm-token | Update FCM token |

## Notifications

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /notify/staff/{id} | Push notification to one staff member |
| POST | /notify/sms | Send SMS via Twilio |
| POST | /notify/broadcast | Push to ALL staff |

## Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check — returns {"status": "ok"} |
