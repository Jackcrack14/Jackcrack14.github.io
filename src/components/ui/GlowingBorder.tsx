import React from 'react';
import { motion } from 'framer-motion';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowingBorder({ children, className = '' }: GlowingBorderProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 
                    group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />
      <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-lg">
        {children}
      </div>
    </motion.div>
  );
}