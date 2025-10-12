import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const CyberpunkCube = ({
  scale,
  position,
  rotation,
}: {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const { nodes, materials } = useGLTF("models/cyberpunk-cube3.glb") as any;
  // if (materials["main cube"]) {
  //   materials["main cube"].emissiveIntensity = 0.2; // default is 1
  //   materials["main cube"].emissive = new THREE.Color(0x000000); // remove glow if needed
  // }
  // if (materials["inside cube"]) {
  //   materials["inside cube"].emissiveIntensity = 0.1;
  //   materials["inside cube"].emissive = new THREE.Color(0x000000);
  // }

  // materials["main cube"].metalness = 0.2; // default may be 1
  // materials["main cube"].roughness = 0.5; // default may be 0.2
  if (materials["main cube"]) {
    materials["main cube"].emissiveIntensity = 0;
    materials["main cube"].metalness = 40;
    materials["main cube"].roughness = 0.4;
    materials["main cube"].color = materials["main cube"].color =
      new THREE.Color("#000000");
  }

  if (materials["inside cube"]) {
    materials["inside cube"].color = new THREE.Color("#ff0000");
    materials["inside cube"].emissiveIntensity = 5;
    materials["inside cube"].metalness = 1.2;
    materials["inside cube"].roughness = 0.7;
  }

  if (materials["inside cube.001"]) {
    materials["inside cube.001"].color = new THREE.Color("#ff0000");
    materials["inside cube.001"].emissiveIntensity = 5;
    materials["inside cube.001"].metalness = 1.2;
    materials["inside cube.001"].roughness = 0.7;
  }
  return (
    <group scale={scale} position={position} rotation={rotation} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["main cube"]}
        position={[-7.053, 3.649, 0]}
        rotation={[-2.526, -Math.PI / 6, 2.526]}
        scale={1.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["inside cube"]}
        position={[-7.053, 3.649, 0]}
        rotation={[-2.526, -Math.PI / 6, 2.526]}
        scale={1.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["inside cube"]}
        position={[-7.053, 3.649, 0]}
        rotation={[-2.526, -Math.PI / 6, 2.526]}
        scale={1.768}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["main cube"]}
        position={[-7.053, 3.649, 0]}
        rotation={[0.615, Math.PI / 6, -2.526]}
        scale={1.805}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["main cube"]}
        position={[-7.053, 3.649, 0]}
        rotation={[-2.526, -Math.PI / 6, 2.526]}
        scale={1.768}
      />
      <group
        position={[-3.793, 7.251, 0.033]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={127.278}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve_1.geometry}
          material={materials["Dark Letters"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Curve_2.geometry}
          material={materials["inside cube"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["inside cube.001"]}
        position={[-3.674, 0.774, 0.1]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={134.134}
      />
    </group>
  );
};

useGLTF.preload("/models/cyberpunk-cube3.glb");
