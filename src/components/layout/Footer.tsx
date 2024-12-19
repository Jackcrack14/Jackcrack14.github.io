import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:works.jashim@gmail.com"
                className="text-gray-300 hover:text-white flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                works.jashim@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jackcrack14"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jashim-ahamed-9b6140236"
                className="text-gray-300 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a href="#about" className="text-gray-300 hover:text-white block">
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white block"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-300 hover:text-white block"
              >
                Skills
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Jashim
            Ahamed
          </p>
        </div>
      </div>
    </footer>
  );
}
