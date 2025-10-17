import { Navbar } from "./components/Navbar";
import styles from "./App.module.scss";
import { Scene } from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Scene />
      </main>
    </>
  );
}

export default App;
