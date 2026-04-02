// api.js — All calls to the Python FastAPI backend
//
// TODO:
//   - Import axios and set baseURL from import.meta.env.VITE_BACKEND_URL
//   - Export these async functions:
//
// createIncident(data)
//   POST /incidents — called from GuestSOSPage
//
// assignResponder(incidentId, staffId)
//   PATCH /incidents/{incidentId}/assign
//
// resolveIncident(incidentId)
//   PATCH /incidents/{incidentId}/resolve
//
// getAvailableStaff()
//   GET /staff/available
//
// updateFcmToken(staffId, token)
//   POST /staff/{staffId}/fcm-token
