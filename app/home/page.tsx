"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Border from "./Border";
import { TitleLeft, TitleRight } from "./Title";
import Carousel from "./Carousel";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";

const HomePage = () => {
  const images = ["/images/cc.jpg", "/images/backdrop.png"];
  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600] diagonal-lines-yellow">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-[#ffe600] border-black h-[78%] w-[30%]"></div>

      <div className="absolute z-[1001]">
        <Menu />
      </div>
      <Canvas className="z-30 cursor-pointer">
        <Background />
      </Canvas>
      {/* <div className="absolute top-0 w-[98vw] h-screen  bg-transparent z-20 overflow-hidden"></div> */}
      <Border />
      <section className="absolute top-0 z-[1000] h-full w-1/4 cursor-default select-none">
        <TitleLeft />
      </section>
      <section className="absolute right-0 top-0 z-[1000] h-full w-1/4 select-none cursor-default">
        <TitleRight />
      </section>
      <section className="relative h-1/4 w-[99%] translate-x-[0.3rem] bg-[#ffe600] diagonal-lines-yellow"></section>
      <section className="relative h-1/2 w-full overflow-hidden">
        <Carousel />
      </section>
      <section className="relative h-1/2 w-[99%] translate-x-[0.3rem] bg-[#ffe600] diagonal-lines-yellow"></section>
    </div>
  );
};

export default HomePage;
