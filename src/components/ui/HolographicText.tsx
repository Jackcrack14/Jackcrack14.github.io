import React from 'react';
import { motion } from 'framer-motion';

interface HolographicTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HolographicText({ children, className = '' }: HolographicTextProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main text */}
      <h1 className="relative z-10 bg-gradient-to-b from-cyan-300 via-cyan-500 to-cyan-700 
                     text-transparent bg-clip-text">
        {children}
      </h1>

      {/* Holographic effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-hologram-flicker">
          {children}
        </div>
        <div className="absolute inset-0 animate-hologram-scan">
          {children}
        </div>
      </div>
    </motion.div>
  );
}