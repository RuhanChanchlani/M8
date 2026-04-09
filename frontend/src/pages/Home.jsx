import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Hotel, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from '../components/ui/ThemeToggle';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-terracotta/10 dark:bg-brand-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-olive/10 dark:bg-brand-olive/5 rounded-full blur-3xl pointer-events-none" />

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

        {/* Portals */}
        <div className="space-y-4">
          <Link to="/guest/login" className="block outline-none">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-6 hover:bg-brand-stone/40 dark:hover:bg-brand-zinc/80 transition-colors duration-300 group cursor-pointer flex items-center gap-6"
            >
              <div className="p-4 bg-brand-terracotta/10 dark:bg-brand-terracotta/20 rounded-xl group-hover:bg-brand-terracotta/20 transition-colors">
                <Hotel className="w-8 h-8 text-brand-terracotta" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-dark dark:text-brand-stone mb-1">Guest Portal</h3>
                <p className="text-brand-dark/60 dark:text-brand-stone/60 text-sm">Access SOS controls via room pin</p>
              </div>
            </motion.div>
          </Link>

          <Link to="/staff/login" className="block outline-none">
            <motion.div 
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
              className="glass-panel p-6 hover:bg-brand-stone/40 dark:hover:bg-brand-zinc/80 transition-colors duration-300 group cursor-pointer flex items-center gap-6"
            >
              <div className="p-4 bg-brand-olive/10 dark:bg-brand-olive/20 rounded-xl group-hover:bg-brand-olive/20 transition-colors">
                <Users className="w-8 h-8 text-brand-olive" />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-dark dark:text-brand-stone mb-1">Staff Access</h3>
                <p className="text-brand-dark/60 dark:text-brand-stone/60 text-sm">Manager and Responder login</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
