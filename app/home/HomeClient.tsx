import { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import Logo from "../components/Home/Logo";

const HomeClient = () => {
  return (
    <Suspense
      fallback={
        <mesh position-y={0.5} scale={[2, 2, 2]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color="red" />
        </mesh>
      }
    >
      <Canvas>
        <spotLight position={[10, 10, 10]} intensity={20} color={"#da9708"} />
      </Canvas>
      <Logo />
    </Suspense>
  );
};

export default HomeClient;
