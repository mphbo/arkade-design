import React from "react";
import type { MoveState } from "./CameraMover";

interface FlyControlsProps {
  setMove: React.Dispatch<React.SetStateAction<MoveState>>;
}

export const FlyControls: React.FC<FlyControlsProps> = ({ setMove }) => {
  const handleTouchStart = (key: keyof MoveState) =>
    setMove((prev) => ({ ...prev, [key]: true }));

  const handleTouchEnd = (key: keyof MoveState) =>
    setMove((prev) => ({ ...prev, [key]: false }));

  const buttonStyle: React.CSSProperties = {
    width: 60,
    height: 60,
    borderRadius: "50%",
    background: "rgba(0,0,0,0.7)",
    color: "white",
    fontSize: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    touchAction: "none",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        display: "grid",
        gridTemplateColumns: "60px 60px 60px",
        gridTemplateRows: "60px 60px 60px",
        gap: 10,
        zIndex: 100,
      }}
    >
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("forward")}
        onTouchEnd={() => handleTouchEnd("forward")}
      >
        ⬆
      </div>
      <div />
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("backward")}
        onTouchEnd={() => handleTouchEnd("backward")}
      >
        ⬇
      </div>
      {/* Empty top-left */}
      <div />
      {/* Forward button */}
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("up")}
        onTouchEnd={() => handleTouchEnd("up")}
      >
        ↑
      </div>
      <div />
      {/* Left button */}
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("left")}
        onTouchEnd={() => handleTouchEnd("left")}
      >
        ←
      </div>
      {/* Down button */}
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("down")}
        onTouchEnd={() => handleTouchEnd("down")}
      >
        ↓
      </div>
      {/* Right button */}
      <div
        style={buttonStyle}
        onTouchStart={() => handleTouchStart("right")}
        onTouchEnd={() => handleTouchEnd("right")}
      >
        →
      </div>
    </div>
  );
};
