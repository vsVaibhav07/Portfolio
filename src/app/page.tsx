import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";



export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen  text-white  ">
      
      <div className="bg-blue-950/50   relative rounded-s-sm w-full  h-full min-h-screen   ">
        <Navbar  />
        <div className="flex flex-col container px-4 sm:px-6 md:px-10 lg:px-20 w-full gap-1">
          <Hero  />
          <About  />
          <Skills/>
          <Projects/>
          <Contact/>
        </div>

      </div>

    </div>
  );
}
