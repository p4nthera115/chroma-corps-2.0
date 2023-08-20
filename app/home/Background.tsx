"use client";

import { useState, useEffect } from "react";
import Logo from "./3DLogo";
import { OrbitControls } from "@react-three/drei";

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [shaderRefCheck, setShaderRefCheck] = useState(false);
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      {windowWidth > 768 && <OrbitControls enableZoom={false} />} <Logo />
    </>
  );
};

export default Background;
