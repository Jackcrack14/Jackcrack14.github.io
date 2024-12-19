import { Briefcase } from "lucide-react";
import TimelineItem from "./ui/TimelineItem";
import { experiences } from "../data/experience";
import useInView from "../hooks/useInView";

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-purple-400" />
          Professional Experience
        </h2>

        <div
          ref={ref}
          className={`relative transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              company={exp.company}
              position={exp.position}
              period={exp.period}
              highlights={exp.highlights}
              isLast={index === experiences.length - 1}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
