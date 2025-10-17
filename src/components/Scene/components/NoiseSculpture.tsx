import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function NoiseSculpture() {
  const mesh = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.IcosahedronGeometry>(null);
  const clock = new THREE.Clock();

  useFrame(() => {
    if (!mesh.current || !geometryRef.current) return;

    const time = clock.getElapsedTime();
    mesh.current.rotation.y += 0.002;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.2;

    // Apply Perlin-style noise to vertices
    const geom = geometryRef.current;
    const position = geom.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < position.count; i++) {
      const x = position.getX(i);
      const y = position.getY(i);
      const z = position.getZ(i);
      const noise =
        0.2 * Math.sin(x * 2 + time) +
        0.2 * Math.cos(y * 3 + time * 0.7) +
        0.2 * Math.sin(z * 1.5 + time * 1.2);
      position.setXYZ(i, x + noise * 0.1, y + noise * 0.1, z + noise * 0.1);
    }
    position.needsUpdate = true;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry ref={geometryRef} args={[1.5, 60]} />
      <meshStandardMaterial
        color="#88ccff"
        roughness={0.2}
        metalness={0.8}
        emissive="#00ffff"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}
