import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/ui/ThemeToggle';
import Button from '../components/ui/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Resort ambient gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-brand-olive/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-teal/6 blur-[100px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[30%] rounded-full bg-brand-clay/5 blur-[80px]" />
      </div>

      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-12 z-10"
      >
        {/* Header section */}
        <div className="text-center space-y-4">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="inline-flex items-center justify-center p-4 bg-brand-stone/50 dark:bg-brand-zinc/80 rounded-full shadow-sm mb-4 border border-brand-dark/5 dark:border-brand-sand/5"
          >
            <ShieldAlert className="w-12 h-12 text-brand-terracotta" />
          </motion.div>
          <h1 className="text-4xl text-brand-dark dark:text-brand-stone">RapidResponse</h1>
          <p className="text-brand-dark/70 dark:text-brand-stone/70 text-lg">Crisis Response and Coordination Platform</p>
        </div>

        {/* Actions - Old-format buttons updated for the React UI */}
        <div className="flex flex-col gap-4 mt-8 w-full max-w-xs mx-auto">
          <Button
            type="button"
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => navigate('/guest/login')}
            className="uppercase tracking-widest font-bold"
          >
            GUEST LOGIN
          </Button>

          <Button
            type="button"
            variant="secondary"
            size="lg"
            fullWidth
            onClick={() => navigate('/staff/login')}
            className="uppercase tracking-widest font-bold"
          >
            STAFF LOGIN
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
