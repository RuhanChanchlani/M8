import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ui/ThemeToggle';

const StaffLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleMode, setRoleMode] = useState('responder'); // manager or responder for demo

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase Auth goes here
    if (roleMode === 'manager') {
      navigate('/dashboard');
    } else {
      navigate('/responder');
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
            <div className="mx-auto w-12 h-12 bg-brand-olive/10 text-brand-olive rounded-full flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <CardTitle>Staff Portal</CardTitle>
            <CardDescription>Sign in to the RapidResponse network</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 mt-6">
            
            <div className="flex p-1 bg-brand-dark/5 dark:bg-brand-sand/5 rounded-lg mb-6 relative">
              {roleMode === 'responder' && (
                <motion.div layoutId="staff-role-slider" className="absolute inset-y-1 left-1 w-[calc(50%-4px)] bg-brand-stone dark:bg-brand-dark rounded-md shadow-sm" />
              )}
              {roleMode === 'manager' && (
                 <motion.div layoutId="staff-role-slider" className="absolute inset-y-1 right-1 w-[calc(50%-4px)] bg-brand-stone dark:bg-brand-dark rounded-md shadow-sm" />
              )}
              <button 
                type="button"
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all relative z-10 ${roleMode === 'responder' ? 'text-brand-dark dark:text-brand-stone' : 'text-brand-dark/60 dark:text-brand-stone/60 hover:text-brand-dark dark:hover:text-brand-stone'}`}
                onClick={() => setRoleMode('responder')}
              >
                Responder
              </button>
              <button 
                type="button"
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-all relative z-10 ${roleMode === 'manager' ? 'text-brand-dark dark:text-brand-stone' : 'text-brand-dark/60 dark:text-brand-stone/60 hover:text-brand-dark dark:hover:text-brand-stone'}`}
                onClick={() => setRoleMode('manager')}
              >
                Manager
              </button>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-brand-dark dark:text-brand-stone/80">Email</label>
              <input 
                id="email"
                type="email" 
                placeholder="staff@hotel.com"
                required
                className="w-full h-11 px-4 rounded-lg border border-brand-dark/20 dark:border-brand-sand/10 bg-transparent dark:text-brand-stone focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-brand-dark dark:text-brand-stone/80">Password</label>
              <input 
                id="password"
                type="password"
                required
                className="w-full h-11 px-4 rounded-lg border border-brand-dark/20 dark:border-brand-sand/10 bg-transparent dark:text-brand-stone focus:border-brand-olive focus:ring-1 focus:ring-brand-olive outline-none transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-3">
            <Button
              type="submit"
              variant="secondary"
              fullWidth
              className="uppercase tracking-widest font-bold py-3.5"
            >
              STAFF LOGIN
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

export default StaffLogin;
