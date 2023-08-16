"use client";

import { Suspense, useState, useEffect } from "react";
import Logo from "./3DLogo";
import { useThree, useFrame } from "@react-three/fiber";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      <Logo />
    </Suspense>
  );
};

export default Background;
