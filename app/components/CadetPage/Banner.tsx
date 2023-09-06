"use client";

import { Cadet } from "@/app/types";
import { useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineTwitter,
} from "react-icons/ai";
import { motion } from "framer-motion";
import Camera from "./Camera";
import Socials from "./Socials";
import Image from "next/image";

interface BannerProps {
  cadet: Cadet | undefined;
  year: string;
}

const Banner: React.FC<BannerProps> = ({ cadet, year }) => {
  const [name, setName] = useState(cadet?.name.toUpperCase());
  const [cadetImg, setCadetImg] = useState(cadet?.bannerImg[0]);
  const [index, setIndex] = useState(1);
  const [index2, setIndex2] = useState(1);
  const [open, setOpen] = useState(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return cadet?.name.toUpperCase()[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      if (name.length >= 11) {
        iterations += 2;
      }
      iterations += 1;
    }, 80);
  };

  const imgArr: any = cadet?.bannerImg;

  function nextImg() {
    setIndex((index + 1) % imgArr.length);
    setCadetImg(imgArr[index]);
    setIndex2(index + 1);
  }

  return (
    <div
      className={`
        relative 
        h-screen 
        w-screen 
        flex 
        overflow-hidden
        ${cadet?.bgLines}
      `}
    >
      <div className="relative h-full w-full p-4">
        <div className={`relative flex flex-row gap-2 h-full w-full`}>
          <section className="relative flex flex-col gap-2 h-full w-full md:w-3/5">
            <div className="relative flex w-full h-3/4 justify-center border rounded-lg md:border-none">
              <button
                className={`absolute left-0 h-10 w-10 m-4 ${cadet?.teamColor} rounded md:hidden cursor-pointer z-50 animate-pulse`}
                onClick={() => (imgArr.length === 1 ? null : nextImg())}
              >
                <p className="font-cyber text-xs font-bold text-black cursor-default">
                  {index2} / {imgArr.length}
                </p>
              </button>

              <div className="block md:hidden absolute left-11 top-16 m-4">
                <Socials cadet={cadet} />
              </div>

              <Image
                src={`${cadetImg}`}
                alt={cadet?.name}
                width={100}
                height={100}
                quality={100}
                loading="eager"
                priority
                unoptimized={true}
                className={`
                  md:hidden
                  absolute
                  h-full
                  scale-[150%]
                  min-w-max
                  top-20
                  object-contain
                `}
              />

              <Camera cadet={cadet} cadetImg={cadetImg} />
            </div>
            <header
              className={`relative flex w-full h-1/4 border rounded-lg  items-center p-3 cursor-default justify-center md:justify-normal bg-neutral-900/50 md:bg-neutral-900 `}
            >
              <h1
                onMouseOver={hoverAnimation}
                className={`font-cyber z-50 ${
                  name.length >= 6 &&
                  name.length < 14 &&
                  cadet?.name !== "Edouardtredan" &&
                  cadet?.name !== "Slimeslugger"
                    ? "text-3xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl max-h-full max-w-full md:pl-4"
                    : name.length >= 14 && name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full md:pl-2"
                    : name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full md:pl-2"
                    : cadet?.name === "Edouardtredan"
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full md:pl-2"
                    : cadet?.name === "Slimeslugger"
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full md:pl-2"
                    : "text-6xl lg:text-9xl max-h-full max-w-full"
                }`}
              >
                {name}
              </h1>
              <div className="hidden md:block">
                <Socials cadet={cadet} />
              </div>
            </header>
          </section>
          <section
            className={` ${
              cadet?.name === "Ofelia0u8" && "overflow-hidden"
            } relative md:flex flex-col gap md:h-full md:w-2/5 hidden`}
          >
            <div
              className={`relative flex flex-row w-full h-[10%] border rounded-t-lg ${cadet?.teamColor}`}
            ></div>
            <button
              className={`relative flex w-full h-[90%] border rounded-b-lg justify-center ${
                cadet?.teamColorHoverOpacity
              } ${imgArr.length === 1 ? "cursor-default" : "cursor-pointer"}`}
              onClick={() => (imgArr.length === 1 ? null : nextImg())}
            >
              <p className="absolute font-cyber left-0 pl-2 cursor-default">
                {index2} / {imgArr.length}
              </p>
              <p className="absolute font-cyber right-0 pr-2 text-xs lg:text-base cursor-default">
                {year} <span className="animate-pulse">_</span>
              </p>
              <img
                src={cadet?.palette}
                alt="color palette"
                className="absolute left-0 bottom-0 h-[9rem] m-4 border-[0.5px]"
              />
              <Image
                src={`${cadetImg}`}
                alt={cadet?.name}
                width={100}
                height={100}
                quality={100}
                loading="eager"
                priority
                unoptimized={true}
                className={`${cadet?.bannerPos} z-[49] object-contain`}
              />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
