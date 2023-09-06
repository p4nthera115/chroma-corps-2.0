"use client";

import { useState, useEffect } from "react";
import Logo from "./3DLogo";
import { OrbitControls, Preload } from "@react-three/drei";

const Background = () => {
  const [windowWidth, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      {windowWidth > 768 && <OrbitControls enableZoom={false} />}
      <Logo />
      <Preload />
    </>
  );
};

export default Background;
