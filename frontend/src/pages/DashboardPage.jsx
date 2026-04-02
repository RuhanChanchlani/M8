// DashboardPage.jsx — Main command center (manager view)
//
// TODO: Layout with two columns:
//   Left column (40%):
//     - <StatsBar /> at top (total incidents, active, resolved today)
//     - <IncidentFeed /> below (live list of all active incidents)
//   Right column (60%):
//     - <MapView /> (Google Maps with incident pins)
//
// Use useIncidents() hook to get live incident data from Firebase
// Show <Loader /> while data is loading
// Show <EmptyState /> if no active incidents
