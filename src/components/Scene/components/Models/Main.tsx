import { OrbitControls } from "@react-three/drei";
import { ArcadeMachine } from "./ArcadeMachine";
import { Laptop } from "./Laptop";
import { CyberpunkCube } from "./CyberpunkCube";
import { CameraMover, type MoveState } from "../CameraMover";
import { Bounds } from "@react-three/drei";
import { SelectToZoom } from "./SelectToZoom";
import { CameraIntro } from "../CameraIntro";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { CameraDistance } from "../CameraDistance";
import { Vector3 } from "three";

export const Main = ({
  move,
  showControls,
  setPosition,
}: {
  move: MoveState;
  showControls: boolean;
  setPosition: (pos: { x: number; y: number; z: number }) => void;
}) => {
  const orbitControlsRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const { camera } = useThree();

  useFrame(() => {
    // Prevent camera from going below y = 1
    setPosition({
      x: camera.position.x,
      y: camera.position.y,
      z: camera.position.z,
    });
  });

  return (
    <>
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
          <Laptop scale={0.03} position={[12, 0, 0]} rotation={[0, -0.8, 0]} />
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
      <CameraIntro startPos={[0, 0, 0]} endPos={[0, 0, 45]} duration={2} />
      <perspectiveCamera position={[0, 0, 0]} ref={cameraRef} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, -15, 88]} intensity={2} />
      {showControls && (
        <OrbitControls
          ref={orbitControlsRef}
          enableZoom
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          maxDistance={45}
          enablePan
        />
      )}
    </>
  );
};
