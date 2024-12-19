import { User } from "lucide-react";
import { GradientCard } from "../ui/GradientCard";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <User className="text-purple-400" />
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <img
              src="src\assets\cartoonMe.png"
              alt="Developer workspace"
              className="relative rounded-lg w-full h-[400px] object-cover"
            />
          </div>

          <GradientCard>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Full Stack Developer with a passion for creating
                innovative web solutions. With experience in both front-end and
                back-end development, I specialize in building scalable
                applications using modern technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in software development began at SASTRA University,
                where I earned my Bachelor's degree in Computer Science and
                Business Systems. Since then, I've worked with various
                technologies and frameworks, always staying current with the
                latest industry trends.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm particularly interested in creating user-centric
                applications that solve real-world problems. Whether it's
                developing responsive front-end interfaces or architecting
                robust back-end systems, I'm always excited to take on new
                challenges.
              </p>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
