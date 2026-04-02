// MapView.jsx — Google Maps with live incident pins
//
// TODO:
//   - Load Google Maps using @googlemaps/react-wrapper or react-google-maps/api
//   - Center map on hotel location (hardcode lat/lng for demo)
//   - For each active incident, place a colored Marker:
//       critical → red marker
//       high     → orange marker
//       medium   → yellow marker
//       low      → green marker
//   - Clicking a marker opens an InfoWindow with incident summary
//   - InfoWindow has an "Assign Responder" button that opens <AssignModal />
//
// API key comes from import.meta.env.VITE_GOOGLE_MAPS_API_KEY
