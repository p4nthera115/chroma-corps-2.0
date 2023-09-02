// "use client";

// import { CadetAssignment } from "@/app/types";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// interface WinnerBannerProps {
//   winner: CadetAssignment[];
// }

// const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
//   console.log(winner);

//   const [name, setName] = useState("WINNERS");

//   useEffect(() => {
//     {
//       winner.length > 1 ? setName("WINNERS") : setName("WINNER");
//     }
//   }, [winner]);

//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   const hoverAnimation = () => {
//     let iterations = 0;

//     const interval = setInterval(() => {
//       setName(
//         name
//           .split("")
//           .map((letter: string, i: number) => {
//             if (i < iterations) {
//               return "WINNERS"[i];
//             }

//             return letters[Math.floor(Math.random() * 26)];
//           })
//           .join("")
//       );

//       if (iterations >= name.length) clearInterval(interval);

//       iterations += 3;
//     }, 80);
//   };

//   return (
//     <div className="relative w-full h-[66.666666vh] ">
//       <div
//         className={`z-10 h-full w-full ${
//           winner.length == 1 && winner[0]?.cadet.gradient
//         }  flex justify-center`}
//       >
//         {winner.length >= 2 ? (
//           <div
//             className={`relative w-full h-full ${
//               winner[0].cadet.teamColor === winner[1].cadet.teamColor &&
//               winner[0].cadet.gradient
//             }`}
//           >
//             <div className="flex flex-col md:flex-row relative w-full h-full gap-16 justify-evenly">
//               <div className="flex h-1/2 overflow-hidden w-full md:w-1/2">
//                 <img
//                   src={winner[0]?.cadet.bannerImg[0]}
//                   alt={winner[0]?.cadet?.name}
//                   className={`h-1/2 scale-[150%] min-w-max max-w-max z-20 left-[8rem] ${
//                     winner[0]?.cadet.teamColor !== winner[1].cadet.teamColor &&
//                     winner[0].cadet.gradient
//                   } `}
//                 />
//               </div>
//               <img
//                 src={winner[1]?.cadet.bannerImg[0]}
//                 alt={winner[1]?.cadet?.name}
//                 className={`h-full scale-[150%] min-w-max z-20 right-[8rem] ${
//                   winner[1]?.cadet.teamColor !== winner[0].cadet.teamColor &&
//                   winner[1].cadet.gradient
//                 } `}
//               />
//               {winner.length >= 3 ? (
//                 <img
//                   src={winner[2]?.cadet.bannerImg[0]}
//                   alt={winner[2]?.cadet.name}
//                   className={`h-full scale-[150%] min-w-max z-20 `}
//                 />
//               ) : null}
//             </div>
//             <div className="absolute flex flex-col gap-4 text-right items-end justify-end bottom-0 right-0 font-cyber m-3">
//               {winner.map((cadet: CadetAssignment, i: number) => (
//                 <h2
//                   key={i}
//                   className={`flex z-[1000] bottom-0 right-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full
//                     ${
//                       winner[0]?.cadet.name.length > 6 &&
//                       winner[0]?.cadet.name.length < 14
//                         ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
//                         : winner[0]?.cadet.name.length >= 14 &&
//                           winner[0]?.cadet.name.length < 16
//                         ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
//                         : winner[0]?.cadet.name.length >= 16
//                         ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
//                         : "text-6xl lg:text-9xl max-h-full max-w-full"
//                     }
//                 `}
//                 >
//                   {cadet.cadet.name}
//                 </h2>
//               ))}
//             </div>
//           </div>
//         ) : (
//           <>
//             <img
//               src={winner[0]?.cadet.bannerImg[0]}
//               alt={winner[0]?.cadet?.name}
//               className={`${winner[0]?.cadet?.bannerPos} z-20`}
//             />
//             <h2
//               className={`absolute z-30 font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl ${
//                 winner[0]?.cadet.name.length > 6 &&
//                 winner[0]?.cadet.name.length < 14
//                   ? "text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full"
//                   : winner[0]?.cadet.name.length >= 14 &&
//                     winner[0]?.cadet.name.length < 16
//                   ? "text-xl md:text-2xl lg:text-4xl xl:text-[3.5rem] max-h-full max-w-full"
//                   : winner[0]?.cadet.name.length >= 16
//                   ? "text-xl md:text-2xl lg:text-4xl xl:text-[3rem] max-h-full max-w-full"
//                   : "text-6xl lg:text-9xl max-h-full max-w-full"
//               }
//           `}
//             >
//               {winner[0]?.cadet.name}
//             </h2>
//           </>
//         )}

//         {winner.length > 1 ? (
//           <h2 className="absolute z-30 font-cyber p-4 -top-24 inset-0 mt-8 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
//             Winners:
//           </h2>
//         ) : (
//           <h2 className="absolute z-30 font-cyber p-4 left-0 top-0 opacity-75 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
//             Winner:
//           </h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default WinnerBanner;

"use client";

import { CadetAssignment } from "@/app/types";
import { usePathname, useRouter } from "next/navigation";

interface WinnerBannerProps {
  winner: CadetAssignment[];
}

const WinnerBanner: React.FC<WinnerBannerProps> = ({ winner }) => {
  const router = useRouter();
  const pathname = usePathname();
  const year = pathname.slice(8, 12);

  return (
    <div className="relative w-full h-[66.666666vh] bg-black font-cyber text-white">
      <div
        className={`absolute z-10 h-full w-full ${winner[0]?.cadet.gradient} flex justify-between`}
      >
        {winner.length > 1 ? (
          <div className="relative w-full h-full">
            {winner[1]?.cadet.gradient !== winner[0]?.cadet.gradient ? (
              <div
                className={`absolute z-10 h-full w-full rotate-180 ${winner[1]?.cadet.gradient}`}
              ></div>
            ) : null}
            <div className="flex md:flex-row relative w-full h-full gap-4 justify-between ">
              {winner.map((cadet: CadetAssignment, i: number) => (
                <div
                  key={i}
                  className="hover:cursor-pointer flex flex-col relative h-full mx-auto "
                  onClick={() =>
                    router.push(`/cadets/${year}/${winner[i]?.cadet.name}`)
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
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="hover:cursor-pointer relative w-full h-full justify-center flex"
            onClick={() =>
              router.push(`/cadets/${year}/${winner[0]?.cadet.name}`)
            }
          >
            <img
              src={winner[0]?.cadet.bannerImg[0]}
              alt={winner[0]?.cadet?.name}
              className={`${winner[0]?.cadet?.bannerPos} flex z-20`}
            />
            <h2
              className={`absolute z-[1000] font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full border border-black/60 m-5 bg-gradient-to-t from-black/70 to-transparent pointer-events-none
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
              {winner[0]?.cadet.name}
            </h2>
          </div>
        )}
        <h2
          className={`absolute ${
            winner.length > 1 ? "left-1/2 -translate-x-1/2" : "left-0"
          } -top-16 font-cyber z-40 p-4 text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4`}
        >
          {winner.length > 1 ? "Winners" : "Winner"}
        </h2>
      </div>
    </div>
  );
};

export default WinnerBanner;
