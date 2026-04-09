import React from 'react';
import { NavLink } from 'react-router-dom';
import { Activity, LayoutDashboard, History, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import Header from '../components/layout/Header';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';

// Mock data
const mockIncidents = [
  { id: 'INC-201', type: 'fire', severity: 'critical', resolution: '4m 12s', date: 'Oct 12' },
  { id: 'INC-202', type: 'medical', severity: 'high', resolution: '6m 45s', date: 'Oct 11' },
  { id: 'INC-203', type: 'security', severity: 'medium', resolution: '12m 30s', date: 'Oct 10' },
  { id: 'INC-204', type: 'maintenance', severity: 'low', resolution: '1h 45m', date: 'Oct 10' }
];

const timeData = [
  { name: 'Mon', incidents: 4 },
  { name: 'Tue', incidents: 3 },
  { name: 'Wed', incidents: 7 },
  { name: 'Thu', incidents: 2 },
  { name: 'Fri', incidents: 5 },
  { name: 'Sat', incidents: 8 },
  { name: 'Sun', incidents: 6 },
];

const typeData = [
  { name: 'Fire', count: 2 },
  { name: 'Medical', count: 8 },
  { name: 'Security', count: 5 },
  { name: 'Maintenance', count: 20 },
];

const AuditLog = () => {
  return (
    <div className="min-h-screen bg-brand-stone flex flex-col md:flex-row">
      
      {/* Sidebar Desktop */}
      <aside className="w-64 glass-panel border-y-0 border-l-0 rounded-none hidden md:block z-10">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8 text-brand-dark">
            <Activity className="w-8 h-8 text-brand-olive" />
            <h1 className="font-serif text-xl">Command Center</h1>
          </div>
          
          <nav className="space-y-2">
            <NavLink to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg text-brand-dark/70 hover:bg-white/50 transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              Live Incidents
            </NavLink>
            <NavLink to="/audit" className="flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm text-brand-dark font-medium border border-brand-dark/5">
              <History className="w-5 h-5 text-brand-olive" />
              Audit Log
            </NavLink>
          </nav>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header showLogout={true} />
        
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-serif text-brand-dark">Analytics & Audit Log</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-white">
              <Download className="w-4 h-4" /> Export CSV
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-brand-dark/70">Incidents This Week</CardTitle>
                <h3 className="text-3xl font-serif text-brand-dark">35</h3>
              </CardHeader>
              <CardContent className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={timeData}>
                    <defs>
                      <linearGradient id="colorIncidents" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4b5320" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4b5320" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e6dfd3" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#2c2c2c', opacity: 0.5}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#2c2c2c', opacity: 0.5}} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="incidents" stroke="#4b5320" strokeWidth={3} fillOpacity={1} fill="url(#colorIncidents)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-brand-dark/70">Incidents by Type</CardTitle>
              </CardHeader>
              <CardContent className="h-64 pt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={typeData} layout="vertical" margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e6dfd3" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#2c2c2c', opacity: 0.5}} />
                    <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#2c2c2c'}} />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="count" fill="#c97a5e" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Historical Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-brand-dark/60 uppercase border-b border-brand-dark/10">
                    <tr>
                      <th className="px-4 py-3 font-medium">ID</th>
                      <th className="px-4 py-3 font-medium">Date</th>
                      <th className="px-4 py-3 font-medium">Type</th>
                      <th className="px-4 py-3 font-medium">Severity</th>
                      <th className="px-4 py-3 font-medium">Resolution Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockIncidents.map((row, i) => (
                      <tr key={i} className="border-b border-brand-dark/5 hover:bg-brand-dark/5 transition-colors">
                        <td className="px-4 py-3 font-medium text-brand-dark">{row.id}</td>
                        <td className="px-4 py-3 text-brand-dark/70">{row.date}</td>
                        <td className="px-4 py-3 capitalize">{row.type}</td>
                        <td className="px-4 py-3">
                          <Badge variant={row.severity}>{row.severity}</Badge>
                        </td>
                        <td className="px-4 py-3 text-brand-dark/70">{row.resolution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AuditLog;
