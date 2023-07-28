"use client";

import { useState } from "react";
import { LoadingScreen } from "../components/CadetPage/Loading/LoadingScreen";
import Menu from "../components/Menu/Menu";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";
import HomeClientOld from "./HomeClientOld";

const HomePage = () => {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full h-screen w-screen flex-col gap-10">
      <Menu />
      <HomeClientOld />
      <Canvas>
        <Background />
      </Canvas>
    </div>
  );
};

export default HomePage;
