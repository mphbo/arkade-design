import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <a>hello</a>
          <button className={styles.menuButton}>
            <img src="menu.svg" alt="Menu" />
          </button>
        </div>
      </div>
    </header>
  );
};
