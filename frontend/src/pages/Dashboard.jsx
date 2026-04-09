import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, LayoutDashboard, History, Clock, AlertTriangle, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

const INITIAL_INCIDENTS = [
  { id: 'INC-001', room: '304', type: 'fire', severity: 'critical', desc: 'Smoke coming from bathroom', status: 'reported', time: '2m ago' },
  { id: 'INC-002', room: '112', type: 'medical', severity: 'high', desc: 'Guest feeling dizzy', status: 'assigned', assignee: 'Staff_A', time: '15m ago' },
  { id: 'INC-003', room: '405', type: 'maintenance', severity: 'low', desc: 'AC not cooling', status: 'assigned', assignee: 'Tech_M', time: '1h ago' }
];

const Dashboard = () => {
  const [incidents, setIncidents] = useState(INITIAL_INCIDENTS);
  
  return (
    <div className="min-h-screen bg-brand-stone dark:bg-brand-zinc flex flex-col md:flex-row transition-colors duration-500">
      
      {/* Sidebar Desktop */}
      <aside className="w-64 glass-panel border-y-0 border-l-0 rounded-none hidden md:block z-10 sticky top-0 h-screen">
        <div className="p-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 mb-8 text-brand-dark dark:text-brand-stone"
          >
            <Activity className="w-8 h-8 text-brand-olive dark:text-brand-terracotta" />
            <h1 className="font-serif text-xl">Command Center</h1>
          </motion.div>
          
          <nav className="space-y-2">
            <NavLink to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-brand-stone dark:bg-brand-dark/80 shadow-sm text-brand-dark dark:text-brand-stone font-medium border border-brand-dark/5 dark:border-brand-stone/10 transition-colors">
              <LayoutDashboard className="w-5 h-5 text-brand-olive dark:text-brand-terracotta" />
              Live Incidents
            </NavLink>
            <NavLink to="/audit" className="flex items-center gap-3 p-3 rounded-lg text-brand-dark/70 dark:text-brand-stone/60 hover:bg-brand-stone/50 dark:hover:bg-brand-stone/5 transition-colors">
              <History className="w-5 h-5" />
              Audit Log
            </NavLink>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Glow effect for high-tech feel */}
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-brand-terracotta/5 dark:bg-brand-terracotta/5 rounded-full blur-[100px] pointer-events-none" />

        <Header showLogout={true} />
        
        <main className="flex-1 overflow-y-auto p-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-between items-center mb-6"
          >
            <h2 className="text-2xl font-serif text-brand-dark dark:text-brand-stone">Active Dashboard</h2>
            <div className="flex gap-2">
              <Button size="sm" variant="danger" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                Mass Evacuate Floor
              </Button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-10rem)]">
            
            {/* Feed Column */}
            <div className="lg:col-span-1 space-y-4 overflow-y-auto no-scrollbar pb-10">
              <h3 className="font-medium text-brand-dark/60 dark:text-brand-stone/60 flex justify-between items-center px-1">
                Incoming Alerts
                <Badge variant="critical">1 Critical</Badge>
              </h3>
              
              <AnimatePresence>
                {incidents.map((inc, index) => (
                  <motion.div
                    key={inc.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="cursor-pointer hover:border-brand-olive/40 dark:hover:border-brand-terracotta/40 transition-colors group">
                      <div className="p-4 flex gap-4">
                        <div className="w-12 h-12 shrink-0 rounded-xl bg-brand-stone dark:bg-brand-zinc flex items-center justify-center font-serif text-lg text-brand-dark dark:text-brand-stone border border-brand-stone dark:border-brand-stone/10 group-hover:scale-105 transition-transform">
                          {inc.room}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <Badge variant={inc.severity}>{inc.type.toUpperCase()}</Badge>
                            <span className="text-xs text-brand-dark/50 dark:text-brand-stone/40">{inc.time}</span>
                          </div>
                          <p className="text-sm font-medium text-brand-dark dark:text-brand-stone tracking-wide">{inc.desc}</p>
                          
                          <div className="mt-3 flex gap-2">
                            {inc.status === 'reported' ? (
                              <Button size="sm" className="w-full bg-brand-olive dark:bg-brand-terracotta hover:bg-brand-olive/90 h-8 text-xs">Assign Unit</Button>
                            ) : (
                              <div className="flex items-center gap-2 text-xs text-brand-olive dark:text-brand-terracotta font-medium bg-brand-olive/10 dark:bg-brand-terracotta/10 px-2 py-1 rounded-md w-full border border-brand-olive/20 dark:border-brand-terracotta/20">
                                <Clock className="w-3 h-3" /> En Route: {inc.assignee}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Main Detailed/Map Column */}
            <div className="lg:col-span-2 space-y-6 flex flex-col">
              
              {/* Map Placeholder */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex-1 flex flex-col"
              >
                <Card className="flex-1 flex flex-col overflow-hidden bg-brand-dark/5 dark:bg-brand-dark/40 border-dashed border-2 border-brand-dark/10 dark:border-brand-stone/10 shadow-none items-center justify-center relative group min-h-[300px]">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 dark:opacity-5"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-stone dark:from-brand-zinc to-transparent pointer-events-none opacity-50" />
                  
                  <div className="text-center z-10">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Activity className="w-16 h-16 text-brand-dark/20 dark:text-brand-stone/20 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-brand-dark/50 dark:text-brand-stone/50 font-medium">Live Floor Map Visualization</p>
                    <p className="text-sm text-brand-dark/40 dark:text-brand-stone/30 tracking-wide">Connect Google Maps API here</p>
                  </div>
                </Card>
              </motion.div>

              {/* Simulation Panel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card className="dark:bg-[#1a1a1c]">
                  <CardHeader>
                    <CardTitle className="text-lg">Sensor Simulation Panel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <select className="flex-1 h-10 px-3 rounded-lg border border-brand-dark/20 dark:border-brand-stone/10 outline-none focus:border-brand-olive dark:focus:border-brand-terracotta bg-brand-stone/30 dark:bg-brand-dark/40 dark:text-brand-stone transition-colors cursor-pointer">
                        <option>Smoke Detector - 3rd Floor</option>
                        <option>Heat Sensor - Kitchen</option>
                        <option>Panic Button - Pool Area</option>
                      </select>
                      <Button variant="outline" className="gap-2">
                        <Play className="w-4 h-4" />
                        Trigger
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
