import { motion, AnimatePresence } from "framer-motion";
import { Terminal } from "lucide-react";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const loadingTexts = [
    "Initializing neural interface...",
    "Establishing quantum connection...",
    "Calibrating holographic display...",
    "Loading digital assets...",
    "Synchronizing data streams...",
  ];

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center"
        >
          <div className="max-w-md w-full px-4">
            {/* Cyber terminal effect */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-75" />
              <div className="relative bg-gray-900 rounded-lg p-8 border border-cyan-500/20">
                <div className="flex items-center justify-center mb-6">
                  <Terminal className="w-12 h-12 text-cyan-400" />
                </div>

                {/* Loading progress */}
                <div className="space-y-4">
                  {loadingTexts.map((text, index) => (
                    <motion.div
                      key={text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-500" />
                      <p className="text-cyan-400 text-sm font-mono">{text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Loading bar */}
                <div className="mt-8">
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-cyan-500" />
                <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-cyan-500" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-cyan-500" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-cyan-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
