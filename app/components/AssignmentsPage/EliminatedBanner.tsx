"use client";

import { CadetAssignment } from "@/app/types";

interface EliminatedBannerProps {
  eliminated: CadetAssignment[];
  dropout?: CadetAssignment[];
}

const EliminatedBanner: React.FC<EliminatedBannerProps> = ({
  eliminated,
  dropout,
}) => {
  return (
    <div className="relative w-screen h-screen bg-black">
      <div
        className={`absolute z-10 h-2/3 w-full ${eliminated[0]?.cadet.gradient} border flex justify-center top-[-28%] overflow-hidden`}
      >
        <img
          src={eliminated[0]?.cadet.bannerImg[0]}
          alt={eliminated[0]?.cadet?.name}
          className={`${eliminated[0]?.cadet?.bannerPos} z-20 sepia `}
        />
        <h2 className="absolute font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4">
          Eliminated
        </h2>
        <h2
          className={`absolute font-cyber p-4 right-0 bottom-0 ${
            eliminated[0]?.cadet.name.length > 6 &&
            eliminated[0]?.cadet.name.length < 14
              ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
              : eliminated[0]?.cadet.name.length >= 14 &&
                eliminated[0]?.cadet.name.length < 16
              ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
              : eliminated[0]?.cadet.name.length >= 16
              ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
              : "text-6xl lg:text-9xl max-h-full max-w-full"
          }`}
        >
          {eliminated[0]?.cadet.name}
        </h2>
      </div>
    </div>
  );
};

export default EliminatedBanner;
