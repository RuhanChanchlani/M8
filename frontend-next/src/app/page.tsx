import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-on-surface min-h-screen flex flex-col bg-background">
      
<nav className="fixed top-0 w-full z-50 heavy-glass flex justify-between items-center px-12 py-5 shadow-lg border-b border-white/30">
<div className="text-2xl font-extrabold tracking-tighter text-[#91472a]">Solar Pavilion Response</div>
<div className="hidden md:flex items-center gap-10 font-['Manrope'] font-medium tracking-tight">
<Link className="text-[#91472a] font-bold border-b-2 border-[#91472a] pb-1" href="#">Dashboard</Link>
<Link className="text-[#765700] hover:text-[#91472a] transition-colors" href="#">Incidents</Link>
<Link className="text-[#765700] hover:text-[#91472a] transition-colors" href="#">Resources</Link>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-[#765700] hover:scale-110 transition-transform" data-icon="notifications">notifications</button>
<button className="text-on-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-wide liquid-glass hover:brightness-110 transition-all">Emergency Alert</button>
</div>
</nav>
<main className="pt-24 space-y-12 pb-24">

<section className="relative min-h-[70vh] flex items-center px-12">
<div className="max-w-4xl heavy-glass p-16 rounded-[3rem] border border-white/50">
<span className="label-md uppercase tracking-[0.2em] text-tertiary mb-6 block font-bold">Safety in Architectural Harmony</span>
<h1 className="text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
                    Sun-Drenched <br/>
<span className="text-primary italic font-serif">Sanctuary</span>
</h1>
<p className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10 font-medium">
                    Elevating resort emergency management to a state of serenity. Real-time coordination wrapped in the warmth of luxury hospitality.
                </p>
<div className="flex items-center gap-6">
<button className="liquid-glass text-on-primary px-10 py-5 rounded-full text-lg font-bold shadow-2xl hover:brightness-110 transition-all flex items-center gap-3">
                        Launch Command
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="heavy-glass px-10 py-5 rounded-full text-lg font-bold text-primary hover:bg-white/40 transition-all border border-white/60">
                        Tour Pavilion
                    </button>
</div>
</div>
</section>

<section className="px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-7 heavy-glass rounded-[3rem] p-12 flex flex-col justify-between min-h-[450px] group hover:shadow-2xl transition-all duration-500 border border-white/50">
<div>
<div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner">
<span className="material-symbols-outlined text-white text-3xl" data-icon="emergency">emergency</span>
</div>
<h3 className="text-4xl font-bold text-on-surface mb-6">Guest SOS</h3>
<p className="text-lg text-on-surface-variant leading-relaxed font-medium max-w-md">
                                One-touch assistance for every guest. Seamlessly integrated into their personal devices with precise spatial awareness for rapid response.
                            </p>
</div>
<div className="mt-8">
<Link className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all" href="#">
                                Protocol Details <span className="material-symbols-outlined">north_east</span>
</Link>
</div>
</div>

<div className="md:col-span-5 rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white/30">
<img className="w-full h-full object-cover" data-alt="high-end tablet showing a clean modern emergency interface sitting on a warm stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBywYyDp-sFJoZSV7AMxxFnwbCZ4yiXkHephcovURmyqvoZYHHr7-BIBPodUIMfMZivNcFwjmrXSkBIvF4MI7VhmoEAOmN75rLItrj7aw-515YVG0CB9soFsFCBBwddwU2edP3SrHD6ZiAf0no_hNwXMC3PAh2USeddsg-l8Q8F6fl1H0CaBm1_XIVHL7zhUZ-DBa39PsOWJ8ODgF0v27QG28OJ3gcqQumHIeiLukVXDOOIfixt6LWakEd9wTASfgZmhRDoLpk53Dle"/>
<div className="absolute inset-0 bg-primary/10"></div>
</div>

<div className="md:col-span-4 heavy-glass rounded-[3rem] p-10 flex flex-col justify-center border-b-8 border-primary border-t-white/50 border-x-white/50">
<span className="material-symbols-outlined text-primary text-5xl mb-6" data-icon="hub" data-weight="fill">hub</span>
<h4 className="text-2xl font-bold mb-4">Responder Hub</h4>
<p className="text-on-surface-variant font-medium leading-relaxed">
                            A unified tactical interface for field staff. Real-time GPS mapping and instant biometric feedback.
                        </p>
</div>

<div className="md:col-span-8 heavy-glass rounded-[3rem] p-10 flex items-center gap-12 border border-white/50">
<div className="flex-1">
<h4 className="text-3xl font-bold mb-4">Admin Governance</h4>
<p className="text-on-surface-variant font-medium leading-relaxed mb-6">
                                Oversight of the entire ecosystem. Comprehensive analytics and compliance reporting at your fingertips.
                            </p>
<div className="flex gap-4">
<span className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Compliant</span>
<span className="px-4 py-2 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-tighter">Encryption v2</span>
</div>
</div>
<div className="hidden lg:block w-1/3 aspect-square rounded-full border-8 border-primary/20 flex items-center justify-center p-8 bg-white/10">
<span className="material-symbols-outlined text-primary text-8xl" data-icon="shield_with_heart">shield_with_heart</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-12">
<div className="max-w-7xl mx-auto heavy-glass rounded-[3rem] p-16 flex flex-col md:flex-row justify-between items-end gap-12 border border-white/50">
<div className="max-w-lg">
<h2 className="text-5xl font-extrabold tracking-tighter text-on-surface mb-6">Architected for <span className="text-primary">Peace of Mind</span></h2>
<p className="text-on-surface-variant font-medium leading-relaxed">
                        Our platform mirrors the physical security of the world's most exclusive resorts. Warm tones, intuitive flows, and ironclad stability.
                    </p>
</div>
<div className="grid grid-cols-2 gap-12 w-full md:w-auto">
<div className="text-right">
<div className="text-5xl font-bold text-primary mb-2">99.99</div>
<div className="text-xs uppercase tracking-widest text-tertiary font-bold">Uptime Reliability</div>
</div>
<div className="text-right">
<div className="text-5xl font-bold text-primary mb-2">&lt;2s</div>
<div className="text-xs uppercase tracking-widest text-tertiary font-bold">Dispatch Latency</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full py-12 heavy-glass border-t border-white/30">
<div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
<div className="font-['Manrope'] font-bold text-xs tracking-widest uppercase text-secondary mb-4 md:mb-0">
                © 2024 Solar Pavilion Architectural Serenity. All rights reserved.
            </div>
<div className="flex gap-8">
<Link className="font-['Manrope'] font-bold text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Privacy Protocol</Link>
<Link className="font-['Manrope'] font-bold text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Security Compliance</Link>
<Link className="font-['Manrope'] font-bold text-xs tracking-widest uppercase text-[#765700] hover:text-[#91472a] transition-colors" href="#">Terms of Service</Link>
</div>
</div>
</footer>

    </div>
  );
}
