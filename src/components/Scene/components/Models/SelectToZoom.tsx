import { useBounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Vector3 } from "three";

export function SelectToZoom({ children }: { children: React.ReactNode }) {
  const api = useBounds();
  const { camera } = useThree(); // active camera
  const maxDistance = 20; // maximum distance from origin

  const clampDistanceFromOrigin = () => {
    const origin = new Vector3(0, 0, 0);
    const dir = camera.position.clone().sub(origin).normalize();
    const distance = camera.position.distanceTo(origin);
    if (distance > maxDistance) {
      camera.position.copy(origin.clone().add(dir.multiplyScalar(maxDistance)));
    }
  };

  const handleZoomIn = (e: any) => {
    e.stopPropagation();
    api.refresh(e.object).fit(1.05); // slight padding
    clampDistanceFromOrigin();
  };

  const handleZoomOut = (e: any) => {
    if (e.button === 0) {
      api.refresh().fit(1.05); // zoom out to full bounds
      clampDistanceFromOrigin();
    }
  };

  return (
    <group onClick={handleZoomIn} onPointerMissed={handleZoomOut}>
      {children}
    </group>
  );
}
