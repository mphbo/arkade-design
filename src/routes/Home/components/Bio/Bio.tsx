import styles from "./bio.module.scss";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

function Bio() {
  return (
    <div className={styles.bio}>
      <ChangeHistoryIcon
        sx={{
          fontSize: 70,
        }}
      />
      <span className={styles.bioText}>
        DARK ARKADE is a musical journey into the shadows, where melodies,
        textures, and atmospheres create a captivating and haunting sonic
        landscape that evoke emotions and stories beyond the ordinary.
      </span>
    </div>
  );
}

export default Bio;
