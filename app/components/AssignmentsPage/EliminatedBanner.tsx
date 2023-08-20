"use client";

import { CadetAssignment } from "@/app/types";
import { useState } from "react";

interface EliminatedBannerProps {
  eliminated: CadetAssignment[];
  dropout?: CadetAssignment[];
}

const EliminatedBanner: React.FC<EliminatedBannerProps> = ({
  eliminated,
  dropout,
}) => {
  const elimType: any = eliminated.length > 0 ? eliminated : dropout;

  return (
    <div className="relative w-full h-[66.666666vh] bg-neutral-900 ">
      <div
        className={`absolute z-10 h-full w-full ${elimType[0]?.cadet.gradient} flex justify-center`}
      >
        {elimType.length > 1 ? (
          <div className="relative w-full h-full border-red-600 border overflow-hidden">
            {elimType[1]?.cadet.gradient !== elimType[0]?.cadet.gradient ? (
              <div
                className={`absolute z-10 h-full w-full rotate-180 ${elimType[1]?.cadet.gradient}`}
              ></div>
            ) : null}
            <div className="flex flex-row relative w-full h-full gap-8 justify-center">
              {elimType.map((cadet: CadetAssignment, i: number) => (
                <img
                  key={i}
                  src={cadet?.cadet.bannerImg[0]}
                  alt={cadet?.cadet?.name}
                  className={`h-full scale-[150%] min-w-max z-20 sepia `}
                />
              ))}
            </div>
            <div className="absolute flex flex-col gap-4 text-right items-end justify-end bottom-0 right-0 font-cyber ">
              {elimType.map((cadet: CadetAssignment, i: number) => (
                <h2
                  key={i}
                  className={`flex z-[1000] bottom-0 right-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full
                    ${
                      elimType[0]?.cadet.name.length > 6 &&
                      elimType[0]?.cadet.name.length < 14
                        ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                        : elimType[0]?.cadet.name.length >= 14 &&
                          elimType[0]?.cadet.name.length < 16
                        ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                        : elimType[0]?.cadet.name.length >= 16
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
          <div className="overflow-hidden relative w-full h-full border-red-600 border justify-center flex">
            <img
              src={elimType[0]?.cadet.bannerImg[0]}
              alt={elimType[0]?.cadet?.name}
              className={`${elimType[0]?.cadet?.bannerPos} flex z-20`}
            />
            <h2
              className={`absolute z-[1000] font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full ${
                elimType[0]?.cadet.name.length > 6 &&
                elimType[0]?.cadet.name.length < 14
                  ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                  : elimType[0]?.cadet.name.length >= 14 &&
                    elimType[0]?.cadet.name.length < 16
                  ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                  : elimType[0]?.cadet.name.length >= 16
                  ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                  : "text-6xl lg:text-9xl max-h-full max-w-full"
              }
          `}
            >
              {elimType[0]?.cadet.name}
            </h2>
          </div>
        )}
        <h2 className="absolute font-cyber z-40 p-4 left-0 top-0 opacity-75 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4">
          {eliminated.length > 0 ? "Eliminated:" : "Dropout:"}
        </h2>
      </div>
    </div>
  );
};

export default EliminatedBanner;
