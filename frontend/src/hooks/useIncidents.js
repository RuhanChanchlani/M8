// useIncidents.js — Custom hook for live incident data from Firebase
//
// Returns: { incidents, loading, error }
//
// TODO:
//   - Import { ref, onValue } from "firebase/database" and db from firebase.js
//   - Use onValue listener on /incidents path for real-time updates
//   - Convert Firebase snapshot to an array of incident objects
//   - Sort by severity and timestamp before returning
//   - Clean up listener on component unmount (return unsubscribe in useEffect)
