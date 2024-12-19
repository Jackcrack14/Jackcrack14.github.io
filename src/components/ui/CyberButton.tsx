import React from 'react';
import { motion } from 'framer-motion';

interface CyberButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function CyberButton({ href, children, variant = 'primary' }: CyberButtonProps) {
  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-400 text-gray-900',
    secondary: 'bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
  };

  return (
    <motion.a
      href={href}
      className={`
        relative group px-8 py-3 rounded-sm overflow-hidden
        ${variants[variant]}
        transition-colors duration-300
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glitch effect */}
      <div className="absolute inset-0 group-hover:animate-glitch opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-cyan-400 translate-x-1 translate-y-1" />
        <div className="absolute inset-0 bg-pink-500 -translate-x-1 -translate-y-1" />
      </div>

      {/* Content */}
      <span className="relative flex items-center justify-center">
        {children}
      </span>

      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-cyan-400" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-cyan-400" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-cyan-400" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-cyan-400" />
    </motion.a>
  );
}