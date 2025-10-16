import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ArcadeMachine } from "./components/ArcadeMachine";
import { Suspense, useState } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Laptop } from "./components/Laptop";
import { CyberpunkCube } from "./components/CyberpunkCube";
import { Flowfield } from "./components/Flowfield";
import { FlyControls } from "./components/FlyControls";
import { CameraMover, type MoveState } from "./components/CameraMover";
// import { NoiseSculpture } from "./components/NoiseSculpture";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Hero = () => {
  //   const controls = useControls("Hacker Room", getDefaultControls());
  const [move, setMove] = useState<MoveState>({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false,
  });

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
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <group scale={0.2}>
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
              <boxGeometry args={[7, 4, 7]} />{" "}
              <meshStandardMaterial color="darkred" />
            </mesh>
          </group>
          <mesh receiveShadow position={[0, -1, 0]}>
            <boxGeometry args={[7, 0.2, 6]} />{" "}
            {/* width, height (thickness), depth */}
            <meshPhysicalMaterial
              color="#ff0000ff"
              metalness={1}
              roughness={0}
              reflectivity={1}
            />
          </mesh>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, -15, 88]} intensity={2} />
          <OrbitControls />
          <CameraMover move={move} speed={10} />
        </Suspense>
      </Canvas>
    </section>
  );
};
