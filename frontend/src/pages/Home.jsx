import CompanyIntro from "../components/CompanyIntro";
import Hero from "../components/Hero";
import OurProducts from "../components/OurProducts";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <OurProducts />
      <WhyChooseUs />
    </>
  );
}

export default Home;