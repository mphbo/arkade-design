import { Html, useProgress } from "@react-three/drei";
import React from "react";

export const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p>{progress !== 0 ? `${progress.toFixed(2)}%}` : "Loding..."}</p>
    </Html>
  );
};
