import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, variant = 'default', className = '' }) => {
  const variants = {
    default: "bg-brand-dark/10 text-brand-dark dark:bg-white/10 dark:text-white/90",
    critical: "bg-red-100 text-red-800 border-red-200 dark:bg-red-500/20 dark:text-red-300 dark:border-red-500/30 dark:shadow-[0_0_10px_rgba(239,68,68,0.2)]",
    high: "bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
    low: "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300",
    outline: "border border-brand-dark/20 text-brand-dark dark:border-white/20 dark:text-white/80"
  };

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border border-transparent transition-colors",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;
