// ProtectedRoute.jsx — Wrapper that blocks unauthenticated access
//
// Props: children (JSX), allowedRoles (array, optional)
//
// TODO:
//   - Use useAuth() hook to check if user is logged in
//   - If not logged in: redirect to /login
//   - If allowedRoles is provided: check user's role matches
//   - If role doesn't match: redirect to appropriate page
//   - While auth state is loading: show <Loader />
