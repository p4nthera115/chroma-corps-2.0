import { useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Fog = () => {
  const fogRef = useRef(false);
  const { scene, camera } = useThree();

  // Create fog
  if (!fogRef.current) {
    const color = "#000"; // Fog color
    const near = 1; // Near distance
    const far = 10; // Far distance
    scene.fog = new THREE.Fog(color, near, far);
    fogRef.current = true;
  }

  return (
    <>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default Fog;
