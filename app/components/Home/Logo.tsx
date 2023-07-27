import { useGLTF } from "@react-three/drei";

const Logo = () => {
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Logo.glb");
    return <primitive object={scene} scale={2} />;
  };
  return <Logo />;
};

export default Logo;
