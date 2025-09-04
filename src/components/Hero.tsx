"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full bg-gradient-to-br from-blue-950/50 via-blue-800/50 to-blue-950/50"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 flex flex-col md:flex-row items-center gap-12 py-20 min-h-screen">
        <motion.div
          className="md:w-2/3 flex flex-col h-full items-start font-serif space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.8 }}
        >
          <h6 className="text-lg text-gray-200">Welcome! I’m</h6>
          <h1 className="text-4xl font-bold text-white">Vaibhav</h1>
          <p className="text-lg text-gray-100">
            Dive in and explore my world of{" "}
            <span className="text-indigo-300 font-semibold">
              creative web experiences
            </span>
            .
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-2 justify-center items-center mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <motion.button whileHover={{ scale: 1.05 }} className="bg-white hover:bg-gray-200 cursor-pointer text-blue-950 font-semibold py-2 px-4 rounded-full">
              <Link href="#contactForm" className="flex items-center justify-center">Hire Me</Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.05 }} className="border border-white hover:bg-gray-600/60 cursor-pointer text-white font-semibold py-2 px-4 rounded-full">
              <a href="/VaibhavShukla_8957709185.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </motion.button>
          </motion.div>
          <motion.div className="flex space-x-4 mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <motion.a whileHover={{ scale: 1.1 }} className="bg-white/70 p-1 text-2xl hover:bg-gray-200 rounded-full text-blue-950" href="https://www.linkedin.com/in/vs-vaibhav-/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer rounded-full" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} className="bg-white/70 p-1 text-2xl hover:bg-gray-200 rounded-full text-black" href="https://github.com/vsVaibhav07" target="_blank" rel="noopener noreferrer">
              <FaGithub className="cursor-pointer" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} className="bg-white/70 p-1 text-2xl text-[#EA4335] cursor-pointer hover:bg-gray-200 rounded-full" href="mailto:vsvaibhav0704@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail className="cursor-pointer" />
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="w-full md:w-1/2 flex justify-center items-center md:pr-10" initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="sm:w-72 w-52 h-52 sm:h-72 md:w-60 md:h-60 lg:w-72 lg:h-72 group relative border-2 border-white rounded-full overflow-hidden hover:scale-110 transition-transform duration-500">
            <Image
              src="/myImg2.png"
              alt="Profile"
              fill
              className="object-cover object-top bg-gray-100/20 rounded-xl shadow-lg"
              quality={75}
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
