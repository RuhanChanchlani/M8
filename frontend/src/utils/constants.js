export const APP_NAME = "RapidResponse";
export const HOTEL_NAME = "Aster Grove Hotel";
export const HOTEL_ADDRESS = "Jetalpur Road, Vadodara, Gujarat";
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const INCIDENT_TYPES = [
  "fire",
  "medical",
  "security",
  "maintenance",
  "evacuation",
  "sensor",
  "other",
];

export const SEVERITY_LEVELS = ["low", "medium", "high", "critical"];

export const ROLE_OPTIONS = [
  { value: "manager", label: "Manager" },
  { value: "security", label: "Security" },
  { value: "medical", label: "Medical" },
  { value: "housekeeping", label: "Housekeeping" },
];

export const RESPONSE_STATUS_OPTIONS = [
  "dispatched",
  "en_route",
  "on_scene",
  "evacuating",
  "needs_backup",
  "resolved",
];

export const DASHBOARD_LINKS = [
  { to: "/dashboard", label: "Command Center", roles: ["manager"] },
  { to: "/responder", label: "Responder Desk", roles: ["security", "medical", "housekeeping"] },
  { to: "/audit", label: "Audit Trail", roles: ["manager"] },
  { to: "/guest", label: "Guest Portal", roles: ["manager", "security", "medical", "housekeeping"] },
];

export const FLOOR_OPTIONS = [1, 2, 3, 4, 5, 6];
