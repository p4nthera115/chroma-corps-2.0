"use client";

import { story2X23 } from "@/app/components/StoryPage/StoryData";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center h-full w-full">
      <div className="flex flex-col justify-center mx-auto text-center gap-8 h-full w-1/2">
        <h2 className="text-4xl font-cyber">{story2X23.title}</h2>
        <div className="flex flex-col gap-8 text-lg font-extralight leading-loose">
          <p>{story2X23.body.para1}</p>
          <p>{story2X23.body.para2}</p>
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
