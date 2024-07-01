"use client";

import { story2X23 } from "@/app/components/StoryPage/StoryData";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center h-full xs:w-1/2 sm:w-3/4 md:w-full md:max-w-full xs:max-w-fit">
      <div className="flex flex-col justify-center mx-auto text-center gap-8 h-full xs:w-3/4 md:w-1/2">
        <h2 className="text-4xl font-cyber mx-auto">{story2X23.title}</h2>
        <div className="flex flex-col gap-8 text-lg font-mono leading-loose">
          <p>{story2X23.body.para1}</p>
          <p>
            The term is almost over and I thought things had stabilized, but the
            flora keep evolving. The plants have learned to assimilate the
            bodies of fallen cadets. The campus is overrun with plant zombies...
            only a handful of surviving cadets remain. I've tasked them with
            synthesizing a chemical that can put an end to this ceaseless
            growth. With the help of cadet{" "}
            <a href="/cadets/2023/Trout" className="text-[#ffe600]">
              Trout
            </a>{" "}
            fending off waves of leafy undead, cadet{" "}
            <a href="/cadets/2023/Teted" className="text-[#ffe600]">
              TeTed
            </a>{" "}
            was successful in the chemical bonding procedure. In the end, it was
            cadet{" "}
            <a href="/cadets/2023/Double" className="text-[#ffe600]">
              Double
            </a>{" "}
            that managed to deploy the biochemical solution in the most
            explosive way possible. Once the smoke cleared, it seemed things had
            finally settled down. All three cadets would graduate to full Chroma
            Corps members. Somehow they even look more innocent and youthful now
            than they did before the chaos started.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full mx-auto py-8">
        <img
          src="/images/2023CadetClass.png"
          alt="2023 Cadet Class"
          className="max-h-screen max-w-screen mx-auto border-4 border-white"
        />
      </div>
    </div>
  );
};

export default StoryClient;
