import { useGLTF } from "@react-three/drei";

const Logo = () => {
  // クロマ隊
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Logo.glb");

    return <primitive object={scene} scale={2.5} wireframe />;
  };
  return <Logo />;
};

export default Logo;
