import About from "@/components/Portfolio/About";
import Contact from "@/components/Portfolio/Contact";
import HamburgerMenu from "@/components/Portfolio/Hamburger";
import Hero from "@/components/Portfolio/Hero";
import Projects from "@/components/Portfolio/Projects";
import Work from "@/components/Portfolio/Work";

const Portfolio = () => {
  return (
    <>
      <div className="flex-row flex justify-between items-start">
        <HamburgerMenu></HamburgerMenu>
      </div>
      <div className=" flex justify-center items-center">
        <div className="mt-4 w-10/12 sm:w-7/12 flex flex-col gap-40">
          <section
            id="home"
            className="h-full flex justify-center items-center"
          >
            <div className="-z-50 -rotate-45 absolute left-1/2  transform -translate-x-1/2 w-1/2 h-96 bg-gradient-radial from-Theme_blue/50 to-transparent rounded-full blur-3xl"></div>
            <Hero></Hero>
          </section>
          <section id="work" className="h-full  ">
            <Work></Work>
          </section>
          <section id="projects" className="h-full ">
            <Projects></Projects>
          </section>
          <section id="about" className="h-full ">
            <About></About>
          </section>
          <section id="contact" className="h-full ">
            <Contact></Contact>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
