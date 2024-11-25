import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import styles from "../projects.module.scss";
import React, { useState } from "react";
import { IProject } from "../constants/projects";

function Project(props: IProject) {
  const { name, image, learnMore } = props;
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <Card
        sx={{
          minWidth: 345,
          background: "linear-gradient(to bottom right, #a60000, #a6000055)",
          color: "black",
        }}
      >
        <CardMedia component="img" image={image} />
        <CardContent sx={{ padding: "16px 16px 0 16px" }}>
          <Typography>{name}</Typography>
        </CardContent>
        <CardActions sx={{ padding: "16px" }}>
          <Button
            sx={{ color: "white", padding: 0 }}
            size="small"
            onClick={() => setOpen(true)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClick={() => setOpen(false)}
        sx={{
          backgroundImage: `url(${learnMore?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.learnmore}>
          <div className={styles.innercontent}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {learnMore?.text}
            </Typography>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Project;
