import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import Logo from "../components/Home/Logo";

const HomeClient = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX / window.innerWidth - 0.5) * 2,
        y: (event.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  console.log(mousePos);

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
        <motion.directionalLight
          position={[10 * mousePos.x, 10 * -mousePos.y, 10]}
          intensity={5}
          color={"#da9708"}
        />
        <Logo />
      </Suspense>
    </Canvas>
  );
};

export default HomeClient;
