import { useRef, useEffect, useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

export const CyberpunkCube = ({
  scale,
  position,
  rotation,
}: {
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
}) => {
  const cubesRef = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("models/cyberpunk-cube3.glb") as any;

  // --- MATERIAL SETUP ---
  if (materials["main cube"]) {
    materials["main cube"].emissiveIntensity = 0;
    materials["main cube"].metalness = 40;
    materials["main cube"].roughness = 0.4;
    materials["main cube"].color = new THREE.Color("#000000");
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

  // --- CENTER GEOMETRIES (optional, ensures smooth rotation) ---
  useLayoutEffect(() => {
    nodes.Cube.geometry.center();
    nodes.Cube001.geometry.center();
    nodes.Cube002.geometry.center();
    nodes.Cube003.geometry.center();
    nodes.Cube004.geometry.center();
  }, [nodes]);

  // --- SPIN ANIMATION (only cubes) ---
  useEffect(() => {
    if (!cubesRef.current) return;

    const tl = gsap.to(cubesRef.current.rotation, {
      y: "+=6.28", // full rotation
      x: "+=6.28", // full rotation
      z: "+=6.28", // full rotation
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    return () => {
      () => tl.kill();
    };
  }, []);

  // --- Tilt rotation for cubes (adjust as desired) ---
  const tiltRotation: [number, number, number] = [-2.526, -Math.PI / 6, 2.526];

  // --- Cube offset to match original GLTF ---
  const cubeOffset: [number, number, number] = [-7.053, 3.649, 0];
  const cubeScale = 1.768;

  return (
    <group scale={scale} position={position} rotation={rotation} dispose={null}>
      {/* Tilted group containing spinning cubes */}
      <group rotation={tiltRotation} position={cubeOffset} scale={cubeScale}>
        <group ref={cubesRef}>
          <mesh
            geometry={nodes.Cube.geometry}
            material={materials["main cube"]}
          />
          <mesh
            geometry={nodes.Cube001.geometry}
            material={materials["inside cube"]}
          />
          <mesh
            geometry={nodes.Cube002.geometry}
            material={materials["inside cube"]}
          />
          <mesh
            geometry={nodes.Cube003.geometry}
            material={materials["main cube"]}
          />
          <mesh
            geometry={nodes.Cube004.geometry}
            material={materials["main cube"]}
          />
        </group>
      </group>

      {/* Letters / extra meshes stay stationary */}
      <group
        position={[-3.793, 7.251, 0.033]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={127.278}
      >
        <mesh
          geometry={nodes.Curve_1.geometry}
          material={materials["Dark Letters"]}
        />
        <mesh
          geometry={nodes.Curve_2.geometry}
          material={materials["inside cube"]}
        />
      </group>

      <mesh
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
