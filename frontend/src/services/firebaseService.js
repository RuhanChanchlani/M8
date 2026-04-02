// firebaseService.js — Direct Firebase reads/writes from frontend
//
// Use this for things that don't need the backend (e.g. reading audit log)
//
// TODO:
//
// getAuditLog()
//   - Read all documents from Firestore /auditLog collection
//   - Return sorted by timestamp descending
//
// getIncidentById(incidentId)
//   - Read a single incident from Realtime DB
//
// Note: Most writes go through the backend (so Gemini can process first)
// Only use direct Firebase writes here for non-AI operations
