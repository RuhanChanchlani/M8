"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { getIncidents, resolveIncident } from '@/services/api';

// Dynamically import the map to avoid SSR issues with Leaflet
const IncidentMap = dynamic(() => import('@/components/IncidentMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-stone-100 animate-pulse rounded-2xl flex items-center justify-center text-stone-400">Loading Tactical Map...</div>
});

export default function Page() {
  const [incidents, setIncidents] = useState<any[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const res = await getIncidents();
        setIncidents(res.data);
      } catch (error) {
        console.error('Failed to fetch incidents', error);
      }
    };
    fetchIncidents();
    const interval = setInterval(fetchIncidents, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleResolve = async (id: string) => {
    setLoadingId(id);
    try {
      await resolveIncident(id);
      const res = await getIncidents();
      setIncidents(res.data);
    } catch (error) {
      console.error('Failed to resolve incident', error);
      alert('Failed to resolve incident.');
    } finally {
      setLoadingId(null);
    }
  };

  const activeIncidents = incidents.filter(i => i.status !== 'resolved');

  return (
    <div className="text-on-surface min-h-screen flex flex-col bg-background">
      
<div className="stone-overlay flex flex-col flex-1">

<nav className="fixed top-0 w-full z-50 bg-[#fff8ef]/40 backdrop-blur-xl flex justify-between items-center px-12 py-6 shadow-[0_40px_60px_-15px_rgba(29,27,22,0.15)] bg-gradient-to-b from-white/30 to-transparent border-b border-white/20">
<div className="flex items-center gap-8">
<span className="text-2xl font-extrabold tracking-tighter text-[#91472a]">Solar Pavilion Response</span>
<div className="hidden md:flex gap-8 font-['Manrope'] font-light tracking-tight">
<Link className="text-[#91472a] font-bold border-b-2 border-[#91472a] pb-1" href="/">Dashboard</Link>
<Link className="text-[#765700] hover:text-[#91472a] transition-colors" href="/responder">Incidents</Link>
<Link className="text-[#765700] hover:text-[#91472a] transition-colors" href="#">Resources</Link>
</div>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-[#91472a] hover:backdrop-blur-3xl transition-all duration-300 p-2">notifications</button>
<button className="liquid-glass text-white px-6 py-2 rounded-full font-semibold scale-95 active:opacity-80 transition-all">Emergency Alert</button>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant">
<img alt="Manager Profile" data-alt="Close up portrait of a professional response manager with a calm expression in warm natural sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXdwfBK1bYxjspGv-0nvL6SznBR3jyWlJf9kUE0tKn25IhngzxheKJrLJYE-GeQDV5Anc-rMqwvzAcAe7Wje3zTrvmjXjNVKZ82P_gfjXlJKckGyxJkX7ZP0aOVBp-ikntIEEt32QvWc3HbZHtLpkMlbEg8x4lZ4s4CenU4zehqDOK_YrdBjkoiaqVTVVQckAE7iXpmw7ZlOOq0hNpAF0xbPTzHzfU1_qn6skMEQ2kvsG4q3lf779muDkd_EkRTFYpfpGYRE3FgEfO"/>
</div>
</div>
</nav>

<aside className="h-screen w-72 fixed left-0 top-0 bg-white/20 backdrop-blur-3xl border-r border-white/20 flex flex-col py-12 z-40 hidden md:flex">
<div className="px-8 mb-12 mt-12">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined text-white text-sm">architecture</span>
</div>
<h2 className="font-bold text-[#91472a] tracking-tight text-xl">Pavilion Prime</h2>
</div>
<p className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem] text-secondary">Safety Command</p>
</div>
<nav className="flex-1 space-y-1">
<Link className="flex items-center gap-4 text-[#91472a] bg-white/40 backdrop-blur-3xl rounded-r-full py-4 pl-8 transition-all duration-500 ease-in-out" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem]">Overview</span>
</Link>
<Link className="flex items-center gap-4 text-[#47664b] hover:pl-10 transition-all py-4 pl-8 font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem]" href="#">
<span className="material-symbols-outlined">map</span>
<span>Tactical Map</span>
</Link>
<Link className="flex items-center gap-4 text-[#47664b] hover:pl-10 transition-all py-4 pl-8 font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem]" href="#">
<span className="material-symbols-outlined">groups</span>
<span>Staffing</span>
</Link>
<Link className="flex items-center gap-4 text-[#47664b] hover:pl-10 transition-all py-4 pl-8 font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem]" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span>Inventory</span>
</Link>
<Link className="flex items-center gap-4 text-[#47664b] hover:pl-10 transition-all py-4 pl-8 font-['Manrope'] font-medium uppercase tracking-[0.05em] text-[0.75rem]" href="#">
<span className="material-symbols-outlined">analytics</span>
<span>Analytics</span>
</Link>
</nav>
<div className="px-8 mt-auto space-y-6">
<div className="bg-white/40 backdrop-blur-3xl p-4 rounded-xl border border-white/20">
<p className="text-[0.65rem] uppercase tracking-widest text-tertiary mb-1">System Status</p>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 group">
<div className="w-3 h-3 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(71,102,75,0.5)]"></div>
<span className="text-xs font-bold text-secondary uppercase tracking-tight">Active &amp; Nominal</span>
</button>
</div>
</div>
<div className="space-y-4">
<Link className="flex items-center gap-3 text-[#765700] text-xs uppercase tracking-widest hover:text-[#91472a]" href="#">
<span className="material-symbols-outlined text-sm">help</span>
                    Support
                </Link>
<Link className="flex items-center gap-3 text-[#765700] text-xs uppercase tracking-widest hover:text-[#91472a]" href="#">
<span className="material-symbols-outlined text-sm">history</span>
                    Archive
                </Link>
</div>
</div>
</aside>

<main className="flex-1 md:ml-72 mt-24 p-8 md:p-12">
<header className="mb-12">
<h1 className="text-5xl font-extrabold tracking-tight text-on-surface mb-2">Command Center</h1>
<p className="text-on-surface-variant font-light text-lg">Solar Pavilion West Wing • Active Response Mode</p>
</header>
<div className="grid grid-cols-12 gap-8">

<section className="col-span-12 lg:col-span-8 space-y-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-2xl font-bold tracking-tight text-primary">My Active Deployments</h2>
<span className="label-md text-tertiary uppercase tracking-widest text-xs font-bold bg-white/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/30">{activeIncidents.length} Priority Signals</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{activeIncidents.length === 0 ? (
  <div className="col-span-2 glass-card rounded-3xl p-8 flex flex-col items-center justify-center h-[340px] shadow-2xl shadow-black/5 text-center">
    <span className="material-symbols-outlined text-6xl text-primary/50 mb-4">task_alt</span>
    <h3 className="text-2xl font-bold mb-2">No Active Deployments</h3>
    <p className="text-on-surface-variant">All clear. Monitoring systems are nominal.</p>
  </div>
) : activeIncidents.map((incident) => {
  let icon = 'emergency';
  let colorClass = 'bg-secondary/20 text-secondary border-secondary/20';
  let iconColor = 'text-primary';
  
  if (incident.type === 'medical') { icon = 'medical_services'; colorClass = 'bg-[#765700]/20 text-[#765700] border-[#765700]/20'; iconColor = 'text-[#765700]'; }
  else if (incident.type === 'fire') { icon = 'local_fire_department'; colorClass = 'bg-[#91472a]/20 text-[#91472a] border-[#91472a]/20'; iconColor = 'text-[#91472a]'; }
  else if (incident.type === 'security') { icon = 'policy'; colorClass = 'bg-emerald-600/20 text-emerald-600 border-emerald-600/20'; iconColor = 'text-emerald-600'; }

  return (
    <div key={incident.id} className="glass-card rounded-3xl p-8 flex flex-col h-[340px] shadow-2xl shadow-black/5 transition-all hover:translate-y-[-4px]">
      <div className="flex justify-between items-start mb-6">
        <span className={`${colorClass} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest backdrop-blur-md border`}>
          {incident.type} • {incident.room || 'General'}
        </span>
        <span className={`material-symbols-outlined ${iconColor}`} style={{fontVariationSettings: "'FILL' 1"}}>{icon}</span>
      </div>
      <h3 className="text-2xl font-bold mb-2 capitalize">{incident.type} Alert</h3>
      <p className="text-on-surface-variant text-sm font-light mb-4 leading-relaxed">{incident.description}</p>
      
      {incident.recommended_action && (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-auto">
          <p className="text-[10px] uppercase tracking-widest font-black text-primary mb-1 flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">smart_toy</span>
            AI Recommended Action
          </p>
          <p className="text-xs text-on-surface font-medium italic">"{incident.recommended_action}"</p>
        </div>
      )}
      
      <div className="flex items-center justify-between pt-6 border-t border-black/5 mt-4">
        <span className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Severity: {incident.severity}</span>
        <button 
          onClick={() => handleResolve(incident.id)}
          disabled={loadingId === incident.id}
          className="bg-[#91472a] text-white px-5 py-2 rounded-full text-xs font-bold transition-all hover:brightness-110 disabled:opacity-50 uppercase tracking-widest"
        >
          {loadingId === incident.id ? 'Resolving...' : 'Resolve'}
        </button>
      </div>
    </div>
  );
})}

</div>
</section>

<aside className="col-span-12 lg:col-span-4">
<div className="glass-card rounded-[2.5rem] p-8 h-full shadow-2xl border border-white/40">
<h2 className="text-xl font-bold tracking-tight text-on-surface mb-8">Deployment Intelligence</h2>

<div className="mb-10">
<p className="text-[0.65rem] uppercase tracking-[0.2em] text-tertiary font-extrabold mb-4">Focus Destination</p>
<div className="bg-white/30 backdrop-blur-3xl rounded-2xl p-6 mb-6 border border-white/20">
<h4 className="font-bold text-lg mb-1">Villa 12: Morning Mist</h4>
<p className="text-sm text-on-surface-variant font-light">Occupant: Julian Vane</p>
<p className="text-xs text-secondary mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
                                Priority Guest Status
                            </p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/20">
<span className="material-symbols-outlined text-primary">device_thermostat</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface uppercase tracking-wider">Ambient Context</p>
<p className="text-sm text-on-surface-variant">74°F / 42% Humidity</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-white/40 backdrop-blur-md flex items-center justify-center border border-white/20">
<span className="material-symbols-outlined text-primary">distance</span>
</div>
<div>
<p className="text-xs font-bold text-on-surface uppercase tracking-wider">Proximity</p>
<p className="text-sm text-on-surface-variant">1.2km from Hub</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden mb-10 h-64 relative border border-white/40 shadow-lg">
  <IncidentMap incidents={activeIncidents} zoom={12} />
</div>

<button className="liquid-glass w-full py-5 rounded-full text-white font-extrabold tracking-widest text-sm uppercase shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                        Signal Resolution
                    </button>
<p className="text-center text-[10px] text-on-surface-variant font-medium mt-4 uppercase tracking-tighter">Auth Required: Manager Override</p>
</div>
</aside>
</div>
</main>

<footer className="w-full py-10 mt-auto bg-white/40 backdrop-blur-3xl border-t border-white/20">
<div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto w-full">
<p className="font-['Manrope'] font-light text-xs tracking-widest uppercase text-[#47664b] mb-4 md:mb-0">
                © 2024 Solar Pavilion Architectural Serenity. All rights reserved.
            </p>
<div className="flex gap-8">
<Link className="font-['Manrope'] font-light text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Privacy Protocol</Link>
<Link className="font-['Manrope'] font-light text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Security Compliance</Link>
<Link className="font-['Manrope'] font-light text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Terms of Service</Link>
</div>
</div>
</footer>
</div>

    </div>
  );
}
