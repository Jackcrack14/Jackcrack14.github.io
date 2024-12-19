import { motion } from "framer-motion";

interface TimelineItemProps {
  company: string;
  position: string;
  period: string;
  highlights: string[];
  isLast?: boolean;
  delay?: number;
}

export default function TimelineItem({
  company,
  position,
  period,
  highlights,
  isLast = false,
  delay = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600 opacity-30" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-6 w-6">
        <div className="absolute inset-0 rounded-full bg-gray-800 border-2 border-purple-500" />
        <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse" />
      </div>

      {/* Content */}
      <div className="group bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
        <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
          {company}
        </h3>
        <p className="text-purple-400 mb-1">{position}</p>
        <p className="text-gray-400 text-sm mb-4">{period}</p>
        <ul className="space-y-2">
          {highlights.map((highlight, idx) => (
            <li
              key={idx}
              className="text-gray-300 flex items-start group-hover:text-gray-200 transition-colors"
            >
              <span className="text-purple-400 mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
