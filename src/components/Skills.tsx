import { Cpu } from "lucide-react";
import { skillCategories } from "../data/skills";
import useInView from "../hooks/useInView";
import SkillCard from "./ui/SkillCard";

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Cpu className="text-purple-400" />
          Technical Skills
        </h2>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
