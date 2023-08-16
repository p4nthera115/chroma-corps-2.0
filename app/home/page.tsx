"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Border from "./Border";
import Title from "./Title";
import Carousel from "./Carousel";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600]">
      <Border />
      <Canvas>
        <Background />
      </Canvas>
      <section className="absolute top-0 z-[1000] h-full w-full pointer-events-none">
        <Title />
      </section>
      {/* <section className="flex"> */}
      <Carousel />
      {/* </section> */}
    </div>
  );
};

export default HomePage;
