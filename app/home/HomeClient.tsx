import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const HomeClient = () => {
  const Logo: any = () => {
    const { scene } = useGLTF("/models/Logo.glb");
    return <primitive object={scene} scale={2} />;
  };
  return (
    <Canvas>
      <Suspense
        fallback={
          <mesh position-y={0.5} scale={[2, 2, 2]}>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial wireframe color="red" />
          </mesh>
        }
      >
        <Logo />
        {/* <directionalLight position={[1, 2, 3]} intensity={1.5} /> */}
        {/* <ambientLight intensity={1.5} /> */}
        <spotLight position={[10, 10, 10]} intensity={20} color={"#da9708"} />
      </Suspense>
    </Canvas>
  );
};

export default HomeClient;
