import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 premium-focus focus:ring-offset-1 focus:ring-offset-brand-stone dark:focus:ring-offset-brand-zinc disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-brand-terracotta hover:bg-brand-terracotta/90 text-brand-sand shadow-sm shadow-brand-terracotta/20 dark:shadow-brand-terracotta/10",
    secondary: "bg-brand-dark/10 hover:bg-brand-dark/20 text-brand-dark dark:bg-brand-sand/10 dark:hover:bg-brand-sand/20 dark:text-brand-stone",
    outline: "border border-brand-dark/20 hover:bg-brand-dark/5 text-brand-dark dark:border-brand-stone/20 dark:text-brand-stone dark:hover:bg-brand-stone/10",
    ghost: "hover:bg-brand-dark/5 text-brand-dark dark:text-brand-stone dark:hover:bg-brand-stone/10",
    danger: "bg-red-800/90 hover:bg-red-800 text-brand-sand shadow-sm shadow-red-900/20"
  };
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg font-semibold",
    icon: "h-10 w-10"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
