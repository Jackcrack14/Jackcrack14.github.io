import React from 'react';
import { motion } from 'framer-motion';

interface NeonGlowProps {
  children: React.ReactNode;
  className?: string;
}

export default function NeonGlow({ children, className = '' }: NeonGlowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      {/* Glow layers */}
      <div className="absolute inset-0 blur-lg bg-cyan-500 opacity-50" />
      <div className="absolute inset-0 blur-md bg-cyan-400 opacity-75" />
      
      {/* Main content */}
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}