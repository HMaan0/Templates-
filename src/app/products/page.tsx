import Contact from "@/components/Business/Contact";
import NavBar from "@/components/Business/NavBar";
import ProductsList from "@/components/Business/ProductsList";

const page = () => {
  return (
    <>
      <NavBar></NavBar>
      <ProductsList></ProductsList>
      <Contact></Contact>
    </>
  );
};

export default page;
