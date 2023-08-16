import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Logo = () => {
  // クロマ隊
  const Logo: any = () => {
    const { scene } = useGLTF("/models/CCLogoWireframe.glb");

    const ref: any = useRef(null);

    useFrame(() => {
      if (ref.current) {
        return (ref.current.rotation.y += 0.01);
      }
    });

    return <primitive ref={ref} object={scene} scale={1.5} />;
  };
  return <Logo />;
};

export default Logo;
