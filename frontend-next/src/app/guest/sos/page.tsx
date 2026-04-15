import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="text-on-surface min-h-screen flex flex-col bg-background">
      

<div className="fixed inset-0 bg-main-image -z-20"></div>
<div className="fixed inset-0 bg-white/20 backdrop-blur-[2px] -z-10"></div>

<header className="fixed top-0 w-full z-50">
<div className="flex justify-between items-center px-6 py-4 w-full bg-white/30 backdrop-blur-xl border-b border-white/20">
<div className="active:scale-95 duration-200 transition-opacity hover:opacity-80">
<span className="material-symbols-outlined text-emerald-600">security</span>
</div>
<h1 className="font-manrope tracking-[0.2em] uppercase text-lg font-bold text-on-surface">LUMINA LUXE</h1>
<div className="w-8 h-8 rounded-full bg-white/40 flex items-center justify-center overflow-hidden border border-white/40 active:scale-95 duration-200">
<img alt="Guest Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXnKFK7HFDVlgNnXRdAjARcZV52ReShcIkw1VD0X103AE2IYWswMHDCBBsCdKh2tkjFv0cYQcyLsrarq2Sz8gSv4SOOwApjOIRz3jvLfFSM1djPNZjyxMv8lVuyMaxiDT8489vOtdlyjZ9oFKQ5aYy8I2j0uKdqfcxVPabRxAt3r3MLktNQGKR8uPAsj3uJYTM0wTgc-48Mdhrr-acfICdpBKYANlUEVcBJuqFkiKbxqaNXiYKCuaErzSae8T_ruo0ugXtNaRMbGlp"/>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-6 min-h-screen flex flex-col items-center relative">

<div className="mb-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass text-on-secondary-container text-xs font-semibold tracking-wider uppercase">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Secure Environment
            </div>
<p className="mt-4 text-on-surface-variant font-medium text-sm max-w-xs mx-auto drop-shadow-sm">
                Assistance is always within reach. Press and hold the trigger for immediate response.
            </p>
</div>

<div className="relative w-72 h-72 mb-12 flex items-center justify-center">

<div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping"></div>
<div className="absolute inset-4 rounded-full bg-emerald-400/10"></div>

<div className="relative z-10 w-64 h-64 rounded-full p-1 bg-gradient-to-br from-white/60 to-transparent active:scale-95 transition-transform duration-500 cursor-pointer group">
<div className="w-full h-full rounded-full liquid-glass-emerald flex flex-col items-center justify-center safety-glow-emerald overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 opacity-70 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
<span className="material-symbols-outlined text-7xl text-white mb-2 relative z-10 drop-shadow-lg" style={{fontVariationSettings: "'FILL' 1"}}>emergency</span>
<span className="text-4xl font-extrabold tracking-tighter text-white relative z-10 drop-shadow-lg">SOS</span>
<span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/90 mt-1 relative z-10">Trigger Alarm</span>
</div>
</div>
</div>

<div className="w-full grid grid-cols-3 gap-4 mb-8">

<div className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>medical_services</span>
</div>
<span className="text-xs font-bold text-on-surface tracking-tight">Medical</span>
</div>

<div className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-emerald-600" style={{fontVariationSettings: "'FILL' 1"}}>policy</span>
</div>
<span className="text-xs font-bold text-on-surface tracking-tight">Security</span>
</div>

<div className="flex flex-col items-center p-4 rounded-3xl liquid-glass active:scale-95 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-2xl bg-white/40 flex items-center justify-center mb-3">
<span className="material-symbols-outlined text-tertiary" style={{fontVariationSettings: "'FILL' 1"}}>support_agent</span>
</div>
<span className="text-xs font-bold text-on-surface tracking-tight">Staff</span>
</div>
</div>

<div className="w-full rounded-[2.5rem] overflow-hidden liquid-glass p-6 flex items-center gap-4 border border-white/40">
<div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 border border-white/30">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUqUkDdrXV1j4sd6WBbmE72ZqkAnyL5Hwrgw_F-xlbElQ5m83CKNbKCJ4FNMWxs5Fj-KsftR5WI9bYsI5mzxoC58oDUD6i1Ff3tKNQC08rUc_4cKuPFT0N-rI3U5kBQYIiJPeMnSKF-46DBa0Bx9TeWKhfQ64BOx_VQVELaNYmLsQJ5c05P3gQtt_PtNwwlN8u-EjxjjpctkiqpKKrbbTl-o_HClcq-EOZVDtjNCZtBEKghHPpWAd98-Q8PBYoI3JIvCMkxPnWzfsw"/>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Your Location</span>
<span className="text-sm font-semibold text-on-surface">North Pavilion, Suite 402</span>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-[14px] text-emerald-600">location_on</span>
<span className="text-[11px] text-on-surface-variant font-medium">GPS Signal Strong</span>
</div>
</div>
<div className="ml-auto">
<div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-on-surface-variant text-sm">map</span>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full z-50">
<div className="flex justify-around items-center pt-4 pb-8 px-10 w-full bg-white/40 backdrop-blur-2xl border-t border-white/20 rounded-t-[2.5rem]">

<div className="flex flex-col items-center justify-center text-emerald-600 relative after:content-[''] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-emerald-600 after:rounded-full active:scale-90 duration-300 transition-colors">
<span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>shield_with_heart</span>
<span className="font-manrope text-[10px] font-bold tracking-tight">Safety</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant opacity-80 hover:text-emerald-600 transition-colors active:scale-90 duration-300">
<span className="material-symbols-outlined mb-1">room_service</span>
<span className="font-manrope text-[10px] font-medium tracking-tight">Concierge</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant opacity-80 hover:text-emerald-600 transition-colors active:scale-90 duration-300">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-manrope text-[10px] font-medium tracking-tight">Profile</span>
</div>
</div>
</nav>

    </div>
  );
}
