import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import SkillTag from "./SkillTag";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  skills: Array<{
    name: string;
    icon: LucideIcon;
  }>;
}

interface SkillCardProps {
  category: SkillCategory;
  delay?: number;
}

export default function SkillCard({ category, delay = 0 }: SkillCardProps) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 
                    group-hover:opacity-75 transition duration-1000 group-hover:duration-200"
      />
      <div className="relative bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-6">
          <Icon className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill, idx) => (
            <SkillTag
              key={idx}
              name={skill.name}
              icon={skill.icon}
              delay={delay + idx * 0.1}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
