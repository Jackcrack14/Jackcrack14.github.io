import { Menu, Github, Linkedin, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              JA
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Skills
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Jackcrack14"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jashim-ahamed-9b6140236"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:works.jashim@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
            <button className="md:hidden">
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
