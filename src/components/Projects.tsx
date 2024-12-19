import { Code2, ExternalLink } from "lucide-react";
import { GradientCard } from "./ui/GradientCard";
import SkillTag from "./ui/SkillTag";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Code2 className="text-purple-400" />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GradientCard key={index}>
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-between">
                  {project.title}
                  <a href={project.link}>
                    <ExternalLink size={20} className="text-purple-400" />
                  </a>
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <SkillTag key={idx} name={tech} />
                  ))}
                </div>
                <ul className="space-y-2 mt-auto">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-start"
                    >
                      <span className="text-purple-400 mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
}
