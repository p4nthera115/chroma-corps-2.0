"use client";

import { CadetAssignment } from "@/app/types";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  console.log(winner);

  return (
    <div className="relative w-screen h-[66.666666vh] mb-36">
      <div
        className={`z-10 h-full w-full ${
          winner.length > 1
            ? winner[0]?.cadet.centreGradient
            : winner[0]?.cadet.gradient
        }  flex justify-center`}
      >
        {winner.length >= 2 ? (
          <div className="flex flex-col max-w-fit">
            {winner[1]?.cadet.gradient !== winner[0]?.cadet.gradient ? (
              <div
                className={`absolute z-10 h-full w-full rotate-180 ${winner[1]?.cadet.gradient}`}
              ></div>
            ) : null}
            <div className="flex flex-row max-w-fit mx-auto h-full justify-between">
              <img
                src={winner[0]?.cadet.bannerImg[0]}
                alt={winner[0]?.cadet?.name}
                className="flex flex-col scale-50 mx-[-4rem] sm:scale-100 sm:mx-[-4rem] md:mx-0"
              />
              <img
                src={winner[1]?.cadet.bannerImg[0]}
                alt={winner[1]?.cadet?.name}
                className="flex flex-col scale-50 mx-[-4rem] sm:scale-100 sm:mx-[-4rem] md:mx-0"
              />
              {winner.length >= 3 ? (
                <img
                  src={winner[2]?.cadet.bannerImg[0]}
                  alt={winner[2]?.cadet.name}
                  className="flex flex-col scale-50 mx-[-4rem] sm:scale-100 sm:mx-[-4rem] md:mx-0"
                />
              ) : null}
            </div>
            <div className=" flex z-50 flex-row gap-8 pr-6 sm:px-0 sm:gap-20 justify-between mx-auto -bottom-24 font-cyber">
              {winner.map((cadet, i) => (
                <div className="flex flex-col">
                  <h2
                    key={i}
                    className={`
                    ${
                      winner[0]?.cadet.name.length > 6 &&
                      winner[0]?.cadet.name.length < 14
                        ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                        : winner[0]?.cadet.name.length >= 14 &&
                          winner[0]?.cadet.name.length < 16
                        ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                        : winner[0]?.cadet.name.length >= 16
                        ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                        : "text-5xl sm:text-6xl md:text-7xl lg:text-9xl max-h-full max-w-full"
                    }
                `}
                  >
                    {cadet.cadet.name}
                  </h2>
                </div>
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

        {winner.length > 1 ? (
          <h2 className="absolute z-30 font-cyber p-4 -top-16 sm:-top-16 md:-top-20 md:pt-8 lg:pt-0 text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
            Winners
          </h2>
        ) : (
          <h2 className="absolute font-cyber p-4 left-0 top-0 opacity-75 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4 ">
            Winner
          </h2>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default WinnerBanner;
