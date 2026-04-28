import { useNavigate } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { HOTEL_NAME } from '../utils/constants'

export default function SessionExpiredPage() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="bg-stone-800 px-5 py-4 flex items-center gap-2">
        <Shield size={18} className="text-terra-400" />
        <span className="font-serif text-lg text-white">RapidResponse</span>
      </div>
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="text-center max-w-sm animate-fade-in">
          <div className="text-5xl mb-6">🏨</div>
          <h1 className="font-serif text-3xl text-stone-800 mb-3">Thank you for staying</h1>
          <p className="text-stone-500 leading-relaxed mb-8">
            Your guest session has ended. We hope you had a wonderful stay at {HOTEL_NAME}.
          </p>
          <button onClick={() => navigate('/guest/login')}
            className="btn-secondary text-sm">
            Return to login
          </button>
        </div>
      </div>
    </div>
  )
}
