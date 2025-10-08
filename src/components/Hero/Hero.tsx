import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "./components/HackerRoom";
import { Suspense } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Hero = () => {
  //   const controls = useControls("Hacker Room", getDefaultControls());

  return (
    <section className={styles.placeholder}>
      {/* <Leva /> */}
      <Canvas className={styles.canvas}>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HackerRoom
            scale={2.1}
            position={[0, -4.4, 10]}
            rotation={[0.6, -0.8, 0]}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </section>
  );
};
