// IncidentCard.jsx — Single incident summary card in the feed
//
// Props: incident (object), onClick (fn), isSelected (bool)
//
// TODO: Display:
//   - <SeverityBadge severity={incident.severity} />
//   - Incident type (fire, medical, etc.) as icon + text
//   - Room number and floor
//   - Time since reported (e.g. "3 mins ago") using formatTime util
//   - Assigned staff name or "Unassigned" in amber
//   - Status chip: Active / Assigned / Resolved
//   - Clicking the card calls onClick and highlights it as selected
