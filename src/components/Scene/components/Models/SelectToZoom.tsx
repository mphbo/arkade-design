import { useBounds } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export function SelectToZoom({ children }: { children: React.ReactNode }) {
  const api = useBounds();

  const handleZoomIn = (e: any) => {
    e.stopPropagation();
    api.refresh(e.object).fit();
  };
  const handleZoomOut = (e: any) => {
    e.button === 0 && api.refresh().fit();
  };

  return (
    <group onClick={handleZoomIn} onPointerMissed={handleZoomOut}>
      {children}
    </group>
  );
}
