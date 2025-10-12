// CameraMover.tsx
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

export type MoveState = {
  forward: boolean;
  backward: boolean;
  left: boolean;
  right: boolean;
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

  useFrame(() => {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);

    if (move.forward) camera.position.addScaledVector(direction, speed);
    if (move.backward) camera.position.addScaledVector(direction, -speed);

    const right = new THREE.Vector3();
    right.crossVectors(camera.up, direction).normalize();
    if (move.left) camera.position.addScaledVector(right, speed);
    if (move.right) camera.position.addScaledVector(right, -speed);
  });

  return null;
};
