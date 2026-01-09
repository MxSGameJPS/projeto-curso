import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <section id="contact" className={styles.contatoContainer}>
      <div className={styles.contatoContent} data-aos="fade-up">
        <h2>Vamos Conversar?</h2>
        <p>Entre em contato para projetos ou parcerias</p>

        {/* Formulário de contato */}
        <form
          action="https://formsubmit.co/mxsgamejps@gmail.com"
          method="POST"
          className={styles.form}
          data-aos="fade-up"
        >
            {/* Input Campo de nome */}
            <input 
            type='hidden'
            name="_next"
            value="http://localhost:5173"
            />
            <input 
            type='hidden'
            name="_captcha"
            value="false"
            />
            <input 
            type='text'
            name="name"
            placeholder="Seu nome"
            required
            />
            <input 
            type='email'
            name="email"
            placeholder="Seu email"
            required
            />
            <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            ></textarea>
            <button type="submit" data-aos="fade-up">Enviar Mensagem</button>
        </form>
      </div>
    </section>
  );
}
