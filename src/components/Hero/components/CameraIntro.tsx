import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

export const CameraIntro = ({
  startPos,
  endPos,
  duration = 3,
}: {
  startPos: [number, number, number];
  endPos: [number, number, number];
  duration?: number;
}) => {
  const { camera } = useThree();

  useEffect(() => {
    // Start camera at startPos
    camera.position.set(...startPos);

    // Animate to endPos
    gsap.to(camera.position, {
      x: endPos[0],
      y: endPos[1],
      z: endPos[2],
      duration,
      ease: "power2.out",
    });
  }, [camera, startPos, endPos, duration]);

  return null;
};
