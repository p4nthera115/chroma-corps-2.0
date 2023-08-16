import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Logo = () => {
  // クロマ隊
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Logo.glb");

    const ref = useRef(null);

    useFrame(() => {
      if (ref.current) {
        return (ref.current.rotation.y += 0.03);
      }
    });

    console.log(scene);

    return <primitive ref={ref} object={scene} scale={2} positionZ={2} />;
  };
  return <Logo />;
};

export default Logo;
