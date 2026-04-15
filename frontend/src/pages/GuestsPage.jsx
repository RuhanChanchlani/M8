import { useState, useEffect } from 'react'
import Navbar from '../components/shared/Navbar'
import { subscribeToRooms } from '../services/firebaseService'
import { checkoutGuest, createRoom } from '../services/api'
import Toast from '../components/shared/Toast'
import Loader from '../components/shared/Loader'
import { Users, Plus, X, LogOut, ShieldCheck, AlertCircle, HelpCircle } from 'lucide-react'
import { formatDateTime } from '../utils/formatTime'
import { FLOOR_OPTIONS as HOTEL_FLOORS } from '../utils/constants'

export default function GuestsPage() {
  const [rooms,   setRooms]   = useState({})
  const [loading, setLoading] = useState(true)
  const [toast,   setToast]   = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  // New room form
  const [newRoom,  setNewRoom]  = useState('')
  const [newFloor, setNewFloor] = useState(1)
  const [newName,  setNewName]  = useState('')
  const [adding,   setAdding]   = useState(false)

  useEffect(() => {
    const unsub = subscribeToRooms(data => { setRooms(data); setLoading(false) })
    return unsub
  }, [])

  const handleCheckout = async (roomNo) => {
    if (!confirm(`Check out Room ${roomNo}? This will revoke the guest's access.`)) return
    try {
      await checkoutGuest(roomNo)
      setToast({ message: `Room ${roomNo} checked out successfully.`, type: 'success' })
    } catch {
      setToast({ message: 'Checkout failed. Try again.', type: 'error' })
    }
  }

  const handleAddRoom = async (e) => {
    e.preventDefault()
    if (!newRoom || !newName) return
    setAdding(true)
    try {
      await createRoom({ room_no: newRoom, floor: newFloor, guest_name: newName })
      setToast({ message: `Room ${newRoom} created for ${newName}.`, type: 'success' })
      setShowAdd(false); setNewRoom(''); setNewName(''); setNewFloor(1)
    } catch {
      setToast({ message: 'Failed to create room. Try again.', type: 'error' })
    }
    setAdding(false)
  }

  const safetyIcon = (status) => {
    if (status === 'safe')      return <ShieldCheck size={14} className="text-green-600" />
    if (status === 'need_help') return <AlertCircle  size={14} className="text-red-600" />
    return <HelpCircle size={14} className="text-stone-400" />
  }

  const roomList = Object.entries(rooms)
    .filter(([, r]) => r.pin_active)
    .sort(([a], [b]) => a.localeCompare(b))

  if (loading) return <><Navbar /><Loader message="Loading guests..." /></>

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-stone-100 border border-stone-200 rounded-xl flex items-center justify-center">
              <Users size={20} className="text-stone-600" />
            </div>
            <div>
              <h1 className="font-serif text-2xl text-stone-800">Active Guests</h1>
              <p className="text-xs text-stone-500">{roomList.length} checked-in rooms</p>
            </div>
          </div>
          <button onClick={() => setShowAdd(true)}
            className="btn-primary flex items-center gap-2 text-sm">
            <Plus size={16} /> Check In Guest
          </button>
        </div>

        {/* Add room modal */}
        {showAdd && (
          <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md animate-slide-up">
              <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                <h2 className="font-serif text-lg text-stone-800">Check In Guest</h2>
                <button onClick={() => setShowAdd(false)} className="text-stone-400 hover:text-stone-700"><X size={20} /></button>
              </div>
              <form onSubmit={handleAddRoom} className="px-5 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5 uppercase tracking-wide">Room Number</label>
                  <input value={newRoom} onChange={e => setNewRoom(e.target.value)} className="input-field" placeholder="e.g. 304" required />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5 uppercase tracking-wide">Floor</label>
                  <select value={newFloor} onChange={e => setNewFloor(Number(e.target.value))} className="input-field">
                    {HOTEL_FLOORS.map(f => <option key={f} value={f}>Floor {f}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-600 mb-1.5 uppercase tracking-wide">Guest Name</label>
                  <input value={newName} onChange={e => setNewName(e.target.value)} className="input-field" placeholder="Full name" required />
                </div>
                <p className="text-xs text-stone-500 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2.5">
                  PIN will be auto-generated and shown to you after creation.
                </p>
                <div className="flex gap-2 justify-end pt-1">
                  <button type="button" onClick={() => setShowAdd(false)} className="btn-secondary">Cancel</button>
                  <button type="submit" disabled={adding} className="btn-primary">
                    {adding ? 'Creating...' : 'Check In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Rooms table */}
        {roomList.length === 0 ? (
          <div className="card py-16 text-center">
            <p className="text-stone-400 text-sm">No active guests. Check in a guest to get started.</p>
          </div>
        ) : (
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    {['Room', 'Guest', 'Floor', 'PIN', 'Check-In', 'Safety', 'Action'].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-medium text-stone-500 uppercase tracking-wide">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {roomList.map(([roomNo, room]) => (
                    <tr key={roomNo} className="hover:bg-stone-50 transition-colors">
                      <td className="px-4 py-3.5">
                        <span className="font-mono font-medium text-stone-800 text-sm">{room.room_no || roomNo}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-sm text-stone-700">{room.guest_name || '—'}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-sm text-stone-500">Floor {room.floor}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="font-mono text-xs bg-stone-100 px-2 py-1 rounded text-stone-600">{room.pin}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="text-xs text-stone-500">{formatDateTime(room.check_in)}</span>
                      </td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5">
                          {safetyIcon(room.safety_status)}
                          <span className="text-xs text-stone-500 capitalize">{room.safety_status || 'Unknown'}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5">
                        <button onClick={() => handleCheckout(room.room_no || roomNo)}
                          className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-red-600 transition-colors border border-stone-200 hover:border-red-300 px-2.5 py-1.5 rounded-lg">
                          <LogOut size={12} /> Check Out
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
