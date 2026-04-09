import React, { useState } from 'react';
import { ShieldAlert, Flame, Stethoscope, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';

const GuestSOS = () => {
  const [status, setStatus] = useState('idle'); // idle, reporting, reported
  const [emergencyType, setEmergencyType] = useState(null);
  const [description, setDescription] = useState('');

  const emergencyTypes = [
    { id: 'fire', icon: Flame, label: 'Fire' },
    { id: 'medical', icon: Stethoscope, label: 'Medical' },
    { id: 'security', icon: Shield, label: 'Security' },
    { id: 'maintenance', icon: Wrench, label: 'Maintenance' },
  ];

  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc transition-colors duration-500 overflow-hidden relative">
      <Header showLogout={true} />
      
      {/* Dynamic Background Effect when active */}
      <AnimatePresence>
        {status !== 'idle' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-red-900/10 dark:bg-red-900/20 backdrop-blur-[2px] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <main className="max-w-md mx-auto p-6 flex flex-col items-center pt-[10vh] relative z-10">
        <AnimatePresence mode="wait">
          
          {/* IDLE STATE */}
          {status === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              className="text-center w-full space-y-16"
            >
              <div>
                <motion.h2 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="text-3xl font-serif text-brand-dark dark:text-brand-stone mb-2"
                >
                  Need Assistance?
                </motion.h2>
                <motion.p 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-brand-dark/70 dark:text-brand-stone/60"
                >
                  Tap the button below in case of emergency.
                </motion.p>
              </div>

              {/* Pulsing Radar SOS Button */}
              <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
                <div className="absolute inset-[-50%] rounded-full bg-brand-terracotta/20 animate-ping-slow pointer-events-none" />
                <div className="absolute inset-[-20%] rounded-full bg-brand-terracotta/30 animate-pulse pointer-events-none" />
                <motion.button 
                  onClick={() => setStatus('reporting')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-full h-full rounded-full bg-brand-terracotta dark:bg-brand-terracotta/90 text-brand-stone shadow-[0_0_40px_rgba(201,122,94,0.6)] flex flex-col items-center justify-center hover:bg-brand-terracotta/90 outline-none"
                >
                  <ShieldAlert className="w-16 h-16 mb-2 drop-shadow-md" />
                  <span className="text-2xl font-bold tracking-wider drop-shadow-md">SOS</span>
                </motion.button>
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-brand-dark/50 dark:text-brand-stone/40"
              >
                Your exact location will be sent automatically.
              </motion.p>
            </motion.div>
          )}

          {/* REPORTING STATE */}
          {status === 'reporting' && (
            <motion.div 
              key="reporting"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="w-full glass-panel p-6 space-y-6 flex flex-col"
            >
              <h3 className="text-xl font-serif text-brand-dark dark:text-brand-stone">What's the emergency?</h3>
              <div className="grid grid-cols-2 gap-4">
                {emergencyTypes.map((type, index) => (
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    key={type.id}
                    onClick={() => setEmergencyType(type.id)}
                    className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                      emergencyType === type.id 
                        ? 'border-brand-terracotta bg-brand-terracotta/10 text-brand-terracotta dark:bg-brand-terracotta/20 dark:text-brand-stone' 
                        : 'border-brand-dark/10 dark:border-brand-stone/10 bg-brand-stone/50 dark:bg-brand-zinc/50 text-brand-dark/70 dark:text-brand-stone/70 hover:border-brand-terracotta/50'
                    }`}
                  >
                    <type.icon className="w-8 h-8" />
                    <span className="font-medium">{type.label}</span>
                  </motion.button>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-brand-dark dark:text-brand-stone/80">Additional Details (Optional)</label>
                <textarea 
                  className="w-full rounded-lg border border-brand-dark/20 dark:border-brand-stone/10 bg-brand-stone/50 dark:bg-brand-dark/50 text-brand-dark dark:text-brand-stone p-3 h-24 focus:border-brand-terracotta outline-none resize-none transition-colors"
                  placeholder="e.g., Smoke coming from the bathroom"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </motion.div>

              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1 dark:text-brand-stone dark:border-brand-stone/20" onClick={() => { setStatus('idle'); setEmergencyType(null); }}>Cancel</Button>
                <Button className="flex-1 shadow-lg shadow-brand-terracotta/30" onClick={() => setStatus('reported')} disabled={!emergencyType}>Send Alert</Button>
              </div>
            </motion.div>
          )}

          {/* REPORTED STATE */}
          {status === 'reported' && (
            <motion.div 
              key="reported"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full glass-panel p-8 text-center space-y-8"
            >
              <div className="relative">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-brand-olive/10 dark:bg-brand-olive/20 text-brand-olive dark:text-[#a1b345] rounded-full flex items-center justify-center mx-auto relative z-10"
                >
                  <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-brand-olive/30 rounded-full mx-auto w-20 h-20 pointer-events-none"
                />
              </div>

              <div>
                <h3 className="text-2xl font-serif text-brand-dark dark:text-brand-stone mb-2">Help is on the way</h3>
                <p className="text-brand-dark/70 dark:text-brand-stone/70">Your alert has been received. Please stay safe and follow any staff instructions.</p>
              </div>

              {/* Animated Live Tracker Simulation */}
              <div className="text-left bg-brand-stone/50 dark:bg-brand-dark/50 p-6 rounded-2xl border border-brand-dark/5 dark:border-brand-stone/5 relative">
                 <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-brand-olive to-transparent" />
                 
                 <motion.div 
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.3 }}
                   className="flex gap-4 relative mb-6"
                 >
                    <div className="w-6 h-6 rounded-full bg-brand-olive flex items-center justify-center shrink-0 shadow-md shadow-brand-olive/30 z-10">
                      <div className="w-2 h-2 bg-brand-stone rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark dark:text-brand-stone text-sm">Alert Sent</p>
                      <p className="text-xs text-brand-dark/60 dark:text-brand-stone/50 mt-1">Just now</p>
                    </div>
                 </motion.div>
                 
                 <motion.div 
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.6 }}
                   className="flex gap-4 relative"
                 >
                    <div className="w-6 h-6 rounded-full bg-brand-stone dark:bg-brand-zinc border-2 border-brand-olive flex items-center justify-center shrink-0 z-10">
                      <motion.div 
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                        className="w-2 h-2 bg-brand-olive rounded-full" 
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-dark dark:text-brand-stone text-sm">Assigning Nearest Staff</p>
                    </div>
                 </motion.div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default GuestSOS;
