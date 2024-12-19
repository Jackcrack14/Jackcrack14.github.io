import { motion } from "framer-motion";
import { LucideIcon, Code2 } from "lucide-react";

interface SkillTagProps {
  name: string;
  icon?: LucideIcon;
  delay?: number;
}

export default function SkillTag({
  name,
  icon: Icon = Code2,
  delay = 0,
}: SkillTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      className="px-4 py-2 bg-gray-800/80 text-purple-300 rounded-lg text-sm
                 hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2
                 border border-purple-500/20 backdrop-blur-sm group cursor-default"
    >
      <Icon
        size={16}
        className="text-purple-400 group-hover:text-purple-300 transition-colors"
      />
      {name}
    </motion.div>
  );
}
