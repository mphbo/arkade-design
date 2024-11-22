import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import styles from "./navbar.module.scss";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import { useState } from "react";

function BottomNavbar({
  audio,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const handleClick = () => {
    setIsPlaying((prev) => {
      if (prev) {
        audio?.current?.pause();
      } else {
        audio?.current?.play();
      }
      return !prev;
    });
  };

  return (
    // <Slide appear={false} direction="down" in={!trigger}>
    <AppBar
      className={styles.appBar}
      position="fixed"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Container disableGutters>
        <div className={styles.iconContainer}>
          <div className={styles.iconContainerInner}>
            {isPlaying ? (
              <IconButton onClick={handleClick}>
                <Pause />
              </IconButton>
            ) : (
              <IconButton onClick={handleClick}>
                <PlayArrow />
              </IconButton>
            )}
          </div>
        </div>
      </Container>
    </AppBar>
    // </Slide>
  );
}
export default BottomNavbar;
