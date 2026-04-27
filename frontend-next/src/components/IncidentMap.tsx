"use client";
import React from "react";

interface MapProps {
  incidents?: any[];
  floor?: number;
  zoom?: number;
}

export default function IncidentMap({ incidents, zoom }: MapProps) {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner border border-white/40 relative z-10 bg-white flex items-center justify-center">
      <img 
        src="/resort-plan.jpg" 
        alt="Resort Plan" 
        className="w-full h-full object-contain"
      />
    </div>
  );
}
