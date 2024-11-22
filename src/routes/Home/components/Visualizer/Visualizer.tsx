import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Visualizer = ({
  audio,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
}) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Experience audio={audio} />
      </Suspense>
    </Canvas>
  );
};

export default Visualizer;
