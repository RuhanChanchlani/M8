import React from 'react';
import { cn } from '../../utils/cn';

// Main Card Wrapper
export const Card = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn(
        "glass-panel overflow-hidden relative", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// Card Header
export const CardHeader = ({ children, className }) => {
  return (
    <div className={cn("p-6 pb-4", className)}>
      {children}
    </div>
  );
};

// Card Title
export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn("text-xl font-serif text-brand-dark dark:text-brand-stone", className)}>
      {children}
    </h3>
  );
};

// Card Description
export const CardDescription = ({ children, className }) => {
  return (
    <p className={cn("text-sm text-brand-dark/70 dark:text-brand-stone/60 mt-1", className)}>
      {children}
    </p>
  );
};

// Card Content
export const CardContent = ({ children, className }) => {
  return (
    <div className={cn("p-6 pt-0", className)}>
      {children}
    </div>
  );
};

// Card Footer
export const CardFooter = ({ children, className }) => {
  return (
    <div className={cn("p-6 pt-0 flex items-center", className)}>
      {children}
    </div>
  );
};
