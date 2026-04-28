import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateRoomPin } from '../services/firebaseService'
import { useGuestSession } from '../hooks/useAuth'
import { Shield, Hotel } from 'lucide-react'
import { HOTEL_NAME } from '../utils/constants'

export default function GuestLoginPage() {
  const [room,    setRoom]    = useState('')
  const [pin,     setPin]     = useState('')
  const [error,   setError]   = useState('')
  const [loading, setLoading] = useState(false)
  const { saveSession } = useGuestSession()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const result = await validateRoomPin(room.trim(), pin.trim())
      if (!result.valid) {
        setError(result.error === 'Session expired'
          ? 'Your session has ended. Please contact the front desk.'
          : 'Invalid room number or PIN. Please check your check-in card.')
        setLoading(false)
        return
      }
      saveSession({ room: room.trim(), floor: result.data.floor, guestName: result.data.guest_name })
      navigate('/guest/sos')
    } catch {
      setError('Connection error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Top bar */}
      <div className="bg-stone-800 px-5 py-4 flex items-center gap-2">
        <Shield size={18} className="text-terra-400" />
        <span className="font-serif text-lg text-white">RapidResponse</span>
      </div>

      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm animate-fade-in">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-stone-100 border border-stone-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Hotel size={28} className="text-stone-600" />
            </div>
            <h1 className="font-serif text-3xl text-stone-800 mb-2">Guest Access</h1>
            <p className="text-stone-500 text-sm leading-relaxed">
              Enter your room number and PIN from your<br />check-in card to access emergency services.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5 uppercase tracking-wide">Room Number</label>
              <input
                type="text" value={room} onChange={e => setRoom(e.target.value)}
                className="input-field text-center text-lg font-mono tracking-widest"
                placeholder="e.g. 304" required maxLength={4} />
            </div>

            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5 uppercase tracking-wide">PIN</label>
              <input
                type="password" value={pin} onChange={e => setPin(e.target.value)}
                className="input-field text-center text-xl tracking-widest font-mono"
                placeholder="••••••••" required maxLength={10} />
              <p className="text-xs text-stone-400 mt-1.5 text-center">PIN is printed on your check-in card</p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button type="submit" disabled={!room || !pin || loading}
              className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 text-base">
              {loading
                ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Verifying...</>
                : 'Access Emergency Services'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-stone-400">
              For check-in assistance, call the front desk<br />
              <a href="tel:0" className="text-terra-600 font-medium">Extension 0</a>
            </p>
          </div>
        </div>
      </div>

      {/* Hotel name footer */}
      <div className="py-4 text-center">
        <p className="text-xs text-stone-400">{HOTEL_NAME}</p>
      </div>
    </div>
  )
}
