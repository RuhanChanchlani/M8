import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';

const Header = ({ showLogout = false, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      navigate('/');
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel rounded-none border-t-0 border-x-0 border-b border-brand-dark/5 dark:border-brand-sand/5">
      <div className="max-w-7xl mx-auto px-4 h-16">
        <div className="flex justify-between items-center h-full">
          <Link to="/" className="flex items-center gap-2 group outline-none">
            <div className="p-2 bg-brand-terracotta/10 rounded-lg group-hover:bg-brand-terracotta/20 transition-colors">
              <Shield className="w-5 h-5 text-brand-terracotta" />
            </div>
            <span className="font-serif text-xl text-brand-dark dark:text-brand-stone tracking-wide">RapidResponse</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {showLogout && (
              <Button variant="ghost" size="sm" onClick={handleLogout} className="dark:text-brand-stone dark:hover:bg-brand-sand/10">
                Sign Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
