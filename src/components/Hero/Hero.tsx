import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import { PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "./components/HackerRoom";
import { Suspense } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Target } from "./components/Target";
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
            scale={1.5}
            position={[0, -4, 0]}
            rotation={[0.3, 0.3, 0]}
          />
          {/* <group> */}
          <Target
            scale={0.02}
            position={[4, -6, 0]}
            rotation={[0.6, -0.8, 0]}
          />
          <Target
            scale={0.02}
            position={[-4, -6, 0]}
            rotation={[0.6, 0.8, 0]}
          />
          {/* </group> */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
        </Suspense>
      </Canvas>
    </section>
  );
};
