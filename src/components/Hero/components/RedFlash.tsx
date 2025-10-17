import { useState, useEffect } from "react";

interface RedFlashProps {
  active: boolean;
  duration?: number; // fade duration in seconds
  maxOpacity?: number;
}

export const RedFlash: React.FC<RedFlashProps> = ({
  active,
  duration = 2,
  maxOpacity = 0.8,
}) => {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (active) {
      setVisible(true);
      // After the duration, hide it (fade out)
      const timer = setTimeout(() => setVisible(false), duration * 1000);
      return () => clearTimeout(timer);
    }
  }, [active, duration]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "red",
        pointerEvents: "none",
        opacity: visible ? maxOpacity : 0,
        transition: `opacity ${duration}s ease-out`,
        zIndex: 9999,
      }}
    />
  );
};
