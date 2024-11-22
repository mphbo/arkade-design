import { useEffect, useRef } from "react";
import { useFrame, extend } from "@react-three/fiber";
import BlobShaderMaterial from "./assets/blobShader";

const Blob = ({ audio }) => {
  const analyser = useRef(null);
  const dataArray = useRef(null);

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    analyser.current = audioContext.createAnalyser();
    analyser.current.fftSize = 256;

    audio.current.play();
    const source = audioContext.createMediaElementSource(audio.current);
    source.connect(analyser.current);
    analyser.current.connect(audioContext.destination);

    dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);

    return () => {
      audioContext.close();
    };
  }, []);
  extend({ BlobShaderMaterial });
  const blobRef = useRef(null);
  useFrame(({ clock }) => {
    analyser.current.getByteFrequencyData(dataArray.current);

    // Calculate the average frequency
    let sum = 0;
    for (let i = 0; i < dataArray.current.length; i++) {
      sum += dataArray.current[i];
    }

    const averageFrequency = sum / dataArray.current.length;
    // @ts-ignore
    blobRef.current.uTime = clock.getElapsedTime();
    // @ts-ignore
    blobRef.current.uFrequency = averageFrequency / 75;
  });
  return (
    <mesh position-y={2.6} position-z={-2.8} scale={1.3}>
      <icosahedronGeometry args={[1.2, 20]} />
      {/* @ts-ignore */}
      <blobShaderMaterial ref={blobRef} wireframe />
    </mesh>
  );
};
export default Blob;
