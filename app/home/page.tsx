"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Border from "./Border";
import Title from "./Title";
import Carousel from "./Carousel";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600] diagonal-lines-yellow">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-[#ffe600] border-black h-[78%] w-[30%]"></div>

      <Canvas className="z-30">
        <Background />
      </Canvas>
      <div className="absolute top-0 w-[98vw] h-screen  bg-transparent z-20 overflow-hidden"></div>
      <Border />
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
