import { Canvas } from "@react-three/fiber";
import styles from "./Scene.module.scss";
import { OrbitControls } from "@react-three/drei";
import { ArcadeMachine } from "./components/Models/ArcadeMachine";
import { Suspense, useEffect, useRef, useState } from "react";
import { CanvasLoader } from "./components/CanvasLoader";
import { Laptop } from "./components/Models/Laptop";
import { CyberpunkCube } from "./components/Models/CyberpunkCube";
import { Flowfield } from "./components/Flowfield";
import { FlyControls } from "./components/FlyControls";
import { CameraMover, type MoveState } from "./components/CameraMover";
import { RedFlash } from "./components/RedFlash";
import { Bounds } from "@react-three/drei";
import { SelectToZoom } from "./components/Models/SelectToZoom";
import { CameraIntro } from "./components/CameraIntro";
// import { NoiseSculpture } from "./components/NoiseSculpture";
// import { Leva, useControls } from "leva";
// import { getDefaultControls } from "../../utils/defaultControls";
export const Scene = () => {
  const [showControls, setShowControls] = useState(false);
  //   const controls = useControls("Hacker Room", getDefaultControls());
  const orbitControlsRef = useRef<any>(null);
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
      <Canvas
        gl={{ alpha: true }}
        className={styles.canvas}
        camera={{ position: [0, 0, 30] }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[0, -15, 88]} intensity={2} />

          {showControls && (
            <OrbitControls ref={orbitControlsRef} enableZoom makeDefault />
          )}

          <Bounds fit={false} observe={false} margin={1.2}>
            <SelectToZoom>
              <ArcadeMachine
                scale={2}
                position={[-10, -5, 0]}
                rotation={[0, 0.8, 0]}
              />
              <CyberpunkCube
                scale={1}
                position={[0, -4, 0]}
                rotation={[0, -1.6, 0]}
              />
              <Laptop
                scale={0.03}
                position={[12, 0, 0]}
                rotation={[0, -0.8, 0]}
              />
            </SelectToZoom>
          </Bounds>
          {/* Clickable cube for testing zoom */}
          <mesh position={[12, -3, 0]} castShadow receiveShadow>
            <boxGeometry args={[7, 4, 7]} />
            <meshStandardMaterial color="darkred" />
          </mesh>

          {/* Ground */}
          <mesh scale={5} receiveShadow position={[0, -5, 0]}>
            <boxGeometry args={[7, 0.2, 6]} />
            <meshPhysicalMaterial
              color="#ff0000ff"
              metalness={1}
              roughness={0}
              reflectivity={1}
            />
          </mesh>

          <CameraMover move={move} speed={10} />
          <CameraIntro startPos={[0, 0, 0]} endPos={[0, 0, 30]} duration={2} />
        </Suspense>
      </Canvas>
      <RedFlash active={true} duration={0.5} />
    </section>
  );
};
