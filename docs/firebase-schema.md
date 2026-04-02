# Firebase Database Schema

## Realtime Database

### /incidents/{incidentId}
```json
{
  "id": "INC-20260401-001",
  "type": "fire",
  "severity": "critical",
  "room": "304",
  "floor": 3,
  "description": "Smoke coming from bathroom",
  "reportedBy": "guest",
  "status": "active",
  "assignedTo": "staff_002",
  "geminiClassification": {
    "type": "fire",
    "severity": "critical",
    "recommended_action": "Evacuate floor 3 and call fire services immediately",
    "notify_emergency_services": true
  },
  "timestamp": 1714000000,
  "resolvedAt": null,
  "location": { "lat": 22.3072, "lng": 73.1812 }
}
```

### /staff/{staffId}
```json
{
  "id": "staff_002",
  "name": "Rahul Sharma",
  "role": "security",
  "floor": 3,
  "available": true,
  "fcmToken": "fcm_token_string_here",
  "phone": "+919876543210"
}
```

## Firestore

### /auditLog (collection)
Each document:
```json
{
  "incidentId": "INC-20260401-001",
  "action": "assigned | resolved | created | notified",
  "by": "manager_001",
  "details": "Assigned to Rahul Sharma (security, floor 3)",
  "timestamp": 1714000050
}
```
