import axios from 'axios'
import { API_BASE_URL as API_BASE } from '../utils/constants'

const api = axios.create({
  baseURL: API_BASE,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

// Incidents
export const createIncident     = (data)            => api.post('/incidents', data)
export const getIncidents       = (params)          => api.get('/incidents', { params })
export const assignResponder    = (id, staffId)     => api.patch(`/incidents/${id}/assign`, { staff_id: staffId })
export const resolveIncident    = (id)              => api.patch(`/incidents/${id}/resolve`)
export const updateResponderStatus = (id, status)  => api.patch(`/incidents/${id}/responder-status`, { status })

// Broadcast + Emergency
export const broadcastEvacuate  = (floor, incidentId) => api.post('/broadcast/evacuate', { floor, incident_id: incidentId })
export const broadcastAllClear  = (floor)             => api.post('/broadcast/all-clear', { floor })
export const triggerSensor      = (data)              => api.post('/sensor/trigger', data)

// Guest session
export const guestLogin         = (room, pin)       => api.post('/guest/login', { room, pin })
export const updateGuestFcm     = (room, token)     => api.patch(`/guest/${room}/fcm-token`, { token })
export const updateSafetyStatus = (room, status)    => api.patch(`/guest/${room}/safety-status`, { status })

// Rooms
export const getRooms           = ()                => api.get('/rooms')
export const createRoom         = (data)            => api.post('/rooms', data)
export const checkoutGuest      = (room)            => api.patch(`/rooms/${room}/checkout`)

// Staff
export const getStaff           = ()                => api.get('/staff')
export const getAvailableStaff  = ()                => api.get('/staff/available')
export const updateStaffFcm     = (id, token)       => api.patch(`/staff/${id}/fcm-token`, { token })

// Audit
export const getAuditLog        = ()                => api.get('/audit')

export default api
