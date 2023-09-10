"use client";

import { CadetAssignment } from "@/app/types";
import { usePathname, useRouter } from "next/navigation";
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

  const router = useRouter();
  const pathname = usePathname();
  const year = pathname.slice(8, 12);

  return (
    <div className="relative w-full h-[66.666666vh] bg-neutral-900 ">
      <div className={`absolute z-10 h-full w-full flex justify-center`}>
        <div className="pointer-events-none absolute w-full h-full bg-red-600/30 z-30"></div>
        {elimType.length > 1 ? (
          <div className="relative w-full h-full border-red-600/50 border border-dashed overflow-hidden">
            {elimType[1]?.cadet.gradient !== elimType[0]?.cadet.gradient ? (
              <div
                className={`absolute z-10 h-full w-full rotate-180 ${elimType[1]?.cadet.gradient}`}
              ></div>
            ) : null}
            {/* <div className="flex flex-row relative w-full h-full gap-4 justify-between">

              {elimType.map((cadet: CadetAssignment, i: number) => (
                <img
                  key={i}
                  src={cadet?.cadet.bannerImg[0]}
                  alt={cadet?.cadet?.name}
                  className={`h-full scale-[150%] min-w-max z-20 sepia `}
                />
              ))}
            </div> */}
            <div className="flex md:flex-row relative w-full h-full gap-4 justify-between">
              {elimType.map((cadet: CadetAssignment, i: number) => (
                <div
                  key={i}
                  className="hover:cursor-pointer flex flex-col relative h-full mx-auto "
                  onClick={() =>
                    router.push(`/cadets/${year}/${elimType[i]?.cadet.name}`)
                  }
                >
                  <img
                    key={i}
                    src={cadet?.cadet.bannerImg[0]}
                    alt={cadet?.cadet?.name}
                    className={`h-full scale-[120%] min-w-max z-20 justify-between`}
                  />
                  <h2
                    key={i}
                    className={`relative mx-auto flex z-[1000] text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full -translate-y-32 border border-black/60 p-6 bg-gradient-to-t from-black/70 to-transparent pointer-events-none
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="hover:cursor-pointer relative w-full h-full border-red-600 border justify-center flex"
            onClick={() =>
              router.push(`/cadets/${year}/${elimType[0]?.cadet.name}`)
            }
          >
            <img
              src={elimType[0]?.cadet.bannerImg[0]}
              alt={elimType[0]?.cadet?.name}
              className={`${elimType[0]?.cadet?.bannerPos} flex z-20 sepia`}
            />
            <h2
              className={`absolute z-[1000] font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full border border-black/60 m-5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none ${
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
        <h2 className="absolute font-cyber z-40 p-4 left-0 top-0 opacity-100 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4">
          {eliminated.length > 0 ? "Eliminated" : "Dropout"}
        </h2>
      </div>
    </div>
  );
};

export default EliminatedBanner;
