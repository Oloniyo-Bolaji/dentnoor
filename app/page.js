import About from "@/components/About";
import Below from "@/components/Below";
import Features from "@/components/Features";
import Reasons from "@/components/Reasons";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Reasons />
      <Below />
      <Footer />
    </div>
  );
};

export default Home;
