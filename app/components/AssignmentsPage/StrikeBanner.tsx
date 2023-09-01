"use client";

import { CadetAssignment } from "@/app/types";

interface StrikeBannerProps {
  strike: CadetAssignment[];
}

const StrikeBanner: React.FC<StrikeBannerProps> = ({ strike }) => {
  return (
    <div className="relative w-full h-[33.333333333vh]">
      <div className="absolute h-full w-full ">
        <div
          className={`absolute z-10 h-full w-full ${strike[0]?.cadet.gradient} z-20 border border-neutral-500/50 flex justify-center items-center sepia overflow-hidden`}
        >
          <div
            className={`absolute h-full w-full z-10 ${strike[0]?.cadet.gradient}`}
          ></div>
          <div className="absolute h-full w-full bg-black z-[9]"></div>

          {strike.length > 1 ? (
            <div className="w-full h-full absolute top-[9rem] flex flex-row gap-24 justify-center items-start">
              {strike.map((cadet, i) => (
                <img
                  key={i}
                  src={cadet?.cadet.bannerImg[0]}
                  alt={cadet?.cadet?.name}
                  className={`scale-[300%] h-[20rem] z-10 flex`}
                />
              ))}
            </div>
          ) : (
            <img
              src={strike[0]?.cadet.bannerImg[0]}
              alt={strike[0]?.cadet?.name}
              className={`${strike[0]?.cadet?.strikeBannerPos} absolute z-10 `}
            />
          )}
          <div className="absolute h-full w-full z-20 bg-black/50"></div>
          <h2 className="absolute z-30 flex font-cyber p-6 left-0 top-0 opacity-75 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
            Strike
          </h2>
          <h2
            className={`absolute font-cyber p-6 m-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full z-30 border border-black/60 bg-gradient-to-t from-black/70 to-transparent pointer-events-none`}
          >
            {strike[0]?.cadet.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StrikeBanner;
