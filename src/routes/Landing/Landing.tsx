import styles from "./landing.module.scss";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="App">
      <div className={styles.main}>
        <Link to="./home" className={styles.button}>
          ENTER
        </Link>
      </div>
    </div>
  );
}

export default Landing;
