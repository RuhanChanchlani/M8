import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';
import { validateRoomPin } from '../services/firebaseService';
import { useGuestSession } from '../hooks/useAuth';

const GuestLogin = () => {
  const navigate = useNavigate();
  const [roomNumber, setRoomNumber] = useState('');
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { saveSession } = useGuestSession();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await validateRoomPin(roomNumber.trim(), pin.trim());
      if (!result.valid) {
        setError(result.error === 'Session expired'
          ? 'Your session has ended. Please contact the front desk.'
          : 'Invalid room number or PIN. Please check your check-in card.');
        setLoading(false);
        return;
      }
      saveSession({ room: roomNumber.trim(), floor: result.data.floor, guestName: result.data.guest_name });
      navigate('/guest/sos');
    } catch {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc transition-colors duration-500 flex items-center justify-center p-4 relative z-0">
      {/* Resort ambient gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-brand-olive/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-teal/6 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[30%] rounded-full bg-brand-clay/5 blur-[80px]" />
      </div>
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="w-full max-w-sm">
          <form onSubmit={handleLogin}>
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-12 h-12 bg-brand-terracotta/10 text-brand-terracotta rounded-full flex items-center justify-center mb-4">
              <KeyRound className="w-6 h-6" />
            </div>
            <CardTitle>Guest Access</CardTitle>
            <CardDescription>Enter your credentials to connect to our emergency network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-6">
            <div className="space-y-2">
              <label htmlFor="room" className="text-sm font-medium text-brand-dark dark:text-brand-stone/80">Room Number</label>
              <input 
                id="room"
                type="text" 
                placeholder="e.g. 304"
                required
                className="w-full h-11 px-4 rounded-lg border border-brand-dark/20 dark:border-brand-sand/10 bg-transparent dark:text-brand-stone focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta outline-none transition-all"
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="pin" className="text-sm font-medium text-brand-dark dark:text-brand-stone/80">Access PIN</label>
              <input 
                id="pin"
                type="password" 
                placeholder="Check your key folder"
                required
                className="w-full h-11 px-4 rounded-lg border border-brand-dark/20 dark:border-brand-sand/10 bg-transparent dark:text-brand-stone focus:border-brand-terracotta focus:ring-1 focus:ring-brand-terracotta outline-none transition-all"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            {error && (
              <div className="w-full bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-4 py-3 text-sm text-red-700 dark:text-red-400 mb-2 text-center">
                {error}
              </div>
            )}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              disabled={loading || !roomNumber || !pin}
              className="uppercase tracking-widest font-bold py-3.5"
            >
              {loading ? 'VERIFYING...' : 'GUEST LOGIN'}
            </Button>
            <Button type="button" variant="ghost" fullWidth onClick={() => navigate('/')} className="text-sm">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </CardFooter>
        </form>
        </Card>
      </motion.div>
    </div>
  );
};

export default GuestLogin;
