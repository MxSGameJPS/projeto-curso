import styles from "./Sobre.module.css";

export default function SobreMim() {
  return (
    <section id="about" className={styles.sobreContainer}>
      <div className={styles.sobreContent}  >
        {/* Lado esquerdo */}
        <div className={styles.sobreText} data-aos="fade-right" >
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor apaixonado por criar interfaces modernas e
            funcionais. Comecei minha jornada na tecnologia há alguns anos e
            desde então venho aprimorando minhas habilidades em diversas
            linguagens de programação e frameworks.
          </p>
          <p>Meu foco é resolver problemas reais através do código.</p>
        </div>

        {/* Lado direito */}
        <div className={styles.skills} >
          <h3>Minhas Skills</h3>
          <div className={styles.skillsGrid} data-aos="fade-left" >
            <div className={styles.skillCard} data-aos="flip-up">HTML5</div>
            <div className={styles.skillCard} data-aos="flip-up">CSS3</div>
            <div className={styles.skillCard} data-aos="flip-up">JavaScript</div>
            <div className={styles.skillCard} data-aos="flip-up">React.js</div>
            <div className={styles.skillCard} data-aos="flip-up">Next.js</div>
          </div>
        </div>
      </div>
    </section>
  );
}
