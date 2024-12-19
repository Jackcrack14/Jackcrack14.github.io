import { motion } from "framer-motion";

export default function HexagonBackground() {
  const hexagons = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 30 + Math.random() * 20,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hexagons.map(({ id, x, y, size, delay }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{
            left: `${x}%`,
            top: `${y}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{
            duration: 1,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
        >
          <div
            className="border-2 border-cyan-500/30"
            style={{
              width: size,
              height: size * 0.866, // Height of a regular hexagon
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
