// StatsBar.jsx — Summary stats row at top of dashboard
//
// Props: incidents (array)
//
// TODO: Show 4 stat cards in a row:
//   - Total Active (count where status === "active" or "assigned")
//   - Critical (count where severity === "critical")
//   - Resolved Today (count resolved within last 24hrs)
//   - Avg Response Time (mean of resolvedAt - timestamp for resolved incidents)
//
// Each stat card: big number + label underneath
