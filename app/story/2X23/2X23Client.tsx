"use client";

import { story2X23 } from "@/app/components/StoryPage/StoryData";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center w-1/2 gap-8 h-full">
      <h2 className="text-4xl font-cyber">{story2X23.title}</h2>
      <div className="flex flex-col gap-8 text-lg font-extralight leading-loose">
        <p>{story2X23.body.para1}</p>
        <p>{story2X23.body.para2}</p>
      </div>
    </div>
  );
};

export default StoryClient;
