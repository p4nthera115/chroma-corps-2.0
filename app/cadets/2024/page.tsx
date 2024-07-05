import React from "react";
import Menu from "../../components/Menu/Menu";
import { ComingSoon } from "@/app/ComingSoon";
import Announcement from "@/app/components/Home/Announcement";

function page() {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col overflow-x-hidden relative">
      <div className="z-[100]">
        <Menu />
      </div>
      <div className="h-[100dvh] w-full justify-center items-center flex p-2 md:pb-4">
        <Announcement />
      </div>
    </div>
  );
}

export default page;
