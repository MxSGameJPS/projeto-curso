import styles from "./App.module.css";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

export default function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Hero />
      <SobreMim />
      <Projetos />
      <Contato />
      <Footer />

      {/* Botão Voltar */}
      {showButton && (
        <button 
        onClick={scrollToTop} 
        className={styles.btnTopo}
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
}
