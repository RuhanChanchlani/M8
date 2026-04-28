import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [staffProfile, setStaffProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if there's a stored user in localStorage
    const storedUser = localStorage.getItem('rapid_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setStaffProfile(parsedUser.profile);
      } catch (e) {
        console.error("Failed to parse stored user", e);
        localStorage.removeItem('rapid_user');
      }
    }
    setLoading(false);
  }, []);

  const login = (role, roomOrId) => {
    let profile = {};
    if (role === 'guest') {
      profile = { role: 'guest', room: roomOrId };
    } else {
      profile = { 
        id: roomOrId, 
        role: role, 
        name: role.charAt(0).toUpperCase() + role.slice(1), 
        floor: 1 
      };
    }
    
    const userData = { id: roomOrId, profile };
    setUser(userData);
    setStaffProfile(profile);
    localStorage.setItem('rapid_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setStaffProfile(null);
    localStorage.removeItem('rapid_user');
  };

  const value = {
    user,
    staffProfile,
    role: staffProfile?.role,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
