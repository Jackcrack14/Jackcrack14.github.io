import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
}

export function GradientCard({ children }: GradientCardProps) {
  return (
    <div className="relative group">
      <div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 
                    group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
      />
      <div className="relative bg-gray-800 rounded-lg p-6">{children}</div>
    </div>
  );
}
