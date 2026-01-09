import styles from "./Hero.module.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <section id="home" className={styles.heroContainer}>
        <div className={styles.heroText} data-aos="fade-right" >
            <span> Olá, eu sou </span>
            <h1> Saulo Pavanello </h1>
            <p> Desenvolvedor Full Satck & Freelancer </p>

            <div className={styles.socialLinks} data-aos="fade-up" >
                <a href='#' className={styles.btnLinkedin}><FaLinkedin size={24} /></a>
                <a href='#' className={styles.btnGithub}><FaGithub size={24}/></a>
            </div>
        </div>

        <div className={styles.heroImage} data-aos="flip-up" >
            <img src="/Image/minhaFoto.png" alt="Minha imagem de perfil" />
        </div>
      </section>
    </>
  );
}
