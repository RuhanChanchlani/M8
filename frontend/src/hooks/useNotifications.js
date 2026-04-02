// useNotifications.js — Request push notification permission + get FCM token
//
// Returns: { fcmToken, permissionGranted, requestPermission }
//
// TODO:
//   - Use getMessaging and getToken from "firebase/messaging"
//   - requestPermission(): calls Notification.requestPermission()
//   - If granted: get FCM token and POST it to backend /staff/{id}/fcm-token
//   - Store token in local state and return it
//   - Note: FCM only works on HTTPS (works fine on Firebase Hosting)
