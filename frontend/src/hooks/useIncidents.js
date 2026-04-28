import { useState, useEffect } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export const useIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchIncidents = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/incidents/`);
      if (!response.ok) throw new Error('Failed to fetch incidents');
      const data = await response.json();
      
      // Sort by severity (critical first) and then by timestamp
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      const sortedData = data.sort((a, b) => {
        if (severityOrder[a.severity] !== severityOrder[b.severity]) {
          return severityOrder[a.severity] - severityOrder[b.severity];
        }
        return new Date(b.created_at) - new Date(a.created_at);
      });
      
      setIncidents(sortedData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIncidents();
    // Poll for updates every 5 seconds since we're not using Firebase real-time
    const interval = setInterval(fetchIncidents, 5000);
    return () => clearInterval(interval);
  }, []);

  return { incidents, loading, error, refresh: fetchIncidents };
};
