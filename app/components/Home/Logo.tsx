import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const Logo = () => {
  // クロマ隊
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Logo.glb");
    return <primitive object={scene} scale={2} />;
  };
  return <Logo />;
};

export default Logo;
