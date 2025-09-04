import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
// import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <main className="bg-black flex flex-col gap-1 w-full text-white">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
