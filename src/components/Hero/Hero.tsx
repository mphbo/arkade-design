import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { HackerRoom } from "./components/HackerRoom";
import { Suspense } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Target } from "./components/Target";
import { CyberpunkCube } from "./components/Model";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Hero = () => {
  //   const controls = useControls("Hacker Room", getDefaultControls());

  return (
    <section className={styles.placeholder}>
      {/* <Leva /> */}
      <Canvas className={styles.canvas}>
        <OrbitControls />
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <group scale={0.2}>
            <HackerRoom
              scale={2}
              position={[-10, -5, 0]}
              rotation={[0.3, 0.8, 0]}
            />
            <Target
              scale={0.03}
              position={[12, 0, 0]}
              rotation={[0.6, -0.8, 0]}
            />
            <CyberpunkCube
              scale={1}
              position={[0, -4, 0]}
              rotation={[0.2, -1.6, 0]}
            />
          </group>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, -18, 28]} intensity={2} />
        </Suspense>
      </Canvas>
    </section>
  );
};
