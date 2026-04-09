import React, { useState } from 'react';
import { ShieldAlert, CheckCircle, Navigation, MapPin } from 'lucide-react';
import Header from '../components/layout/Header';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import Badge from '../components/ui/Badge';

const ResponderView = () => {
  const [status, setStatus] = useState('assigned'); // assigned, enroute, checking, resolved

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc transition-colors duration-500">
      <Header showLogout={true} />
      
      <main className="max-w-md mx-auto p-4 pt-6 space-y-6">
        
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-serif text-brand-dark dark:text-brand-stone">Active Task</h2>
            <p className="text-brand-dark/60 dark:text-brand-stone/60 text-sm mt-1">Assigned 2 mins ago</p>
          </div>
          <Badge variant="critical" className="text-sm px-3 py-1">Critical Priority</Badge>
        </div>

        <Card className="border-red-600/30 shadow-lg shadow-red-900/5">
            <div className="p-5 border-b border-brand-dark/5 dark:border-brand-stone/10 dark:bg-red-950/20 bg-red-50/50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-brand-dark dark:text-brand-stone">Incident INC-001</span>
              <span className="text-red-700 font-bold bg-brand-stone dark:bg-red-500/20 px-3 py-1 rounded-full shadow-sm dark:shadow-[0_0_10px_rgba(239,68,68,0.2)]">FIRE</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-brand-stone dark:bg-brand-zinc border border-red-200 dark:border-red-500/30 flex flex-col items-center justify-center shadow-sm">
                <span className="text-xs text-brand-dark/50 dark:text-brand-stone/50 font-medium">ROOM</span>
                <span className="text-xl font-serif text-brand-dark dark:text-brand-stone">304</span>
              </div>
              <div className="flex-1">
                <p className="text-brand-dark dark:text-brand-stone font-medium leading-tight">Smoke coming from bathroom</p>
                <p className="text-sm text-brand-dark/60 dark:text-brand-stone/60 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> 3rd Floor, West Wing
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-5 bg-brand-dark text-brand-stone space-y-3">
            <h4 className="text-sm font-semibold flex items-center gap-2 text-brand-sand">
              <ShieldAlert className="w-4 h-4" /> AI Directives
            </h4>
            <ul className="text-sm space-y-2 text-brand-stone/90">
              <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Verify fire existence immediately.</li>
              <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Do not open the door if it feels hot.</li>
              <li className="flex gap-2"><span className="text-brand-terracotta font-bold">•</span> Await backup before attempting rescue.</li>
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
                <ShieldAlert className="w-5 h-5" /> Request Backup / Fire Dept
              </Button>
              <Button fullWidth size="lg" className="bg-brand-dark text-brand-stone hover:bg-brand-dark/90 gap-2" onClick={() => handleStatusChange('resolved')}>
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

      </main>
    </div>
  );
};

export default ResponderView;
