import React, { useEffect, useState } from 'react';
import { MapPin, LogOut, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const EvacuationMap = ({ roomId }) => {
  const [evacInfo, setEvacInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvacInfo = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/evacuation/${roomId}`);
        if (response.ok) {
          const data = await response.json();
          setEvacInfo(data);
        }
      } catch (error) {
        console.error('Failed to fetch evacuation info:', error);
      } finally {
        setLoading(false);
      }
    };

    if (roomId) {
      fetchEvacInfo();
    }
  }, [roomId]);

  if (loading) return <div className="h-64 flex items-center justify-center">Loading map...</div>;
  if (!evacInfo) return null;

  const { current_location, nearest_exit, evacuation_path } = evacInfo;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-serif text-brand-dark dark:text-brand-stone">Safe Exit Route</h3>
        <div className="flex items-center gap-2 text-xs font-medium text-brand-olive dark:text-brand-stone/60">
          <Navigation className="w-3 h-3 animate-pulse" />
          Follow the highlighted path
        </div>
      </div>

      <div className="relative w-full aspect-[16/10] bg-brand-stone/50 dark:bg-brand-dark/50 rounded-2xl border border-brand-dark/10 dark:border-brand-stone/10 overflow-hidden shadow-inner">
        {/* Floor Plan Background (Using a stylized placeholder) */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
          <div className="w-full h-full grid grid-cols-12 grid-rows-8 gap-1 p-2">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-brand-dark/20 rounded-sm" />
            ))}
          </div>
        </div>

        {/* Path Rendering */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d={`M ${current_location.x}% ${current_location.y}% L ${nearest_exit.x}% ${nearest_exit.y}%`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 4"
            className="text-brand-terracotta"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        {/* Current Location Marker */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute z-20"
          style={{ left: `${current_location.x}%`, top: `${current_location.y}%`, transform: 'translate(-50%, -100%)' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-brand-terracotta/40 rounded-full animate-ping" />
            <MapPin className="w-8 h-8 text-brand-terracotta drop-shadow-lg relative z-10" />
            <div className="absolute top-0 left-full ml-2 bg-brand-dark dark:bg-brand-stone text-brand-stone dark:text-brand-dark text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-md">
              You are here (Room {roomId})
            </div>
          </div>
        </motion.div>

        {/* Exit Marker */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute z-20"
          style={{ left: `${nearest_exit.x}%`, top: `${nearest_exit.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <div className="flex flex-col items-center">
            <div className="p-2 bg-brand-olive rounded-full shadow-lg border-2 border-brand-stone">
              <LogOut className="w-5 h-5 text-brand-stone" />
            </div>
            <div className="mt-1 bg-brand-olive text-brand-stone text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap shadow-md font-bold uppercase tracking-wider">
              {nearest_exit.name}
            </div>
          </div>
        </motion.div>

        {/* Area Label */}
        <div className="absolute bottom-4 left-4 text-[10px] text-brand-dark/40 dark:text-brand-stone/30 font-medium uppercase tracking-[0.2em]">
          Floor 1 • {current_location.area}
        </div>
      </div>
      
      <div className="p-4 bg-brand-terracotta/5 dark:bg-brand-terracotta/10 rounded-xl border border-brand-terracotta/10">
        <p className="text-xs text-brand-dark/70 dark:text-brand-stone/70 leading-relaxed">
          <span className="font-bold text-brand-terracotta uppercase mr-1">Safety Instruction:</span> 
          Head towards the <span className="font-bold">{nearest_exit.name}</span> immediately. Do not use elevators. Assist others if possible.
        </p>
      </div>
    </div>
  );
};

export default EvacuationMap;
