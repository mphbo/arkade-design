import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import {
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { ArcadeMachine } from "./components/Models/ArcadeMachine";
import { Suspense, useEffect, useState } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Laptop } from "./components/Models/Laptop";
import { CyberpunkCube } from "./components/Models/CyberpunkCube";
import { Flowfield } from "./components/Flowfield";
import { FlyControls } from "./components/FlyControls";
import { CameraMover, type MoveState } from "./components/CameraMover";
import { CameraIntro } from "./components/CameraIntro";
import { RedFlash } from "./components/RedFlash";
// import { NoiseSculpture } from "./components/NoiseSculpture";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Scene = () => {
  //   const controls = useControls("Hacker Room", getDefaultControls());
  const [move, setMove] = useState<MoveState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

  const [flash, setFlash] = useState(false);

  return (
    <section className={styles.placeholder}>
      <div style={{ overflow: "hidden" }}>
        <Flowfield />
      </div>
      {/* <Leva /> */}
      <div className={styles.controls}>
        <FlyControls setMove={setMove} />
      </div>
      <Canvas gl={{ alpha: true }} className={styles.canvas}>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 0]} />
          <group scale={0.4}>
            <ArcadeMachine
              scale={2}
              position={[-10, -5, 0]}
              rotation={[0, 0.8, 0]}
            />
            <Laptop
              scale={0.03}
              position={[12, 0, 0]}
              rotation={[0, -0.8, 0]}
            />
            <CyberpunkCube
              scale={1}
              position={[0, -4, 0]}
              rotation={[0, -1.6, 0]}
            />
            <mesh receiveShadow position={[12, -3, 0]}>
              <boxGeometry args={[7, 4, 7]} />
              <meshStandardMaterial color="darkred" />
            </mesh>
            <mesh scale={5} receiveShadow position={[0, -5, 0]}>
              <boxGeometry args={[7, 0.2, 6]} />
              {/* width, height (thickness), depth */}
              <meshPhysicalMaterial
                color="#ff0000ff"
                metalness={1}
                roughness={0}
                reflectivity={1}
              />
            </mesh>
          </group>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, -15, 88]} intensity={2} />
          <OrbitControls />
          <CameraMover move={move} speed={10} />
          <CameraIntro startPos={[0, 0, 0]} endPos={[0, 0, 30]} duration={5} />
        </Suspense>
      </Canvas>
      <RedFlash active={true} duration={0.5} />
    </section>
  );
};
