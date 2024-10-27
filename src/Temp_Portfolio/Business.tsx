import NavBar from "@/components/Business/NavBar";
import { Hero } from "@/components/Business/Hero";
import Images from "@/components/Business/Images";
import Map from "@/components/Business/Map";
import Testimonials from "@/components/Business/Testimonials";
import Contact from "@/components/Business/Contact";

const Business = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className="h-svh">
        <div className="flex justify-center">
          <Hero></Hero>
        </div>
      </section>
      <section className="h-max mt-10 ">
        <Images></Images>
      </section>
      <section>
        <Map></Map>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </>
  );
};

export default Business;
