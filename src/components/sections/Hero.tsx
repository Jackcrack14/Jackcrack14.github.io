import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CyberButton from "../ui/CyberButton";
import HolographicText from "../ui/HolographicText";
import NeonGlow from "../ui/NeonGlow";
import Scene3D from "../3d/Scene3D";
import FallbackBackground from "../ui/FallbackBackground";
import GridOverlay from "../effects/GridOverlay";
import RadarScan from "../effects/RadarScan";
import HexagonBackground from "../ui/HexagonBackground";
import CyberFrame from "../ui/CyberFrame";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <Suspense fallback={<FallbackBackground />}>
          <Scene3D />
        </Suspense>
        <GridOverlay />
        <RadarScan />
        <HexagonBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <CyberFrame>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <NeonGlow className="inline-block mb-6">
              <span className="text-sm uppercase tracking-[0.2em] text-cyan-400">
                Welcome
              </span>
            </NeonGlow>

            <HolographicText className="text-5xl sm:text-7xl font-bold mb-6">
              Curious Engineer
            </HolographicText>

            <motion.p
              className="text-xl sm:text-2xl text-cyan-200 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              From APIs to UI, I communicate fluently with every part of the
              stack—making sure everything plays nice together.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <CyberButton href="#projects" variant="primary">
                Explore Projects <ArrowRight className="w-5 h-5 ml-2" />
              </CyberButton>
            </div>
          </motion.div>
        </CyberFrame>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full p-1">
            <motion.div
              className="w-2 h-2 bg-cyan-400 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
