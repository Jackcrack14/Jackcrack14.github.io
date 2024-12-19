import { motion } from "framer-motion";

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Horizontal lines */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="h-px bg-cyan-500/30"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>

      {/* Vertical lines */}
      <div className="absolute inset-0 flex justify-between opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="w-px h-full bg-cyan-500/30"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}
      </div>
    </div>
  );
}
