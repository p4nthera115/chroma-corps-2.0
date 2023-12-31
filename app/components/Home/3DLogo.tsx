import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Logo = () => {
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Wireframe.glb");

    const ref: any = useRef(null);

    useFrame((state, delta) => {
      if (ref.current) {
        return (ref.current.rotation.y += delta);
      }
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={window.innerWidth < 768 ? 1.2 : 1.5}
      />
    );
  };
  return <Logo />;
};

export default Logo;
