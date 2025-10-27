import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useState } from "react";

export function CameraDistance({
  position,
}: {
  position: { x: number; y: number; z: number };
}) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 5,
        left: 5,
        color: "white",
        background: "rgba(0,0,0,0.5)",
        padding: "5px 10px",
        borderRadius: 4,
        fontFamily: "monospace",
      }}
    >
      <div>Camera X: {position.x}</div>
      <div>Camera Y: {position.y}</div>
      <div>Camera Z: {position.z}</div>
    </div>
  );
}
