import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 animate-fade-in">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Jashim Ahamed
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            Full Stack Developer specializing in modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-2">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full 
                       hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a
              href="mailto:works.jashim@gmail.com"
              className="px-8 py-3 bg-transparent border-2 border-purple-500 text-white rounded-full
                       hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
