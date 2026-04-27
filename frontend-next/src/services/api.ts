import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Incidents
export const createIncident = (data: any) => api.post('/incidents', data);
export const getIncidents = (params?: any) => api.get('/incidents', { params });
export const assignResponder = (id: string, staffId: string) => api.patch(`/incidents/${id}/assign`, { staff_id: staffId });
export const resolveIncident = (id: string) => api.patch(`/incidents/${id}/resolve`);
export const updateResponderStatus = (id: string, status: string) => api.patch(`/incidents/${id}/responder-status`, { status });

// Broadcast + Emergency
export const broadcastEvacuate = (floor: number, incidentId?: string) => api.post('/broadcast/evacuate', { floor, incident_id: incidentId });
export const broadcastAllClear = (floor: number) => api.post('/broadcast/all-clear', { floor });
export const triggerSensor = (data: any) => api.post('/sensor/trigger', data);

// Guest session
export const guestLogin = (room: string, pin: string) => api.post('/guest/login', { room, pin });
export const updateGuestFcm = (room: string, token: string) => api.patch(`/guest/${room}/fcm-token`, { token });
export const updateSafetyStatus = (room: string, status: string) => api.patch(`/guest/${room}/safety-status`, { status });

// Rooms
export const getRooms = () => api.get('/rooms');
export const createRoom = (data: any) => api.post('/rooms', data);
export const checkoutGuest = (room: string) => api.patch(`/rooms/${room}/checkout`);

// Staff
export const getStaff = () => api.get('/staff');
export const getAvailableStaff = () => api.get('/staff/available');
export const updateStaffFcm = (id: string, token: string) => api.patch(`/staff/${id}/fcm-token`, { token });

// Audit
export const getAuditLog = () => api.get('/audit');

export default api;
