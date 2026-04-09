import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Notice these paths point to the ACTUAL React component files we generated together,
// not the blank dummy comment files.
import Home from './pages/Home';
import GuestLogin from './pages/GuestLogin';
import StaffLogin from './pages/StaffLogin';
import GuestSOS from './pages/GuestSOS';
import Dashboard from './pages/Dashboard';
import ResponderView from './pages/ResponderView';
import AuditLog from './pages/AuditLog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      
      {/* Guest Routes */}
      <Route path="/guest/login" element={<GuestLogin />} />
      <Route path="/guest/sos" element={<GuestSOS />} />
      
      {/* Staff Routes */}
      <Route path="/staff/login" element={<StaffLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/responder" element={<ResponderView />} />
      <Route path="/audit" element={<AuditLog />} />
      
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
