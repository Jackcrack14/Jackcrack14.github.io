import React from 'react';

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
}

export default function GradientButton({ href, children, variant = 'solid' }: GradientButtonProps) {
  const baseClasses = "px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300";
  
  const variants = {
    solid: "bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700",
    outline: "bg-transparent border-2 border-purple-500 text-white hover:bg-purple-500/10"
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}