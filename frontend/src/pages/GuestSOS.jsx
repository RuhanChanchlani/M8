import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const GuestSOS = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState('idle'); // idle, reporting, reported
  const [emergencyType, setEmergencyType] = useState('General SOS');
  
  const handleSOS = (type = 'General SOS') => {
    setEmergencyType(type);
    setStatus('reported');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-main-image -z-20"></div>
      <div className="fixed inset-0 bg-white/20 backdrop-blur-[2px] -z-10"></div>
      
      <header className="fixed top-0 w-full z-50">
        <div className="flex justify-between items-center px-6 py-4 w-full bg-white/30 backdrop-blur-xl border-b border-white/20 relative z-50">
          <div className="active:scale-95 duration-200 transition-opacity hover:opacity-80 cursor-pointer" onClick={() => navigate('/guest/login')}>
            <span className="material-symbols-outlined text-emerald-600">arrow_back</span>
          </div>
          <h1 className="font-manrope tracking-[0.2em] uppercase text-lg font-bold text-on-surface">LUMINA LUXE</h1>
          <div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center overflow-hidden border border-white/40 active:scale-95 duration-200">
            <span className="material-symbols-outlined text-white">person</span>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-32 px-6 min-h-screen flex flex-col items-center relative z-10 w-full">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <div className="mb-8 text-center pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-on-surface text-xs font-semibold tracking-wider uppercase bg-white/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Secure Environment
                </div>
                <p className="mt-4 text-on-surface-variant font-medium text-sm max-w-xs mx-auto drop-shadow-sm bg-white/30 p-2 rounded-lg">
                  Assistance is always within reach. Tap the trigger for immediate response.
                </p>
              </div>

              {/* Central SOS Trigger */}
              <div className="relative w-72 h-72 mb-12 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping"></div>
                <div className="absolute inset-4 rounded-full bg-emerald-400/10"></div>
                
                <div 
                  onClick={() => handleSOS('Emergency SOS')}
                  className="relative z-10 w-64 h-64 rounded-full p-1 bg-gradient-to-br from-white/60 to-transparent active:scale-95 transition-transform duration-500 cursor-pointer group"
                >
                  <div className="w-full h-full rounded-full liquid-glass-emerald flex flex-col items-center justify-center safety-glow-emerald overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-70 pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                    <span className="material-symbols-outlined text-7xl text-white mb-2 relative z-10 drop-shadow-lg" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
                    <span className="text-4xl font-extrabold tracking-tighter text-white relative z-10 drop-shadow-lg">SOS</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/90 mt-1 relative z-10">Trigger Alarm</span>
                  </div>
                </div>
              </div>

              {/* Secondary Options Grid */}
              <div className="w-full max-w-md grid grid-cols-3 gap-4 mb-12">
                <div onClick={() => handleSOS('Medical')} className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group hover:bg-white/60 bg-white/40">
                  <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface tracking-tight">Medical</span>
                </div>
                <div onClick={() => handleSOS('Security')} className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group hover:bg-white/60 bg-white/40">
                  <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-emerald-600" style={{fontVariationSettings: "'FILL' 1"}}>policy</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface tracking-tight">Security</span>
                </div>
                <div onClick={() => handleSOS('Staff Request')} className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group hover:bg-white/60 bg-white/40">
                  <div className="w-12 h-12 rounded-2xl bg-white/60 flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
                  </div>
                  <span className="text-xs font-bold text-on-surface tracking-tight">Staff</span>
                </div>
              </div>
            </motion.div>
          )}

          {status === 'reported' && (
            <motion.div
               key="reported"
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="w-full glass-panel p-8 text-center space-y-8 max-w-md bg-white/50 rounded-[3rem] border border-white/50 shadow-2xl mt-10"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-emerald-500/20 text-emerald-600 rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <div className="absolute inset-0 bg-emerald-500/30 rounded-full mx-auto w-20 h-20 animate-ping pointer-events-none" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface mb-2">Help is on the way</h3>
                <p className="text-on-surface-variant font-medium">Your {emergencyType} alert has been received. Please stay safe and follow any staff instructions.</p>
              </div>

              <div className="text-left bg-white/40 p-6 rounded-2xl border border-white/40 relative mt-6">
                 <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-emerald-500/50" />
                 
                 <div className="flex gap-4 relative mb-6">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/30 z-10">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">Alert Sent</p>
                      <p className="text-xs text-on-surface-variant mt-1">Just now</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4 relative">
                    <div className="w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shrink-0 z-10">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <p className="font-semibold text-on-surface text-sm">Assigning Nearest Staff</p>
                    </div>
                 </div>
              </div>

              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 liquid-glass hover:bg-white/60 px-6 py-4 rounded-full text-emerald-700 font-bold w-full active:scale-95 transition-all shadow-md"
              >
                Cancel Alert
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};
export default GuestSOS;
