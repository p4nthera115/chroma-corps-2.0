"use client";

import { useState } from "react";
import Menu from "../components/Menu/Menu";
import Image from "next/image";
import Border from "./Border";
import { TitleLeft, TitleRight } from "./Title";
import Carousel from "./Carousel";
import Background from "./Background";
import { Canvas } from "@react-three/fiber";
import Bio from "./Bio";
import Sinix from "./Sinix";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

const HomePage = () => {
  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600] diagonal-lines-yellow">
      <Border />
      {/* <ScrollProgress /> */}

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border bg-[#ffe600] border-black h-[78%] w-[30%]"></div>

      <div className="absolute z-[1001]">
        <Menu />
      </div>

      <Canvas className="z-30 cursor-grab active:cursor-grabbing">
        <Background />
      </Canvas>

      <header className="absolute top-0 z-[1000] h-full w-1/4 cursor-default select-none">
        <TitleLeft />
      </header>
      <header className="absolute right-0 top-0 z-[1000] h-full w-1/4 select-none cursor-default">
        <TitleRight />
      </header>

      <section className="relative h-full w-full">
        <Bio />
      </section>

      {/* <div className="relative h-1/4 w-[99%] translate-x-[0.3rem] bg-[#ffe600] diagonal-lines-yellow"></div> */}
      <section className="relative h-1/2 w-full overflow-hidden">
        <Carousel />
      </section>
      {/* <div className="relative h-1/4 w-[99%] translate-x-[0.3rem] bg-[#ffe600] diagonal-lines-yellow"></div> */}

      <section className="relative h-full w-full">
        <Sinix />
      </section>

      <footer className="relative h-2/5 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
