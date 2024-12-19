import React from 'react';
import { motion } from 'framer-motion';

interface CyberFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function CyberFrame({ children, className = '' }: CyberFrameProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Corner decorations */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-500" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-500" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-500" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-500" />

      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
          animate={{ y: ["0%", "400%"] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}