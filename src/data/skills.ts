import {
  TerminalSquare,
  Database,
  Wrench,
  FileJson,
  Brackets,
  Code2,
  Server,
  Globe,
  GitBranch,
  Cpu,
  Network,
  Settings,
  Package,
  Cloud,
} from "lucide-react";

export const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: FileJson },
      { name: "Python", icon: TerminalSquare },
      { name: "Go", icon: Package },
      { name: "SQL", icon: Database },
      { name: "HTML", icon: Brackets },
      { name: "CSS", icon: Globe },
    ],
  },
  {
    icon: Server,
    title: "Frameworks & Technologies",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "React", icon: Code2 },
      { name: "Express.js", icon: Server },
      { name: "Selenium", icon: Settings },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Gin", icon: Server },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Others",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "REST API", icon: Network },
      { name: "Data Structures", icon: Cpu },
      { name: "Algorithms", icon: Settings },
      { name: "OOP", icon: Wrench },
      { name: "AWS", icon: Cloud },
    ],
  },
];
