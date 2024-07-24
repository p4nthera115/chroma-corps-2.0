"use client";

import Menu from "../components/Menu/Menu";
import Border from "../components/Home/Border";
import { TitleLeft, TitleRight } from "../components/Home/Title";
import Carousel from "../components/Home/Carousel";
import Background from "../components/Home/Background";
import { Canvas } from "@react-three/fiber";
import Announcement from "../components/Home/Announcement";
import Bio from "../components/Home/Bio";
import Sinix from "../components/Home/Sinix";
import Footer from "../components/Home/Footer";
import { Suspense, useEffect } from "react";
interface homeProps {
  isLoading: boolean;
}

const HomeClient: React.FC<homeProps> = ({ isLoading }) => {
  useEffect(() => {
    (function () {
      if (window.localStorage) {
        if (!localStorage.getItem("firstLoad")) {
          localStorage["firstLoad"] = true;
          window.location.reload();
        } else localStorage.removeItem("firstLoad");
      }
    })();
  }, []);

  return (
    <div className="m-0 p-0 max-h-full max-w-full h-screen w-screen bg-[#ffe600] diagonal-lines-black">
      <Border />

      <div className="block absolute top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 translate-y-[-62%] border bg-[#ffe600] border-black h-[60%] w-[75%] md:h-[78%] md:w-[30%]"></div>

      <div className="absolute z-[1001]">
        <Menu iconPosition={{ margin: "m-2 md:m-6" }} />
      </div>

      <header className="md:hidden absolute h-full w-full font-cyber text-6xl max-w-full font-extrabold justify-center block text-black">
        <h1 className="absolute bottom-16 mb-2 left-1/2 -translate-x-1/2">
          CHROMA
        </h1>
        <h1 className="absolute bottom-0 mb-2 left-1/2 -translate-x-1/2">
          CORPS
        </h1>
      </header>

      <Canvas className="z-30 md:cursor-grab md:active:cursor-grabbing md:h-full h-full md:block md:top-0 absolute -top-[5rem]">
        <Suspense>
          <Background />
        </Suspense>
      </Canvas>

      <header className="hidden md:absolute md:flex flex-row justify-between pointer-events-none md:pointer-events-none top-0 xl:gap-[55%] lg:gap-[45%] md:gap-[30%] z-[1000] h-full w-full cursor-default select-none scale-75 md:scale-100 overflow-hidden">
        <TitleLeft />
        <TitleRight />
      </header>

      {/* <section className="relative w-full">
        <Announcement />
      </section> */}

      <section className="relative h-full w-full">
        <Bio />
      </section>

      <section className="relative h-1/2 w-full overflow-hidden">
        <Carousel />
      </section>

      <section className="relative h-full w-full">
        <Sinix />
      </section>

      <footer className="relative h-2/5 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeClient;
