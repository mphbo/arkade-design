import { useGLTF } from "@react-three/drei";

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
