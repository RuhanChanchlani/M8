// useAuth.js — Custom hook for Firebase auth state
//
// Returns: { user, staffProfile, role, loading }
//
// TODO:
//   - Use onAuthStateChanged from Firebase Auth
//   - When user logs in, fetch their staff profile from Firestore
//     (stored under /staff/{uid}) to get their role
//   - Return user (Firebase user object) + staffProfile (name, role, floor)
//   - loading: true while auth state is being determined
//   - Clean up auth listener on unmount
