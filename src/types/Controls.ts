export type Control = {
  value: number;
  min: number;
  max: number;
};

export type Controls = {
  scale: Control;
  rotationX: Control;
  rotationY: Control;
  rotationZ: Control;
  positionX: Control;
  positionY: Control;
  positionZ: Control;
  [key: string]: Control; // allows extra/custom controls
};
