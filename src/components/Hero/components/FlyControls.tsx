// FlyControls.tsx
import React from "react";
import type { MoveState } from "./CameraMover";

interface FlyControlsProps {
  move: MoveState;
  setMove: React.Dispatch<React.SetStateAction<MoveState>>;
}

export const FlyControls: React.FC<FlyControlsProps> = ({ move, setMove }) => {
  const handleTouchStart = (key: keyof MoveState) =>
    setMove((prev) => ({ ...prev, [key]: true }));

  const handleTouchEnd = (key: keyof MoveState) =>
    setMove((prev) => ({ ...prev, [key]: false }));

  return (
    <div
      style={{
        position: "absolute",
        bottom: 20,
        left: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        zIndex: 10,
      }}
    >
      <button
        onTouchStart={() => handleTouchStart("forward")}
        onTouchEnd={() => handleTouchEnd("forward")}
      >
        Forward
      </button>
      <button
        onTouchStart={() => handleTouchStart("backward")}
        onTouchEnd={() => handleTouchEnd("backward")}
      >
        Back
      </button>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          onTouchStart={() => handleTouchStart("left")}
          onTouchEnd={() => handleTouchEnd("left")}
        >
          Left
        </button>
        <button
          onTouchStart={() => handleTouchStart("right")}
          onTouchEnd={() => handleTouchEnd("right")}
        >
          Right
        </button>
      </div>
    </div>
  );
};
