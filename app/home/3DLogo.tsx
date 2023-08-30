import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Logo = () => {
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Wireframe.glb");

    const ref: any = useRef(null);
    const [click, setClick] = useState(false);

    useFrame((state, delta) => {
      if (ref.current) {
        return (ref.current.rotation.y += delta);
      }

      if (click) {
        ref.current.rotation.y += Math.PI * 2;
        setClick(false);
      }
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={window.innerWidth < 768 ? 1.3 : 1.5}
        onClick={() => setClick(true)}
      />
    );
  };
  return <Logo />;
};

export default Logo;
