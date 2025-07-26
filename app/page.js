import About from "@/components/About";
import Below from "@/components/Below";
import Count from "@/components/Count";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Count />
      <FAQs />
      <Below />
      <Footer />
    </div>
  );
};

export default Home;
