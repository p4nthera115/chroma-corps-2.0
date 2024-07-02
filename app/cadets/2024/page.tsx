import React from "react";
import Menu from "../../components/Menu/Menu";
import { ComingSoon } from "@/app/ComingSoon";

function page() {
  return (
    <div className="flex m-0 p-0 max-h-full max-w-full flex-col overflow-x-hidden">
      <div className="z-[100]">
        <Menu />
      </div>
      <ComingSoon />
    </div>
  );
}

export default page;
