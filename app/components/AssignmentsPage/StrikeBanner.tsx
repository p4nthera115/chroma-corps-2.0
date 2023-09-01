"use client";

import { CadetAssignment } from "@/app/types";

interface StrikeBannerProps {
  strike: CadetAssignment[];
}

const StrikeBanner: React.FC<StrikeBannerProps> = ({ strike }) => {
  return (
    <div className="relative w-full h-[66.666666vh] bg-black font-cyber text-white">
      <div className="absolute h-full w-full flex justify-between">
        <div
          className={`absolute z-10 h-full w-full ${strike[0]?.cadet.gradient} z-20 border border-neutral-500/50 flex justify-center items-center sepia overflow-hidden`}
        >
          <div
            className={`absolute h-full w-full z-10 ${strike[0]?.cadet.gradient}`}
          ></div>
          <div className="absolute h-full w-full bg-black z-[9]"></div>

          {strike.length > 1 ? (
            <div className="relative w-full h-full">
              <div className="flex md:flex-row relative w-full h-full gap-4 justify-between">
                {strike.map((cadet: CadetAssignment, i: number) => (
                  <div
                    key={i}
                    className="flex flex-col relative h-full mx-auto"
                  >
                    <img
                      key={i}
                      src={cadet?.cadet.bannerImg[0]}
                      alt={cadet?.cadet?.name}
                      className={`h-full scale-[120%] min-w-max z-20 justify-between`}
                    />
                    <h2
                      className={`relative mx-auto flex z-[1000] text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full -translate-y-32 border border-black/60 p-6 bg-gradient-to-t from-black/70 to-transparent pointer-events-none`}
                    >
                      {cadet?.cadet.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full justify-center flex">
              <img
                src={strike[0]?.cadet.bannerImg[0]}
                alt={strike[0]?.cadet?.name}
                className={`${strike[0]?.cadet?.strikeBannerPos} flex z-20 `}
              />
              <h2
                className={`absolute z-[1000] font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full border border-black/60 m-5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none
                ${
                  strike[0]?.cadet.name.length > 6 &&
                  strike[0]?.cadet.name.length < 14
                    ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : strike[0]?.cadet.name.length >= 14 &&
                      strike[0]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : strike[0]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-9xl max-h-full max-w-full"
                }
           `}
              >
                {strike[0]?.cadet.name}
              </h2>
            </div>
          )}
          <div className="absolute h-full w-full z-20 bg-black/50"></div>
          <h2 className="absolute z-30 flex font-cyber p-6 left-0 top-0 opacity-75 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
            Strike
          </h2>
        </div>
      </div>
    </div>
  );
};

export default StrikeBanner;
