import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <a className={styles.logo} href="/">
            <img src="assets/arkade-design3.svg" alt="Menu" />
          </a>
          <button className={styles.menuButton}>
            <img src="assets/menu.svg" alt="Menu" />
          </button>
        </div>
      </div>
    </header>
  );
};
