import { useGLTF } from "@react-three/drei";
import type { GLTFResult } from "../../../../types/GLTFTypes";

export function ArcadeMachine(props: any) {
  const { nodes, materials } = useGLTF(
    "/models/arcade-console.glb"
  ) as unknown as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons.geometry}
        material={materials["Material.001"]}
        position={[-0.368, 3.046, 0.863]}
        rotation={[0.214, 0, 0]}
        scale={[0.019, 0.014, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials["Material.001"]}
          position={[3.129, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.001"]}
          position={[3.129, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.001"]}
          position={[9.386, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.001"]}
          position={[9.386, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials["Material.001"]}
          position={[15.643, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials["Material.001"]}
          position={[15.643, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials["Material.001"]}
          position={[12.515, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.001"]}
          position={[12.515, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["Material.001"]}
          position={[0, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials["Material.001"]}
          position={[6.257, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Material.001"]}
          position={[6.257, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials["Material.001"]}
          position={[-3.129, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials["Material.001"]}
          position={[-3.129, 0, 6.257]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buttons001.geometry}
        material={materials["Material.001"]}
        position={[0.475, 3.071, 0.747]}
        rotation={[0.214, 0, 0]}
        scale={[0.019, 0.014, 0.019]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials["Material.001"]}
          position={[3.129, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials["Material.001"]}
          position={[3.129, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials["Material.001"]}
          position={[9.386, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.001"]}
          position={[9.386, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials["Material.001"]}
          position={[15.643, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials["Material.001"]}
          position={[15.643, 0, 6.257]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials["Material.001"]}
          position={[12.515, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials["Material.001"]}
          position={[12.515, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials["Material.001"]}
          position={[0, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Material.001"]}
          position={[6.257, 0.368, 0]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials["Material.001"]}
          position={[6.257, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials["Material.001"]}
          position={[-3.129, 0.368, 6.257]}
          scale={[0.878, 1, 0.878]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials["Material.001"]}
          position={[-3.129, 0, 6.257]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.red}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_2.geometry}
        material={materials.body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_3.geometry}
        material={materials["screen image"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.connector.geometry}
        material={materials["metal grey"]}
        position={[-0.673, 3.086, 0.898]}
        rotation={[0.224, 0, 0]}
        scale={[0.021, 0.133, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.connector001.geometry}
        material={materials["metal grey"]}
        position={[0.149, 3.126, 0.736]}
        rotation={[0.224, 0, 0]}
        scale={[0.021, 0.133, 0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front.geometry}
        material={materials["Material.001"]}
        position={[0.011, 4.778, 0.189]}
        rotation={[0.96, 0, 0]}
        scale={11.953}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle.geometry}
        material={materials["black handle"]}
        position={[-0.672, 3.22, 0.929]}
        rotation={[0.224, 0, 0]}
        scale={[0.062, 0.061, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.handle001.geometry}
        material={materials["black handle"]}
        position={[0.15, 3.259, 0.766]}
        rotation={[0.224, 0, 0]}
        scale={[0.062, 0.061, 0.062]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.left.geometry}
        material={materials["Material.001"]}
        position={[-0.973, 2.545, -0.452]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={26.491}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.right.geometry}
        material={materials["Material.001"]}
        position={[0.973, 2.545, -0.452]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={26.491}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.surround001.geometry}
        material={materials.body}
        position={[-0.672, 2.963, 0.865]}
        rotation={[0.224, -0.004, -0.002]}
        scale={0.08}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.surround002.geometry}
        material={materials.body}
        position={[0.153, 2.997, 0.71]}
        rotation={[0.224, -0.004, -0.002]}
        scale={0.08}
      />
    </group>
  );
}

useGLTF.preload("/models/arcade-console.glb");
