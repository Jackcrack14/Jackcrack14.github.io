import { User } from "lucide-react";
import { GradientCard } from "../ui/GradientCard";
import image from "../../assets/cartoonMe.png";

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
              src={image}
              alt="Developer workspace"
              className="relative rounded-lg w-full h-[565px] object-cover"
            />
          </div>

          <GradientCard>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                I’m a Full Stack Developer with expertise in building scalable
                web applications using modern technologies. With a strong
                foundation in both front-end and back-end development, I focus
                on creating user-centric solutions that solve real-world
                problems and drive business impact.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
                I graduated with a Bachelor of Technology in Computer Science
                and Business Systems from SASTRA University. My recent
                experience at Entropik involved developing AI-powered features,
                reducing API calls by 30%, and improving user engagement by 30%.
                At OAPPS, I designed security portals, integrated automation
                tools, and streamlined workflows, boosting efficiency by over
                40%.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                I’m passionate about staying ahead of industry trends and
                continuously learning. Whether it's enhancing user experiences
                with React and Node.js or integrating complex SDKs and APIs, I’m
                always excited to take on new challenges and build end-to-end
                solutions that scale.
              </p>
            </div>
          </GradientCard>
        </div>
      </div>
    </section>
  );
}
