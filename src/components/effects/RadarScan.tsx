import { motion } from "framer-motion";

export default function RadarScan() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent 
                      transform -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </div>
  );
}
