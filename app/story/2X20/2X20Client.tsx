"use client";

import { story2X20 } from "@/app/components/StoryPage/StoryData";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto">
      <h2 className="text-3xl font-cyber">{story2X20.title}</h2>
      <div className="flex flex-col gap-4 text-lg">
        <p>{story2X20.body.para1}</p>
        <p>{story2X20.body.para2}</p>
      </div>
    </div>
  );
};

export default StoryClient;
