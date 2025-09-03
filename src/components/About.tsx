"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-blue-950/50 via-blue-800/50 to-blue-950/50 w-full min-w-screen py-20 px-6 md:px-16 text-white flex flex-col md:flex-row items-center gap-12 min-h-screen">
      
     
      <motion.div
        className="w-full md:w-1/3"
        initial={{ opacity: 0, x: -50 ,scale:0.8 }}
        whileInView={{ opacity: 1, x: 0,scale:1 }}
         viewport={{ once: false, amount: 0.6 }}
        transition={{delay:0.1, duration: 0.8 }}
      >
        <motion.img
  src="/myImg2.jpeg"
  alt="Vaibhav"
  className="rounded-2xl shadow-2xl object-cover w-full h-auto border-2 border-indigo-500/40"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
/>
      </motion.div>

      
      <motion.div
        className="w-full md:w-2/3 flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">
          About Me
        </h2>
        <p className="text-gray-200 text-lg md:text-xl">
          Hi! I’m <span className="text-indigo-300 font-semibold">Vaibhav Shukla</span>, a passionate web developer who loves building
          modern, responsive, and interactive websites. I enjoy turning creative ideas
          into functional digital experiences.
        </p>
        <p className="text-gray-200 text-lg md:text-xl">
          My expertise includes <span className="text-indigo-300 font-semibold">React.js, Next.js, Tailwind CSS, and Node.js</span>. 
          I’m always learning new technologies and improving my skills to deliver the
          best solutions for every project.
        </p>
        <p className="text-gray-200 text-lg md:text-xl">
          When I’m not coding, I love exploring tech blogs, experimenting with animations, and contributing to open-source projects.
        </p>
      </motion.div>
    </section>
  );
}
