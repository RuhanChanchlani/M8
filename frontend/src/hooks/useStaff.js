import { useState, useEffect } from 'react';

// For MVP, we use hardcoded staff or fetch from a static endpoint
export const useStaff = () => {
  const [staff, setStaff] = useState([
    { id: 'staff1', name: 'John Doe', role: 'security', floor: 1, available: true },
    { id: 'staff2', name: 'Jane Smith', role: 'medical', floor: 2, available: true },
    { id: 'staff3', name: 'Bob Wilson', role: 'housekeeping', floor: 3, available: true },
  ]);
  const [loading, setLoading] = useState(false);

  const availableStaff = staff.filter(s => s.available);

  return { staff, availableStaff, loading };
};
