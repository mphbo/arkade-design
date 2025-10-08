import type { Controls } from "../types/Controls";

export const getDefaultControls = (customControls?: Partial<Controls>) => {
  return {
    scale: { value: 1, min: 0.1, max: 5 },
    rotationX: { value: 0, min: -10, max: 10 },
    rotationY: { value: 0, min: -10, max: 10 },
    rotationZ: { value: 0, min: -10, max: 10 },
    positionX: { value: 0, min: -10, max: 10 },
    positionY: { value: 0, min: -10, max: 10 },
    positionZ: { value: 0, min: -10, max: 10 },
    ...customControls,
  };
};
