"use client";

import { CadetAssignment } from "@/app/types";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  console.log(winner);

  const [name, setName] = useState("WINNERS");

  useEffect(() => {
    {
      winner.length > 1 ? setName("WINNERS") : setName("WINNER");
    }
  }, [winner]);

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
    <div className="relative w-full h-[66.666666vh] ">
      <div
        className={` z-10 h-full w-full ${
          winner.length == 1 && winner[0]?.cadet.gradient
        }  flex justify-center`}
      >
        {winner.length >= 2 ? (
          <div className="relative w-full h-full">
            {/* {winner[1]?.cadet.gradient !== winner[0]?.cadet.gradient ? (
              <div
                className={` z-10 h-full w-full rotate-180 ${winner[1]?.cadet.gradient}`}
              ></div>
            ) : null} */}
            <div className="flex flex-row relative w-full h-full gap-16 justify-evenly">
              <img
                src={winner[0]?.cadet.bannerImg[0]}
                alt={winner[0]?.cadet?.name}
                className={`h-full scale-[150%] min-w-max z-20 left-[8rem] ${
                  winner[0]?.cadet.gradient !== winner[1]?.cadet.gradient &&
                  winner[0]?.cadet.gradient
                } `}
              />
              <img
                src={winner[1]?.cadet.bannerImg[0]}
                alt={winner[1]?.cadet?.name}
                className={`h-full scale-[150%] min-w-max z-20 right-[8rem] ${
                  winner[1]?.cadet.gradient !== winner[0]?.cadet.gradient &&
                  winner[1]?.cadet.gradient
                } `}
              />
              {winner.length >= 3 ? (
                <img
                  src={winner[2]?.cadet.bannerImg[0]}
                  alt={winner[2]?.cadet.name}
                  className={`h-full scale-[150%] min-w-max z-20 `}
                />
              ) : null}
            </div>
            <div className="absolute flex z-50 flex-row p-4 text-center items-center justify-between -bottom-4 w-full font-cyber ">
              {winner.map((cadet, i) => (
                <h2
                  key={i}
                  className={`flex 
                    ${
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
                  {cadet.cadet.name}
                </h2>
              ))}
            </div>
          </div>
        ) : (
          <>
            <img
              src={winner[0]?.cadet.bannerImg[0]}
              alt={winner[0]?.cadet?.name}
              className={`${winner[0]?.cadet?.bannerPos} z-20`}
            />
            <h2
              className={`absolute z-30 font-cyber p-4 right-0 bottom-0 ${
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
          </>
        )}

        {winner.length > 1 ? (
          <h2 className="absolute z-30 font-cyber p-4 -top-24 inset-0 mt-8 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
            Winners:
          </h2>
        ) : (
          <h2 className="absolute z-30 font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4 ">
            Winner:
          </h2>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default WinnerBanner;
