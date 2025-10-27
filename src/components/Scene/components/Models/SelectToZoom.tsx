import { useBounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export function SelectToZoom({ children }: { children: React.ReactNode }) {
  const bounds = useBounds();
  const { camera } = useThree(); // active camera

  const handleZoomIn = (e: any) => {
    e.stopPropagation();
    bounds.refresh(e.object).fit();
  };

  const handleZoomOut = (e: any) => {
    if (e.button === 0) {
      const dir = new THREE.Vector3();
      camera.getWorldDirection(dir);
      camera.position.addScaledVector(dir, -20); // zoom out by 10 units
      camera.rotation.set(0, 0, 0);
    }
  };

  return (
    <group onClick={handleZoomIn} onPointerMissed={handleZoomOut}>
      {children}
    </group>
  );
}
