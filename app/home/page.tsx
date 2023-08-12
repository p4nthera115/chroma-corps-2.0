"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full h-screen w-screen flex-col gap-10">
      <Menu />
      <h1 className="flex text-6xl left-1/2 top-1/2 z-20 absolute"></h1>
      <Canvas shadows>
        <Background />
      </Canvas>
    </div>
  );
};

export default HomePage;
