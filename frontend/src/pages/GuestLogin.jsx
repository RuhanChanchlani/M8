import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { KeyRound, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useAuth } from '../context/AuthContext';

const GuestLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [roomNumber, setRoomNumber] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login('guest', roomNumber);
    navigate('/guest/sos');
  };

  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc transition-colors duration-500 flex items-center justify-center p-4 relative">
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
            <Button type="submit" fullWidth>Connect to Network</Button>
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
