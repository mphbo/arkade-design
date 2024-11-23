import Socials from "../Socials";
import styles from "./bio.module.scss";

function Bio() {
  return (
    <div className={styles.bio}>
      <video className={styles.video} muted autoPlay loop>
        <source src="/sparks.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <div className={styles.bioText}>
          <p>
            With a professional background in web development and a passion for
            design, I am here to fill all of your content and software needs.
            <p>
              I have extensive experience in video editing, promotional videos,
              music production, graphic design, event organizing, and of as
              stated web development and design.
            </p>
            <p>Contact me and we can discuss your project together.</p>
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
}

export default Bio;
