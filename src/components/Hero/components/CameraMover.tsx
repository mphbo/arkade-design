// CameraMover.tsx
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

export type MoveState = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
  up: boolean;
  down: boolean;
};

type CameraMoverProps = {
  move: MoveState;
  speed?: number;
};

export const CameraMover: React.FC<CameraMoverProps> = ({
  move,
  speed = 0.2,
}) => {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const direction = new THREE.Vector3();
    const moveDistance = speed * delta;
    camera.getWorldDirection(direction);

    if (move.forward) camera.position.addScaledVector(direction, moveDistance);
    if (move.backward)
      camera.position.addScaledVector(direction, -moveDistance);

    const right = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0); // world Y-axis
    right.crossVectors(camera.up, direction).normalize();
    if (move.up) camera.position.addScaledVector(up, moveDistance);
    if (move.down) camera.position.addScaledVector(up, -moveDistance);
    if (move.left) camera.position.addScaledVector(right, moveDistance);
    if (move.right) camera.position.addScaledVector(right, -moveDistance);
  });

  return null;
};
