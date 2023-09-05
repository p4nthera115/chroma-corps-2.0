"use client";

import { useState, useEffect } from "react";
import Logo from "./3DLogo";
import { OrbitControls } from "@react-three/drei";

const Background = () => {
  const [windowWidth, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
    setLoading(false);
  }, []);

  return (
    <>
      {windowWidth > 768 && <OrbitControls enableZoom={false} />}
      {!loading && <Logo />}
    </>
  );
};

export default Background;
