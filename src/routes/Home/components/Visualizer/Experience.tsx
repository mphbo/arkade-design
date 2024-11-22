import { useRef } from "react";
import * as THREE from "three";
import Blob from "./Blob";

export default function Experience({
  audio,
}: {
  audio: React.MutableRefObject<HTMLAudioElement | null>;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  return (
    <>
      <group ref={groupRef}>
        <Blob audio={audio} />
      </group>
    </>
  );
}
