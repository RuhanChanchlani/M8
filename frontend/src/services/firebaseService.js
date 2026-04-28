import { ref, onValue, off, set, update, get } from 'firebase/database'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db, firestore } from './firebase'

export function subscribeToIncidents(callback) {
  const r = ref(db, 'incidents')
  onValue(r, snap => {
    const data = snap.val() || {}
    const list = Object.values(data).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0))
    callback(list)
  })
  return () => off(r)
}

export function subscribeToStaff(callback) {
  const r = ref(db, 'staff')
  onValue(r, snap => { callback(snap.val() || {}) })
  return () => off(r)
}

export function subscribeToRooms(callback) {
  const r = ref(db, 'rooms')
  onValue(r, snap => { callback(snap.val() || {}) })
  return () => off(r)
}

export function subscribeToIncident(id, callback) {
  const r = ref(db, `incidents/${id}`)
  onValue(r, snap => { callback(snap.val()) })
  return () => off(r)
}

export async function validateRoomPin(room, pin) {
  const snap = await get(ref(db, `rooms/${room}`))
  const data = snap.val()
  if (!data) return { valid: false, error: 'Room not found' }
  if (!data.pin_active) return { valid: false, error: 'Session expired' }
  if (data.pin !== pin) return { valid: false, error: 'Invalid PIN' }
  return { valid: true, data }
}

export async function getAuditLog() {
  const q = query(collection(firestore, 'auditLog'), orderBy('timestamp', 'desc'), limit(100))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}
