"use client";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  const [active, setActive] = useState(navLinks[0].name);

  return (
    <header className="fixed top-0 z-50 w-full  bg-gradient-to-r from-blue-950/90 to-violet-500/40 backdrop-blur-3xl text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:px-6">
        <h1 className="text-2xl font-serif font-bold">Portfolio</h1>

        <nav className="hidden sm:flex space-x-6 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:scale-110 transition ${
                active === link.name
                  ? "scale-110 shadow-xs rounded-sm shadow-blue-700 px-2"
                  : ""
              }`}
              onClick={() => setActive(link.name)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="sm:hidden p-2 rounded-md hover:bg-white/20 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-blue-950/90 backdrop-blur-xl"
          >
            <ul className="flex flex-col items-center space-y-4 py-6 text-lg font-medium">
              {navLinks.map((link) => (
                <li className="w-full flex" key={link.href}>
                  <Link
                    href={link.href}
                    className={`hover:scale-105 transition w-full px-9 ${
                      active === link.name
                        ? "scale-105 shadow-xs shadow-blue-800  bg-blue-950/10 "
                        : ""
                    }`}
                    onClick={() => {
                      setActive(link.name);
                      setTimeout(() => {
                        setIsOpen(false);
                      }, 200);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
