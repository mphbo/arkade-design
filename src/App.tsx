import { Navbar } from "./components/Navbar";
import styles from "./App.module.scss";
import { Hero } from "./components/Hero/Hero";
import { CreativeCodeExample } from "./components/Hero/components/CreativeCodeExample";

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
