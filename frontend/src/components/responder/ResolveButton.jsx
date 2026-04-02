// ResolveButton.jsx — Button for responder to mark incident resolved
//
// Props: incidentId (str), onResolved (fn)
//
// TODO:
//   - Green button: "Mark as Resolved"
//   - On click: PATCH /incidents/{incidentId}/resolve
//   - Show loading spinner while request is in flight
//   - On success: call onResolved() and show a toast "Incident resolved!"
//   - Ask for confirmation before resolving (simple confirm dialog)
