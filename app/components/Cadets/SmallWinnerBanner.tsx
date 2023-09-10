"use client";

import { Cadet } from "@/app/types";
import { usePathname, useRouter } from "next/navigation";

interface SmallWinnerBannerProps {
  winner: Cadet;
}

const SmallWinnerBanner: React.FC<SmallWinnerBannerProps> = ({ winner }) => {
  const router = useRouter();
  const pathname = usePathname();
  const year = pathname.slice(8, 12);

  return (
    <div
      className={`hover:cursor-pointer relative h-[33.333333333vh] z-10 border-[0.5px] border-white/20 w-full ${winner.gradient} z-20  flex justify-center items-center   overflow-hidden`}
      onClick={() => router.push(`/cadets/${year}/${winner.name}`)}
    >
      <div className="w-full h-full absolute top-[9rem] flex flex-row gap-24 justify-center items-start">
        <img
          src={winner.bannerImg[0]}
          alt={winner.name}
          className={`scale-[300%] h-[20rem] z-10 flex ${winner.strikeBannerPos}`}
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
