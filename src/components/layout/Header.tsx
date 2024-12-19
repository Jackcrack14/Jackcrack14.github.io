import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import NavLink from "./NavLink";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(17, 24, 39, 0)", "rgba(17, 24, 39, 0.95)"]
  );

  const headerPadding = useTransform(scrollY, [0, 50], ["1.5rem", "1rem"]);

  return (
    <motion.header
      style={{
        backgroundColor: headerBackground,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
      className="fixed w-full z-50 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div className="flex items-center" whileHover={{ scale: 1.1 }}>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              JA
            </span>
          </motion.div>

          <nav className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {[
              "https://github.com/Jackcrack14",
              "https://www.linkedin.com/in/jashim-ahamed-9b6140236",
              "mailto:works.jashim@gmail.com",
            ].map((href, index) => (
              <motion.a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white transition-colors"
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {index === 0 ? (
                  <Github className="w-5 h-5" />
                ) : index === 1 ? (
                  <Linkedin className="w-5 h-5" />
                ) : (
                  <Mail className="w-5 h-5" />
                )}
              </motion.a>
            ))}
          </div>

          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={false}
          animate={
            isMobileMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#home" mobile>
              Home
            </NavLink>
            <NavLink href="#about" mobile>
              About
            </NavLink>
            <NavLink href="#experience" mobile>
              Experience
            </NavLink>
            <NavLink href="#projects" mobile>
              Projects
            </NavLink>
            <NavLink href="#skills" mobile>
              Skills
            </NavLink>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
