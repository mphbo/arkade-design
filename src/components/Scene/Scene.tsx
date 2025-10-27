import { Canvas } from "@react-three/fiber";
import styles from "./Scene.module.scss";
import { Suspense, useEffect, useState } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Flowfield } from "./components/Flowfield";
import { FlyControls } from "./components/FlyControls";
import { type MoveState } from "./components/CameraMover";
import { RedFlash } from "./components/RedFlash";
import { Main } from "./components/Models/Main";
import { CameraDistance } from "./components/CameraDistance";
// import { NoiseSculpture } from "./components/NoiseSculpture";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Scene = () => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [showControls, setShowControls] = useState(false);
  const [move, setMove] = useState<MoveState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  useEffect(() => {
    setTimeout(() => setShowControls(true), 5000);
  }, []);

  return (
    <section className={styles.placeholder}>
      <div style={{ overflow: "hidden" }}>
        <Flowfield />
      </div>
      {/* <Leva /> */}
      <div className={styles.controls}>
        {showControls && <FlyControls setMove={setMove} />}
      </div>
      <Canvas gl={{ alpha: true }} className={styles.canvas}>
        <Suspense fallback={<CanvasLoader />}>
          <Main move={move} showControls setPosition={setPosition} />
        </Suspense>
      </Canvas>
      <RedFlash active={true} duration={0.5} />
      <CameraDistance position={position} />
    </section>
  );
};
