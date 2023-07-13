"use client";

import { CadetAssignment } from "@/app/types";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  return (
    <div className="relative w-screen h-screen bg-neutral-900 ">
      <div
        className={`absolute z-10 h-2/3 w-full ${winner[0]?.cadet.gradient} border flex justify-center top-10`}
      >
        <img
          src={winner[0]?.cadet.bannerImg[0]}
          alt={winner[0]?.cadet?.name}
          className={`${winner[0]?.cadet?.bannerPos} z-20`}
        />
        <h2 className="absolute font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4 ">
          Winner
        </h2>
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
          }`}
        >
          {winner[0]?.cadet.name}
        </h2>
      </div>
    </div>
  );
};

export default WinnerBanner;
