"use client";

import { CadetAssignment } from "@/app/types";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  console.log(winner);

  return (
    <div className="relative w-screen h-[66.666666vh] bg-neutral-900 ">
      <div
        className={`absolute z-10 h-full w-full ${winner[0]?.cadet.gradient} border flex justify-center`}
      >
        {winner.length > 1 ? (
          <div className="relative w-full h-full">
            {winner[1]?.cadet.gradient !== winner[0]?.cadet.gradient ? (
              <div
                className={`absolute z-10 h-full w-full rotate-180 ${winner[1]?.cadet.gradient}`}
              ></div>
            ) : null}
            <div className="flex flex-row relative w-full h-full gap-8 justify-center">
              {winner.map((cadet, i) => (
                <img
                  key={i}
                  src={cadet?.cadet.bannerImg[0]}
                  alt={cadet?.cadet?.name}
                  className={`h-full scale-[150%] min-w-max z-20 `}
                />
              ))}
            </div>
            <div className="absolute flex flex-col gap-4 text-right items-end justify-end bottom-0 right-0 font-cyber ">
              {winner.map((cadet, i) => (
                <h2
                  key={i}
                  className={`flex  bottom-0 right-0
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
          </>
        )}
        <h2 className="absolute font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4 ">
          {winner.length > 1 ? "Winners" : "Winners"}
        </h2>
        <div></div>
      </div>
    </div>
  );
};

export default WinnerBanner;
