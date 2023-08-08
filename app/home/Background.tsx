import { Suspense, useState, useEffect, useRef } from "react";
import { OrbitControls, Scroll, Text3D, Sparkles } from "@react-three/drei";
import Logo from "../components/HomePage/Logo";
import { Canvas } from "@react-three/fiber";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);

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

  return (
    <Canvas gl={{ alpha: false }}>
      <Suspense fallback={null}>
        <directionalLight
          position={[10 * mousePos.x, 10 * -mousePos.y, 10]}
          intensity={1}
          color={"#FFD7AA"}
        />
        <Sparkles size={5} scale={[6, 2, 4]} position={[0, 0, -1]} />
        <pointLight position={[0, 20, 0]} intensity={200} color={"#FFA44B"} />
        <Logo />
      </Suspense>
    </Canvas>
  );
};

export default Background;
