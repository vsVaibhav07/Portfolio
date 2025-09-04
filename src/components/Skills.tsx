"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt,FaJava, FaBug, FaLightbulb  } from "react-icons/fa";
import { SiTailwindcss,SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiPostman, SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { GiBrain } from "react-icons/gi";

const skills = [ 
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-6 h-6" /> },
      { name: "Java", icon: <FaJava className="text-red-500 w-6 h-6" /> },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React", icon: <FaReact className="text-sky-400 w-6 h-6" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white w-6 h-6" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400 w-6 h-6" /> },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300 w-6 h-6" /> },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-400 w-6 h-6" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400 w-6 h-6" /> },
    ],
  },
  {
    category: "Version Control & Tools",
    items: [
      { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500 w-6 h-6" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400 w-6 h-6" /> },
      { name: "VS Code", icon: <VscVscode  className="text-blue-400 w-6 h-6" /> },
    ],
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-300 w-6 h-6" /> },
      { name: "Debugging", icon: <FaBug className="text-red-400 w-6 h-6" /> },
      { name: "Logical Thinking", icon: <GiBrain className="text-purple-400 w-6 h-6" /> },
    ],
  },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-br from-blue-950/50 via-blue-800/50 to-blue-950/50 w-full  py-20 container-x text-white flex flex-col md:flex-row items-center gap-12 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold font-serif mb-10 text-center">⚡ Skills</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              className="bg-white/10 rounded-2xl p-5 shadow-md hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
