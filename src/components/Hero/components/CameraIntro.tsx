import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    // Start camera at startPos
    camera.position.set(...startPos);

    // Animate to endPos
    gsap.to(camera.position, {
      x: endPos[0],
      y: endPos[1],
      z: endPos[2],
      duration,
      ease: "power1.in",
    });
  }, [camera]);

  return null;
};
