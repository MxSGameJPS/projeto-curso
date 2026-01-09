import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      {/* <span> Mau Portifólio </span> */}
      <img src='/Image/logo/logo.png' alt='logo' className={styles.logo} />
      <nav>
        <a href='#home'>Home</a>
        <a href='#about'>Sobre</a>
        <a href='#projects'>Projetos</a>
        <a href='#contact'>Contatos</a>
      </nav>
    </header>
  );
}