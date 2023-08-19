"use client";

import { CadetAssignment } from "@/app/types";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  console.log(winner);

  return (
    <div className="relative w-screen h-[66.666666vh] ">
      <div
        className={`z-10 h-full w-full
            flex justify-center`}
      >
        {winner.length > 1 ? (
          <h2 className=" absolute text-center z-30 font-cyber p-4 -top-24  text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
            Winners
          </h2>
        ) : (
          <h2 className=" absolute text-center font-cyber p-4 left-0 top-0 opacity-75 text-6xl lg:text-6xl xl:text-[8rem] max-h-full max-w-full md:pl-4 ">
            Winner
          </h2>
        )}
        {winner.length >= 2 ? (
          <div
            className={`block relative w-full h-full sm:flex flex-row justify-evenly`}
            // ${
            //   winner[0].cadet.teamColor == winner[2].cadet.teamColor &&
            //   "bg-none"
            // }
          >
            {/* <div className="block sm:flex flex-row relative w-full h-full justify-evenly"> */}
            <div className="flex flex-col text-5xl sm:text-6xl md:text-7xl gap-0 sm:gap-8 font-cyber text-center mx-auto">
              <img
                src={winner[0]?.cadet.bannerImg[0]}
                alt={winner[0]?.cadet?.name}
                className={`h-full scale-[80%] sm:scale-[100%] lg:scale-[100%] xl:scale-[125%] z-20 ${winner[0].cadet.gradient}`}
              />
              <h2
                className={`z-30 flex mx-auto ${
                  winner[0]?.cadet.name.length > 6 &&
                  winner[0]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
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
            <div className="flex flex-col text-5xl sm:text-6xl md:text-7xl gap-0 sm:gap-8 font-cyber text-center mx-auto">
              <img
                src={winner[1]?.cadet.bannerImg[0]}
                alt={winner[1]?.cadet?.name}
                className={`h-full scale-[80%] sm:scale-[100%] lg:scale-[100%] xl:scale-[125%] z-20 ${winner[1].cadet.gradient}`}
              />
              <h2
                className={`z-30 flex mx-auto ${
                  winner[0]?.cadet.name.length > 6 &&
                  winner[0]?.cadet.name.length < 14
                    ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 14 &&
                      winner[0]?.cadet.name.length < 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                    : winner[0]?.cadet.name.length >= 16
                    ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                    : "text-6xl lg:text-9xl max-h-full max-w-full"
                }`}
              >
                {winner[1]?.cadet.name}
              </h2>
            </div>
            {winner.length >= 3 ? (
              <div className="flex flex-col text-5xl sm:text-6xl md:text-7xl gap-0 sm:gap-8 font-cyber text-center mx-auto">
                <img
                  src={winner[2]?.cadet.bannerImg[0]}
                  alt={winner[2]?.cadet.name}
                  className={`h-full scale-[80%] sm:scale-[100%] lg:scale-[100%] xl:scale-[125%] z-20 ${winner[2].cadet.gradient}`}
                />
                <h2
                  className={`z-30 flex mx-auto ${
                    winner[0]?.cadet.name.length > 6 &&
                    winner[0]?.cadet.name.length < 14
                      ? "text-5xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
                      : winner[0]?.cadet.name.length >= 14 &&
                        winner[0]?.cadet.name.length < 16
                      ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
                      : winner[0]?.cadet.name.length >= 16
                      ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
                      : "text-6xl lg:text-9xl max-h-full max-w-full"
                  }`}
                >
                  {winner[2]?.cadet.name}
                </h2>
              </div>
            ) : null}
            {/* </div> */}
            {/* <div className="absolute flex z-50 flex-row p-4 gap-24 text-center items-center justify-center -bottom-24 w-full font-cyber ">
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
            </div> */}
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
      </div>
    </div>
  );
};

export default WinnerBanner;
