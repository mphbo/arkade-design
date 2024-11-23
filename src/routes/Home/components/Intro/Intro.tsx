import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.main}>
      <video className={styles.video} muted autoPlay loop>
        <source src="/ARKADE(1).mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Intro;