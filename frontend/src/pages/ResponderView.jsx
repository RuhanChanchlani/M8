import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, Navigation, MapPin } from 'lucide-react';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import { useIncidents } from '../hooks/useIncidents';
import { useAuth } from '../context/AuthContext';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

const ResponderView = () => {
  const { incidents, refresh } = useIncidents();
  const { staffProfile } = useAuth();
  const [status, setStatus] = useState('assigned'); // assigned, enroute, checking, resolved
  
  // Find the incident assigned to this staff
  const assignedIncident = incidents.find(inc => inc.assigned_to === staffProfile?.id && inc.status !== 'resolved');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  const handleResolve = async () => {
    if (!assignedIncident) return;
    try {
      const response = await fetch(`${BACKEND_URL}/incidents/${assignedIncident.id}/resolve`, {
        method: 'PATCH'
      });
      if (response.ok) {
        setStatus('resolved');
        refresh();
      }
    } catch (error) {
      console.error('Failed to resolve incident:', error);
    }
  };

  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc transition-colors duration-500">
      <Header showLogout={true} />
      
      <main className="max-w-md mx-auto p-4 pt-6 space-y-6">
        
        {!assignedIncident && status !== 'resolved' ? (
          <div className="text-center py-20">
            <CheckCircle className="w-16 h-16 text-brand-olive/20 mx-auto mb-4" />
            <h3 className="text-xl font-serif text-brand-dark/40 dark:text-brand-stone/40">No Active Tasks</h3>
            <p className="text-brand-dark/30 dark:text-brand-stone/30 mt-2">You're all clear for now.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-serif text-brand-dark dark:text-brand-stone">Active Task</h2>
                <p className="text-brand-dark/60 dark:text-brand-stone/60 text-sm mt-1">Assigned {assignedIncident ? new Date(assignedIncident.created_at).toLocaleTimeString() : ''}</p>
              </div>
              <Badge variant={assignedIncident?.severity || 'low'} className="text-sm px-3 py-1">{assignedIncident?.severity?.toUpperCase()} Priority</Badge>
            </div>

            <Card className="border-red-600/30 shadow-lg shadow-red-900/5">
                <div className="p-5 border-b border-brand-dark/5 dark:border-brand-stone/10 dark:bg-red-950/20 bg-red-50/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-brand-dark dark:text-brand-stone">Incident {assignedIncident?.id?.slice(0, 8)}</span>
                  <span className="text-red-700 font-bold bg-brand-stone dark:bg-red-500/20 px-3 py-1 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(239,68,68,0.2)]">{assignedIncident?.type?.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-brand-stone dark:bg-brand-zinc border border-red-200 dark:border-red-500/30 flex flex-col items-center justify-center shadow-sm">
                    <span className="text-xs text-brand-dark/50 dark:text-brand-stone/50 font-medium">ROOM</span>
                    <span className="text-xl font-serif text-brand-dark dark:text-brand-stone">{assignedIncident?.room}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-brand-dark dark:text-brand-stone font-medium leading-tight">{assignedIncident?.description}</p>
                    <p className="text-sm text-brand-dark/60 dark:text-brand-stone/60 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {assignedIncident?.floor}th Floor
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-brand-dark text-brand-stone space-y-3">
                <h4 className="text-sm font-semibold flex items-center gap-2 text-brand-sand">
                  <ShieldAlert className="w-4 h-4" /> AI Directives
                </h4>
                <ul className="text-sm space-y-2 text-brand-stone/90">
                  <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Verify situation immediately.</li>
                  <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Prioritize guest safety.</li>
                  <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Report any complications.</li>
                </ul>
              </div>
            </Card>

            <div className="space-y-3">
              <h3 className="font-serif text-lg text-brand-dark dark:text-brand-stone">Update Status</h3>
              
              {status === 'assigned' && (
                <Button fullWidth size="lg" className="bg-brand-olive text-brand-stone hover:bg-brand-olive/90 gap-2" onClick={() => handleStatusChange('enroute')}>
                  <Navigation className="w-5 h-5" /> Accept & En Route
                </Button>
              )}

              {status === 'enroute' && (
                <Button fullWidth size="lg" className="bg-orange-500 text-brand-stone hover:bg-orange-600 gap-2" onClick={() => handleStatusChange('checking')}>
                  <MapPin className="w-5 h-5" /> Arrived On Scene
                </Button>
              )}

              {status === 'checking' && (
                <div className="space-y-3">
                   <Button fullWidth size="lg" variant="danger" className="gap-2">
                    <ShieldAlert className="w-5 h-5" /> Request Backup
                  </Button>
                  <Button fullWidth size="lg" className="bg-brand-dark text-brand-stone hover:bg-brand-dark/90 gap-2" onClick={handleResolve}>
                    <CheckCircle className="w-5 h-5" /> Mark Resolved
                  </Button>
                </div>
              )}

              {status === 'resolved' && (
                <div className="p-4 bg-green-100 text-green-800 rounded-xl flex items-center justify-center gap-2 font-medium">
                  <CheckCircle className="w-5 h-5" /> Task Completed
                </div>
              )}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ResponderView;
