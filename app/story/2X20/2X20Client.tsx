"use client";

import { story2X20 } from "@/app/components/StoryPage/StoryData";
import Image from "next/image";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center h-full xs:w-1/2 sm:w-3/4 md:w-full md:max-w-full xs:max-w-fit">
      <div className="flex flex-col justify-center mx-auto text-center gap-8 h-full xs:w-3/4 md:w-1/2">
        <h2 className="text-4xl font-cyber mx-auto">{story2X20.title}</h2>
        <div className="flex flex-col gap-8 text-lg font-mono leading-loose">
          <p>{story2X20.body.para1}</p>
          <p>
            After a semester filled with trips to scenic locales such as candy
            island and the cinnabun plateaus, things seemed to be going off
            without a hitch, but little did we know what evil was lurking behind
            the scenes. A rival organization named Monochroma had been plotting
            to sabotage the academy and plunder the vast resources of Chroma
            Corps. Luckily, two resourceful cadets managed to discover these
            villainous plans and put an end to them before any damage could be
            done. These cadets' names were{" "}
            <a href="/cadets/2020/Nikittysan" className="text-[#ffe600]">
              Nikittysan
            </a>{" "}
            and{" "}
            <a href="/cadets/2020/Weiao" className="text-[#ffe600]">
              Weiao
            </a>
            , and they would soon be announced as full-fledged Chroma Corps
            graduates.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full mx-auto py-8">
        <img
          src="/images/2020CadetClass.png"
          alt="2020 Cadet Class"
          className="max-h-screen max-w-screen mx-auto border-4 border-white"
        />
      </div>
    </div>
  );
};

export default StoryClient;
