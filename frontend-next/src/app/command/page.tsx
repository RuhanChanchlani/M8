import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-on-surface min-h-screen flex flex-col bg-background">
      

<aside className="h-screen w-72 fixed left-0 top-0 sidebar-blur flex flex-col py-12 z-40">
<div className="px-8 mb-12">
<div className="flex items-center gap-3 mb-1">
<span className="font-bold text-[#ffb59b] tracking-tight text-xl text-shadow-strong">Pavilion Prime</span>
</div>
<p className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem] text-[#adcfae] text-shadow-strong">Safety Command</p>
</div>
<nav className="flex-1 space-y-2">
<Link className="flex items-center gap-4 text-[#adcfae] hover:pl-10 transition-all py-4 pl-8 hover:bg-white/10" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem]">Overview</span>
</Link>
<Link className="flex items-center gap-4 text-[#ffb59b] bg-white/10 rounded-r-full py-4 pl-8" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>map</span>
<span className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem]">Tactical Map</span>
</Link>
<Link className="flex items-center gap-4 text-[#adcfae] hover:pl-10 transition-all py-4 pl-8 hover:bg-white/10" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem]">Staffing</span>
</Link>
<Link className="flex items-center gap-4 text-[#adcfae] hover:pl-10 transition-all py-4 pl-8 hover:bg-white/10" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem]">Inventory</span>
</Link>
<Link className="flex items-center gap-4 text-[#adcfae] hover:pl-10 transition-all py-4 pl-8 hover:bg-white/10" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-['Manrope'] font-bold uppercase tracking-[0.05em] text-[0.75rem]">Analytics</span>
</Link>
</nav>
<div className="px-8 mt-auto pt-8">
<div className="p-4 rounded-xl deep-glass mb-8">
<p className="text-[0.65rem] uppercase tracking-widest text-secondary-fixed-dim font-bold mb-1">System Status</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-secondary-fixed-dim animate-pulse"></div>
<span className="text-xs font-bold text-white">Nominal</span>
</div>
</div>
<div className="space-y-4">
<Link className="flex items-center gap-3 text-white/70 hover:text-[#ffb59b] transition-colors text-xs uppercase tracking-widest font-bold" href="#">
<span className="material-symbols-outlined text-sm">help</span> Support
                </Link>
<Link className="flex items-center gap-3 text-white/70 hover:text-[#ffb59b] transition-colors text-xs uppercase tracking-widest font-bold" href="#">
<span className="material-symbols-outlined text-sm">history</span> Archive
                </Link>
</div>
</div>
</aside>

<main className="ml-72 flex-1 flex flex-col relative min-h-screen">

<header className="fixed top-0 right-0 left-72 z-30 header-glass flex justify-between items-center px-12 py-6">
<h1 className="text-2xl font-black tracking-tighter text-[#ffb59b] uppercase text-shadow-strong">Solar Pavilion Response</h1>
<div className="flex items-center gap-8">
<div className="flex items-center gap-6 font-['Manrope'] font-bold tracking-tight">
<Link className="text-[#ffdfa0] hover:text-[#ffb59b] transition-colors text-shadow-strong" href="#">Dashboard</Link>
<Link className="text-[#ffb59b] font-black border-b-2 border-[#ffb59b] pb-1 text-shadow-strong" href="#">Incidents</Link>
<Link className="text-[#ffdfa0] hover:text-[#ffb59b] transition-colors text-shadow-strong" href="#">Resources</Link>
</div>
<div className="flex items-center gap-4">
<button className="liquid-glass text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest active:scale-95 transition-transform bg-[#91472a]/80">
                        Emergency Alert
                    </button>
<button className="p-2 rounded-full hover:bg-white/20 transition-colors text-white">
<span className="material-symbols-outlined">notifications</span>
</button>
<div className="w-10 h-10 rounded-full border-2 border-[#ffb59b]/50 overflow-hidden shadow-lg">
<img alt="Manager Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJopavJ4H8Y1CotdsP49J6XnkCscsxwapo63EtlleSQO2ImHcPxuKvQt5NxjEVANuwAVYLTIaE_NNcoB88rkdoMxCAW4wi9hoNWqY4HnX_MQOsZ0NXTZEY608PfenhOFkkFtcSQARJmw3ifGsqKN1qw5panTnY3BpY4Fi-C1cW9Fd6xA6aTMaLW11m0oWFynERoxpeSnesXXMjha97POh0gjEJoGfCK12x0VI8pGuTRe-MOHBv-cJ850f2LZoQOaTUde4Mr4q2-bGM"/>
</div>
</div>
</div>
</header>

<section className="flex-1 pt-28 px-12 pb-8 grid grid-cols-12 gap-8 h-full overflow-hidden">

<div className="col-span-8 flex flex-col gap-8 h-full overflow-hidden">
<div className="relative flex-1 rounded-3xl overflow-hidden glass-heavy shadow-2xl group border border-white/20 bg-black/10">

<div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay">
<img className="w-full h-full object-cover grayscale contrast-150 brightness-125" data-alt="Abstract minimalist architectural floor plan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9qCaoxOKoW_rUB2mmQLsJA2HnCbE4Db3Ez8OMX6_bZA2rujUejKSszLXaYR6jPwZIbjfv0DYXjxrsXrvUCSgSJ4MEex3yxpw8oQZK6IOdpdOLltla6BBs6313_An4aA54CE2KE2PPhTKRbBCSx2hnSPaumRTaCY2gb34Ia80pqy3US8pRqWIn0D9nHyZIQCgvkDmqJTd7DtFkgVSRxJfYMCFfqDOYdsQ7cg-GfmpIARK-y4gRuoH-oL4NsA4k2L6JXHiazVqMP_ry"/>
</div>

<div className="absolute inset-0 p-8 flex flex-col pointer-events-none">
<div className="flex justify-between items-start pointer-events-auto">
<div className="space-y-1">
<h2 className="text-4xl font-black text-white tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">NORTH WING</h2>
<p className="text-[#adcfae] font-black text-xs uppercase tracking-[0.2em] text-shadow-strong">Operational Status: Secure</p>
</div>
<div className="flex gap-2">
<button className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20">
<span className="material-symbols-outlined">zoom_in</span>
</button>
<button className="liquid-glass w-12 h-12 rounded-full flex items-center justify-center text-white bg-white/10 hover:bg-white/20">
<span className="material-symbols-outlined">zoom_out</span>
</button>
<button className="liquid-glass px-6 h-12 rounded-full flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest bg-white/10 hover:bg-white/20">
<span className="material-symbols-outlined text-sm">layers</span> Layers
                                </button>
</div>
</div>

<div className="flex-1 relative">

<div className="absolute top-[20%] left-[35%] pointer-events-auto group/marker cursor-pointer">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary animate-bounce border-2 border-white/50">
<span className="material-symbols-outlined">local_fire_department</span>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 deep-glass p-4 rounded-2xl w-56 opacity-0 group-hover/marker:opacity-100 transition-opacity pointer-events-none">
<p className="text-[#ffb59b] font-black text-[10px] uppercase tracking-widest mb-1">Kitchen Unit 04</p>
<p className="text-white/90 text-xs font-bold leading-relaxed">Excessive heat detected in ventilation shaft. Sensors active.</p>
</div>
</div>

<div className="absolute top-[60%] left-[70%] pointer-events-auto group/marker cursor-pointer">
<div className="w-10 h-10 bg-[#765700] rounded-full flex items-center justify-center text-white shadow-2xl shadow-yellow-900 border-2 border-white/50">
<span className="material-symbols-outlined text-lg">medical_services</span>
</div>
</div>
</div>
</div>
</div>

<div className="h-48 deep-glass rounded-3xl p-6 flex flex-col gap-4">
<div className="flex justify-between items-center">
<h3 className="text-xs font-black uppercase tracking-widest text-white/80">Asset Integrity Matrix</h3>
<span className="text-[10px] font-black text-[#adcfae] bg-white/10 px-3 py-1 rounded-full border border-white/10">All Systems Calibrated</span>
</div>
<div className="flex-1 grid grid-cols-4 gap-6">
<div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-white/10">
<span className="text-[10px] uppercase tracking-tighter text-white/60 font-black">Solar Array β</span>
<div className="flex items-end justify-between">
<span className="text-xl font-black text-white">98.4%</span>
<span className="text-[10px] text-[#adcfae] font-black uppercase">Nominal</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#adcfae] w-[98%] shadow-[0_0_8px_#adcfae]"></div>
</div>
</div>
<div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-white/10">
<span className="text-[10px] uppercase tracking-tighter text-white/60 font-black">Water Recycle</span>
<div className="flex items-end justify-between">
<span className="text-xl font-black text-white">100%</span>
<span className="text-[10px] text-[#adcfae] font-black uppercase">Nominal</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#adcfae] w-full shadow-[0_0_8px_#adcfae]"></div>
</div>
</div>
<div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-white/10">
<span className="text-[10px] uppercase tracking-tighter text-white/60 font-black">HVAC Filtration</span>
<div className="flex items-end justify-between">
<span className="text-xl font-black text-white">92.1%</span>
<span className="text-[10px] text-[#adcfae] font-black uppercase">Nominal</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#adcfae] w-[92%] shadow-[0_0_8px_#adcfae]"></div>
</div>
</div>
<div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between border border-white/10">
<span className="text-[10px] uppercase tracking-tighter text-white/60 font-black">Core Perimeter</span>
<div className="flex items-end justify-between">
<span className="text-xl font-black text-[#ffb59b]">SECURE</span>
<span className="text-[10px] text-[#adcfae] font-black uppercase">Nominal</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#adcfae] w-full shadow-[0_0_8px_#adcfae]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-4 flex flex-col h-full overflow-hidden gap-6">
<div className="flex items-center justify-between">
<h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#ffb59b] text-shadow-strong">Live Resort Feed</h3>
<div className="flex gap-2 items-center bg-black/30 px-3 py-1 rounded-full">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-[10px] font-black text-white uppercase">Recording</span>
</div>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-4">

<div className="deep-glass rounded-2xl p-5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
<div className="flex justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#ffb59b]/20 flex items-center justify-center border border-[#ffb59b]/30">
<span className="material-symbols-outlined text-[#ffb59b] text-sm">security</span>
</div>
<div>
<h4 className="text-xs font-black text-white">North Pavilion Entrance</h4>
<p className="text-[9px] text-[#adcfae] uppercase tracking-widest font-black">14:22:05 — Security</p>
</div>
</div>
<button className="text-[#ffb59b]"><span className="material-symbols-outlined text-lg">more_vert</span></button>
</div>
<div className="h-32 rounded-xl overflow-hidden mb-3 relative group border border-white/10">
<img className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all" data-alt="luxury resort lobby entrance" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB73BZgnMivK8j2rW4O0pFukFjRuaQGFMHEqM2lKR_1uUMUn_qia3yHQzY9WdtjNrcG2EJFa7ZCbkVEPKVXz4t6EYFiKB4_FdxP9HGApdSIK95YtZNE3mYrLCYBbbuA88itUuIoTKcOIlcVk-kdxCTAgbAHoaE3gR_HAOPIqCE82hkwazq0rZtnWTzt-h2xc20nvkRdiVCmSG5Rb6ZYph-oIClTD7V7h5hCfh5DYWJY5KuqWFNdZ8AEFDPE94iHmiJiPjCHgzjemI31"/>
<div className="absolute inset-0 bg-black/40 opacity-40 group-hover:opacity-0 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white text-5xl drop-shadow-xl">play_circle</span>
</div>
</div>
<p className="text-[11px] text-white/80 leading-relaxed font-bold">System identified unrecognized logistics vehicle at service gate. ID verification requested by autonomous unit S-04.</p>
</div>

<div className="deep-glass rounded-2xl p-5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
<div className="flex justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#ffdfa0]/20 flex items-center justify-center border border-[#ffdfa0]/30">
<span className="material-symbols-outlined text-[#ffdfa0] text-sm">thermostat</span>
</div>
<div>
<h4 className="text-xs font-black text-white">West Terrace Spa</h4>
<p className="text-[9px] text-[#adcfae] uppercase tracking-widest font-black">14:18:44 — Environmental</p>
</div>
</div>
</div>
<p className="text-[11px] text-white/80 leading-relaxed font-bold mb-4">Ambient temperature optimization complete. Adjustment made for solar gain forecast.</p>
<div className="flex gap-2">
<span className="text-[9px] font-black px-3 py-1 bg-white/10 rounded-full text-[#ffdfa0] uppercase tracking-tighter border border-white/5">Optimization: +1.2°C</span>
<span className="text-[9px] font-black px-3 py-1 bg-white/10 rounded-full text-[#ffdfa0] uppercase tracking-tighter border border-white/5">Energy: Solar</span>
</div>
</div>

<div className="deep-glass rounded-2xl p-5 border border-white/10 group hover:bg-white/10 transition-all duration-500">
<div className="flex justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-[#adcfae]/20 flex items-center justify-center border border-[#adcfae]/30">
<span className="material-symbols-outlined text-[#adcfae] text-sm">water_drop</span>
</div>
<div>
<h4 className="text-xs font-black text-white">Grand Pool Hydro-Loop</h4>
<p className="text-[9px] text-[#adcfae] uppercase tracking-widest font-black">14:15:20 — Maintenance</p>
</div>
</div>
</div>
<div className="h-32 rounded-xl overflow-hidden mb-3 border border-white/10">
<img className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all" data-alt="crystalline clear infinity pool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOO6UeW5w3ODOZGnwprNGCTC_35rgNzqZAT1jrrf1JOj9zBxE9xrtxItG84F3wTtAK66KovpvZetbGfXHsG8sNbCb-_PAWWMfuZ7u4cLmfihuJ8kGq76wfmfKe3tOiP_R48NIjZcnDwkhLLkNfpuISslusOuEgVbwXscTpGF9nv_kxv5Slby1IwnraQTFXbVNCetrJm6-gsEhDLQvGwazAThuVim8L31Oj-ROJO7cs2I0GEBPY-SIjixa_UvD1EhialtcKIp6EqSRq"/>
</div>
<p className="text-[11px] text-white/80 leading-relaxed font-bold">Filtration cycle #04 complete. pH and salinity levels within optimal luxury range.</p>
</div>
</div>

<div className="mt-auto py-6 border-t border-white/10 flex flex-col gap-4">
<div className="flex justify-between">
<div>
<p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Active Staff</p>
<p className="text-lg font-black text-[#adcfae]">42 Units</p>
</div>
<div className="text-right">
<p className="text-[10px] text-white/60 font-black uppercase tracking-widest">Guest Count</p>
<p className="text-lg font-black text-[#ffdfa0]">118 Pax</p>
</div>
</div>
<button className="liquid-glass w-full py-4 rounded-full text-xs font-black text-white uppercase tracking-[0.2em] bg-white/10 border border-white/20 hover:bg-white/20 transition-all shadow-xl">
                        Generate Daily Audit
                    </button>
</div>
</div>
</section>
</main>
<footer className="fixed bottom-0 left-72 right-0 pointer-events-none">
<div className="max-w-7xl mx-auto px-12 py-8 flex flex-col md:flex-row justify-between items-center w-full">
<p className="font-['Manrope'] font-bold text-[10px] tracking-widest uppercase text-white/60 pointer-events-auto text-shadow-strong">
                © 2024 Solar Pavilion Architectural Serenity. All rights reserved.
            </p>
<div className="flex gap-8 pointer-events-auto">
<Link className="font-['Manrope'] font-bold text-[10px] tracking-widest uppercase text-white/60 hover:text-[#ffb59b] transition-colors text-shadow-strong" href="#">Privacy Protocol</Link>
<Link className="font-['Manrope'] font-bold text-[10px] tracking-widest uppercase text-white/60 hover:text-[#ffb59b] transition-colors text-shadow-strong" href="#">Security Compliance</Link>
<Link className="font-['Manrope'] font-bold text-[10px] tracking-widest uppercase text-white/60 hover:text-[#ffb59b] transition-colors text-shadow-strong" href="#">Terms of Service</Link>
</div>
</div>
</footer>

    </div>
  );
}
