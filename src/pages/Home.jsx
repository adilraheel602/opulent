import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Features from "../components/Features";
import BankingPartners from "../components/BankingPartners";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <About />
      <BankingPartners />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Home;
