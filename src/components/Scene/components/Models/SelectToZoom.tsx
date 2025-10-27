import { useBounds } from "@react-three/drei";

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
