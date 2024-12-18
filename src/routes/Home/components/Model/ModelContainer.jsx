import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "./model.module.scss";

function ModelContainer() {
  return (
    <div className={styles.model}>
      <Canvas camera={{ fov: 64, position: [-2, 2, 0] }}>
        <ambientLight intensity={5} />
        <OrbitControls />
        <Model />
      </Canvas>
    </div>
  );
}

export default ModelContainer;
