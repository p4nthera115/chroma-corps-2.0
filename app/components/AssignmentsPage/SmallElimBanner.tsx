"use client";

import { CadetAssignment } from "@/app/types";

interface EliminatedBannerProps {
  eliminated?: CadetAssignment;
  dropout?: CadetAssignment;
}

const SmallElimBanner: React.FC<EliminatedBannerProps> = ({
  eliminated,
  dropout,
}) => {
  const elimType: any = eliminated ? eliminated : dropout;

  return (
    <div
      className={`relative h-[33.333333333vh] z-10 border-red-600/50 border w-full ${elimType.cadet.gradient} z-20  flex justify-center items-center overflow-hidden`}
    >
      <div className="w-full h-full bg-red-600/30"></div>
      <div className="w-full h-full absolute top-[9rem] flex flex-row gap-24 justify-center items-start">
        <img
          src={elimType?.cadet.bannerImg[0]}
          alt={elimType?.cadet?.name}
          className={`scale-[300%] h-[20rem] z-10 flex sepia`}
        />
      </div>
      <h2 className="absolute z-30 flex font-cyber p-4 left-0 top-0 opacity-75 text-4xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-[6rem] max-h-full max-w-full md:pl-4 ">
        {eliminated ? "Eliminated:" : "Dropout:"}
      </h2>
      <h2
        className={`absolute font-cyber p-4 right-0 bottom-0 text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-7xl max-h-full max-w-full z-30`}
      >
        {elimType.cadet.name}
      </h2>
    </div>
  );
};

export default SmallElimBanner;
