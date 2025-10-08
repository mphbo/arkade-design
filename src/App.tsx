import { Navbar } from "./components/Navbar";
import styles from "./App.module.scss";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <h1 className={styles.text}>hello world</h1>
      </main>
    </>
  );
}

export default App;
