"use client";

import { CadetAssignment } from "@/app/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  const router = useRouter();
  const pathname = usePathname();
  const year = pathname.slice(8, 12);

  useEffect(() => {
    {
      winner.length > 1 ? setName("WINNERS") : setName("WINNER");
    }
  }, [winner]);

  const [name, setName] = useState("WINNERS");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return "WINNERS"[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      iterations += 3;
    }, 80);
  };

  return (
    <div className="relative w-full h-full max-w-full max-h-full">
      <div
        className={`z-10 h-full w-full
            flex flex-col justify-center`}
      >
        <motion.div className="flex flex-col">
          <h2
            className="relative text-center mx-auto z-30 font-cyber cursor-default text-xl md:text-4xl lg:text-5xl xl:text-6xl max-h-fit max-w-full border-2 p-6 md:p-8 m-3 w-3/4 md:w-1/2"
            onMouseOver={hoverAnimation}
          >
            {name}
          </h2>
        </motion.div>
        {/**
         * TWO WINNERS
         */}
        {winner.length === 2 && (
          <div
            className={`block relative w-full h-full sm:flex flex-row justify-evenly mt-12 max-h-[90%] ${
              winner[0].cadet.teamColor === winner[1].cadet.teamColor &&
              // winner[0].cadet.teamColor === winner[2]?.cadet.teamColor &&
              winner[0].cadet.gradient
            }`}
          >
            <div
              className="hover:cursor-pointer flex flex-col font-cyber text-center mx-auto"
              onClick={() =>
                router.push(`/cadets/${year}/${winner[0]?.cadet.name}`)
              }
            >
              <h2
                className={`z-30 pointer-events-none  flex mx-auto ${
                  winner[0]?.cadet.name.length > 6 &&
                  winner[0]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 14 &&
                      winner[0]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-8xl max-h-full max-w-full"
                }`}
              >
                {winner[0]?.cadet.name}
              </h2>
              <img
                src={winner[0]?.cadet.bannerImg[0]}
                alt={winner[0]?.cadet?.name}
                className={`h-full scale-[100%] md:max-w-full min-w-max px-0 md:px-28  sm:scale-[80%] lg:scale-[100%] z-20 ${
                  winner[0].cadet.teamColor === winner[1].cadet.teamColor
                    ? // winner[0].cadet.teamColor === winner[2]?.cadet.teamColor
                      null
                    : winner[0].cadet.gradient
                }`}
              />
            </div>
            <div
              className="hover:cursor-pointer flex flex-col font-cyber text-center mx-auto"
              onClick={() =>
                router.push(`/cadets/${year}/${winner[1]?.cadet.name}`)
              }
            >
              <h2
                className={`z-30 pointer-events-none flex mx-auto ${
                  winner[1]?.cadet.name.length > 6 &&
                  winner[1]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : winner[1]?.cadet.name.length >= 14 &&
                      winner[1]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[1]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-8xl max-h-full max-w-full"
                }`}
              >
                {winner[1]?.cadet.name}
              </h2>
              <img
                src={winner[1]?.cadet.bannerImg[0]}
                alt={winner[1]?.cadet?.name}
                className={`h-full scale-[100%] md:max-w-full min-w-max px-0 md:px-28 sm:scale-[80%] lg:scale-[100%] z-20 ${
                  winner[1].cadet.teamColor === winner[0].cadet.teamColor
                    ? // winner[1].cadet.teamColor === winner[2]?.cadet.teamColor
                      null
                    : winner[1].cadet.gradient
                }`}
              />
            </div>
          </div>
        )}
        {/*
         * THREE WINNERS
         */}
        {winner.length >= 3 && (
          <div
            className={`block relative w-full h-full sm:flex flex-row justify-evenly mt-12 max-h-[90%] ${
              winner[0].cadet.teamColor === winner[1].cadet.teamColor &&
              winner[0].cadet.teamColor === winner[2]?.cadet.teamColor &&
              winner[0].cadet.centreGradient
            }`}
          >
            <div
              className="hover:cursor-pointer flex flex-col font-cyber text-center mx-auto max-w-full"
              onClick={() =>
                router.push(`/cadets/${year}/${winner[0]?.cadet.name}`)
              }
            >
              <h2
                className={`z-30 pointer-events-none  flex mx-auto ${
                  winner[0]?.cadet.name.length > 6 &&
                  winner[0]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-6xl max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 14 &&
                      winner[0]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-8xl max-h-full max-w-full"
                }`}
              >
                {winner[0]?.cadet.name}
              </h2>
              <img
                src={winner[0]?.cadet.bannerImg[0]}
                alt={winner[0]?.cadet?.name}
                className={`h-full scale-[100%] md:max-w-full sm:scale-[80%] lg:scale-[100%] z-20 ${
                  winner[0].cadet.teamColor === winner[1].cadet.teamColor &&
                  winner[0].cadet.teamColor === winner[2]?.cadet.teamColor
                    ? null
                    : winner[0].cadet.gradient
                }`}
              />
            </div>
            <div
              className="hover:cursor-pointer flex flex-col font-cyber text-center mx-auto"
              onClick={() =>
                router.push(`/cadets/${year}/${winner[1]?.cadet.name}`)
              }
            >
              <h2
                className={`z-30 pointer-events-none flex mx-auto ${
                  winner[1]?.cadet.name.length > 6 &&
                  winner[1]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : winner[1]?.cadet.name.length >= 14 &&
                      winner[1]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[1]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-8xl max-h-full max-w-full"
                }`}
              >
                {winner[1]?.cadet.name}
              </h2>
              <img
                src={winner[1]?.cadet.bannerImg[0]}
                alt={winner[1]?.cadet?.name}
                className={`h-full scale-[100%] md:max-w-full sm:scale-[80%] lg:scale-[100%] z-20 ${
                  winner[1].cadet.teamColor === winner[0].cadet.teamColor &&
                  winner[1].cadet.teamColor === winner[2]?.cadet.teamColor
                    ? null
                    : winner[1].cadet.gradient
                }`}
              />
            </div>
            <div
              className="hover:cursor-pointer flex flex-col font-cyber text-center mx-auto"
              onClick={() =>
                router.push(`/cadets/${year}/${winner[2]?.cadet.name}`)
              }
            >
              <h2
                className={`z-30 pointer-events-none  flex mx-auto ${
                  winner[2]?.cadet.name.length > 6 &&
                  winner[2]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : winner[2]?.cadet.name.length >= 14 &&
                      winner[2]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[2]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-8xl max-h-full max-w-full"
                }`}
              >
                {winner[2]?.cadet.name}
              </h2>
              <img
                src={winner[2]?.cadet.bannerImg[0]}
                alt={winner[2]?.cadet.name}
                className={`h-full scale-[80%] md:max-w-full sm:scale-[80%] lg:scale-[100%] z-20 ${
                  winner[2].cadet.teamColor === winner[0].cadet.teamColor &&
                  winner[2].cadet.teamColor === winner[1]?.cadet.teamColor
                    ? null
                    : winner[2].cadet.gradient
                }`}
              />
            </div>
          </div>
        )}
        {/**
         * IF ONE WINNER
         */}
        {winner.length === 1 && (
          <div
            className="hover:cursor-pointer"
            onClick={() =>
              router.push(`/cadets/${year}/${winner[0]?.cadet.name}`)
            }
          >
            <img
              src={winner[0]?.cadet.bannerImg[0]}
              alt={winner[0]?.cadet?.name}
              className={`${winner[0]?.cadet?.bannerPos} z-20`}
            />
            <h2
              className={`absolute font-cyber p-4 right-0 bottom-0 ${
                winner[0]?.cadet.name.length > 6 &&
                winner[0]?.cadet.name.length < 14
                  ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                  : winner[0]?.cadet.name.length >= 14 &&
                    winner[0]?.cadet.name.length < 16
                  ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                  : winner[0]?.cadet.name.length >= 16
                  ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                  : "text-6xl lg:text-9xl max-h-full max-w-full"
              }
          `}
            >
              {winner[0]?.cadet.name}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WinnerBanner;
