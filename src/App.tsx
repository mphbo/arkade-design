import { Navbar } from "./components/Navbar";
import styles from "./App.module.scss";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
      </main>
    </>
  );
}

export default App;
