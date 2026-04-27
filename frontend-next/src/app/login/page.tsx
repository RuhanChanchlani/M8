"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { guestLogin, getStaff } from '@/services/api';
import { useAuth } from '@/services/authContext';

export default function LoginPage() {
  const [loginType, setLoginType] = useState<'guest' | 'staff' | null>(null);
  const [room, setRoom] = useState('101');
  const [pin, setPin] = useState('1234');
  const [staffId, setStaffId] = useState('s1');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await guestLogin(room, pin);
      login({
        id: room,
        role: 'guest',
        room: room,
        name: res.data.guest_name
      });
      router.push('/guest/sos');
    } catch (err) {
      setError('Invalid Room or PIN. Hint: use Room: 101, PIN: 1234');
    } finally {
      setLoading(false);
    }
  };

  const handleStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await getStaff();
      const staffList = res.data;
      const staff = staffList.find((s: any) => s.id === staffId);
      
      if (staff) {
        login({
          id: staff.id,
          name: staff.name,
          role: staff.role === 'manager' ? 'manager' : 'staff'
        });
        
        if (staff.role === 'manager') {
          router.push('/command');
        } else {
          router.push('/responder');
        }
      } else {
        setError('Invalid Staff ID. Hint: use s1, m1, h1, or mgr1');
      }
    } catch (err) {
      setError('Error validating staff ID.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative background effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-md w-full glass-card rounded-3xl p-8 shadow-2xl z-10">
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-5xl text-primary mb-2">hotel_class</span>
          <h1 className="text-3xl font-bold font-serif">Solar Pavilion</h1>
          <p className="text-on-surface-variant text-sm mt-2">Emergency Management System</p>
        </div>

        {!loginType ? (
          <div className="space-y-4">
            <h2 className="text-xl font-medium mb-4 text-center">Select Login Type</h2>
            <button
              onClick={() => setLoginType('guest')}
              className="w-full bg-surface/50 border border-black/10 hover:bg-primary hover:text-white transition-all p-4 rounded-xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined group-hover:text-white text-primary">person</span>
                <span className="font-bold text-lg">Guest Access</span>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <button
              onClick={() => setLoginType('staff')}
              className="w-full bg-surface/50 border border-black/10 hover:bg-secondary hover:text-white transition-all p-4 rounded-xl flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined group-hover:text-white text-secondary">badge</span>
                <span className="font-bold text-lg">Staff Access</span>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        ) : loginType === 'guest' ? (
          <form onSubmit={handleGuestSubmit} className="space-y-6 fade-in">
            <div className="flex items-center gap-2 mb-2">
              <button 
                type="button" 
                onClick={() => setLoginType(null)}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Guest Login</h2>
            </div>
            
            {error && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">{error}</div>}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-on-surface-variant">Room Number</label>
                <input
                  type="text"
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="w-full bg-surface/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. 101"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-on-surface-variant">PIN</label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  className="w-full bg-surface/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. 1234"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white rounded-xl py-3 font-bold hover:brightness-110 transition-all disabled:opacity-50 uppercase tracking-widest text-sm"
            >
              {loading ? 'Authenticating...' : 'Login as Guest'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleStaffSubmit} className="space-y-6 fade-in">
            <div className="flex items-center gap-2 mb-2">
              <button 
                type="button" 
                onClick={() => setLoginType(null)}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
              </button>
              <h2 className="text-xl font-bold">Staff Login</h2>
            </div>

            {error && <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">{error}</div>}

            <div>
              <label className="block text-sm font-medium mb-1 text-on-surface-variant">Staff ID</label>
              <input
                type="text"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
                className="w-full bg-surface/50 border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                placeholder="e.g. s1, m1, h1, mgr1"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-secondary text-white rounded-xl py-3 font-bold hover:brightness-110 transition-all disabled:opacity-50 uppercase tracking-widest text-sm"
            >
              {loading ? 'Authenticating...' : 'Login as Staff'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
