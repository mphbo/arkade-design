import * as THREE from "three";

type ParamType = number | [number, number, number];

export type StandardModelProps = {
  scale: ParamType;
  position: ParamType;
  rotation: ParamType;
  modelRef?: React.RefObject<THREE.Group | null>;
};
