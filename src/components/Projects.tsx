"use client";
import { motion } from "framer-motion";
import { SlGlobe } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import projects from "../projects.json"; // <-- yaha import karo

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full  min-h-screen bg-gradient-to-br from-blue-950/50 via-blue-800/50 to-blue-950/50 py-20 px-6 lg:px-24 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-serif">Projects</h2>
        <p className="text-gray-300 mt-3 text-lg">
          A selection of my recent work showcasing creativity and
          problem-solving.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl  hover:scale-[1.02] transition-transform"
          >
            {/* Image */}
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

          
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">
                {project.description}
              </p>

          
              {project.tech && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1  justify-center bg-white/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

             
              <div className="flex space-x-4 mt-5">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    
                    <SlGlobe className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
