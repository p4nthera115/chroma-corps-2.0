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
    <div className="relative w-screen h-[66.6666vh] bg-black">
      <div
        className={`absolute z-10 h-full w-full ${elimType[0]?.cadet.gradient} border flex justify-center overflow-hidden`}
      >
        <img
          src={elimType[0]?.cadet.bannerImg[0]}
          alt={elimType[0]?.cadet?.name}
          className={`${elimType[0]?.cadet?.bannerPos} z-20 sepia translate-y-4`}
        />
        <h2 className="absolute font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4">
          {eliminated.length > 0 ? "Eliminated" : "Dropout"}
        </h2>
        <h2
          className={`absolute font-cyber p-4 right-0 bottom-0 ${
            elimType[0]?.cadet.name.length > 6 &&
            elimType[0]?.cadet.name.length < 14
              ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
              : elimType[0]?.cadet.name.length >= 14 &&
                elimType[0]?.cadet.name.length < 16
              ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
              : elimType[0]?.cadet.name.length >= 16
              ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
              : "text-6xl lg:text-9xl max-h-full max-w-full"
          }`}
        >
          {elimType[0]?.cadet.name}
        </h2>
      </div>
    </div>
  );
};

export default EliminatedBanner;
