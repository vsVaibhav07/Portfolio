"use client";
import { motion } from "framer-motion";
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState } from "react";

export default function Contact() {
  // form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full  min-h-screen  bg-gradient-to-br from-blue-950/50 via-blue-800/50 to-blue-950/50 py-20 px-6 lg:px-24 text-white flex flex-col items-center"
    >
    
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold">Get in Touch</h2>
        <p className="text-gray-300 mt-3 text-lg max-w-xl mx-auto">
          I’d love to hear from you! Whether you have a question, a project
          idea, or just want to say hello, feel free to reach out.
        </p>
      </motion.div>

      <div id="contactForm" className="w-full grid md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-xl"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-600"
            } transition transform hover:scale-105 text-white font-semibold py-3 px-6 rounded-lg`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p className="text-sm mt-2 text-center text-gray-200">{status}</p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center gap-6"
        >
          <h3 className="text-2xl font-semibold">Connect with me</h3>
          <p className="text-gray-300 text-center max-w-md">
            You can also reach me through my social platforms. Let’s build
            something amazing together!
          </p>
          <div className="flex space-x-5 mt-4">
            <a
              href="https://www.linkedin.com/in/vs-vaibhav-/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 text-blue-800 rounded-full hover:bg-white/40 transition"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/vsVaibhav07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 text-black rounded-full hover:bg-white/40 transition"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="mailto:vsvaibhav0704@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/60 text-[#EA4335] rounded-full hover:bg-white/40 transition"
            >
              <SiGmail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
