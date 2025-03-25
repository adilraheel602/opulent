import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BankingPartners from "../components/BankingPartners";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <BankingPartners />
      <Footer />
    </>
  );
}

export default Home;
