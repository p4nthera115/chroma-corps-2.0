"use client";

import { Suspense, useState, useEffect, useRef } from "react";
import { OrbitControls, Scroll, Text3D, Sparkles } from "@react-three/drei";
import Logo from "./3DLogo";
import { Canvas, useThree } from "@react-three/fiber";

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

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -2]);

  return (
    <Suspense fallback={null}>
      <directionalLight
        position={[10 * mousePos.x, 10 * -mousePos.y, 10]}
        intensity={1}
        color={"#FFD7AA"}
      />
      {/* <Text3D font={"./fonts/nicokaku_v2.ttf"}>Hello</Text3D> */}
      <Sparkles size={5} scale={[6, 2, 4]} position={[0, 0, -1]} />
      <pointLight
        castShadow
        position={[0, 20, 0]}
        intensity={200}
        color={"#FFA44B"}
      />
      <Logo />
      <mesh position={[0, 0, -2]} scale={[width, height, 1]}>
        <planeGeometry />
        <meshBasicMaterial color={"#2b2520"} />
      </mesh>
      <ambientLight intensity={100} color={"#ff0000"} />
    </Suspense>
  );
};

export default Background;
