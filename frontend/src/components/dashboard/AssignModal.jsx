// AssignModal.jsx — Modal to manually assign a responder to an incident
//
// Props: incident (object), availableStaff (array), onClose (fn), onAssign (fn)
//
// TODO:
//   - Show incident summary at top of modal
//   - List available staff with their name, role, and current floor
//   - Highlight staff on same floor as incident (closest match)
//   - "Assign" button next to each staff member
//   - On assign: call PATCH /incidents/{id}/assign on backend, then onAssign() + onClose()
//   - Close on backdrop click or X button
