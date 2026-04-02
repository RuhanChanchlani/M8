// GuestSOSPage.jsx — Guest-facing SOS page (public, no login)
//
// This is a PWA page — guests open this on their phone browser
//
// TODO: Three states to handle:
//   State 1 (idle):
//     - Show big red <SOSButton /> and <IncidentForm /> below it
//   State 2 (submitting):
//     - Show <Loader /> with "Alerting hotel staff..." message
//   State 3 (submitted):
//     - Show <ConfirmationScreen /> with "Help is on the way" message
//
// On submit: POST to backend /incidents endpoint
// No Firebase Auth needed here — guests don't log in
