"use client";

import { story2X22 } from "@/app/components/StoryPage/StoryData";
import Image from "next/image";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center h-full xs:w-1/2 sm:w-3/4 md:w-full md:max-w-full xs:max-w-fit">
      <div className="flex flex-col justify-center mx-auto text-center gap-8 h-full xs:w-3/4 md:w-1/2">
        <h2 className="text-4xl font-cyber mx-auto">{story2X22.title}</h2>
        <div className="flex flex-col gap-8 text-lg font-mono leading-loose">
          <p>{story2X22.body.para1}</p>
          <p>
            Good news! While the cadets are dancing and having fun, I&#39;ve
            developed a chloro-construct capable of using plant-based biomass to
            finish the remaining construction. Things will be back to normal,
            albeit a bit greener, just in time for graduation. Finally a
            successful year with cadets{" "}
            <a href="/cadets/2022/Dako" className="text-[#ffe600]">
              Dako
            </a>{" "}
            and{" "}
            <a href="/cadets/2022/FatCat" className="text-[#ffe600]">
              Fat Cat
            </a>{" "}
            managing to beat out the other cadets and graduate together. Quite a
            wholesome end.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full mx-auto py-8">
        <Image
          src="/images/2022CadetClass.png"
          alt="2022 Cadet Class"
          className="max-h-screen max-w-screen mx-auto border-4 border-white"
        />
      </div>
    </div>
  );
};

export default StoryClient;
