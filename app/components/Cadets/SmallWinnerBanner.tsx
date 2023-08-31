"use client";

import { Cadet } from "@/app/types";

interface SmallWinnerBannerProps {
  winner: Cadet;
}

const SmallWinnerBanner: React.FC<SmallWinnerBannerProps> = ({ winner }) => {
  return (
    <div
      className={`relative h-[33.333333333vh] z-10 border-[0.5px] border-white/20 w-full ${winner.gradient} z-20  flex justify-center items-center   overflow-hidden`}
    >
      <div className="w-full h-full absolute top-[9rem] flex flex-row gap-24 justify-center items-start">
        <img
          src={winner.bannerImg[0]}
          alt={winner.name}
          className={`scale-[300%] h-[20rem] z-10 flex`}
        />
      </div>

      <h2
        className={`absolute font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full z-30`}
      >
        {winner.name}
      </h2>
    </div>
  );
};

export default SmallWinnerBanner;
