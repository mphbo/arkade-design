import { Canvas } from "@react-three/fiber";
import styles from "./Hero.module.scss";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { ArcadeMachine } from "./components/ArcadeMachine";
import { Suspense } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Laptop } from "./components/Laptop";
import { CyberpunkCube } from "./components/Model";
import { CreativeCodeExample } from "./components/CreativeCodeExample";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Hero = () => {
  //   const controls = useControls("Hacker Room", getDefaultControls());

  return (
    <section className={styles.placeholder}>
      {/* <Leva /> */}
      <Canvas gl={{ alpha: true }} className={styles.canvas}>
        <OrbitControls />
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
              {/* width, height (thickness), depth */}
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
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, -18, 28]} intensity={2} />
        </Suspense>
      </Canvas>
      <div style={{ overflow: "hidden" }}>
        <CreativeCodeExample />
      </div>
    </section>
  );
};
