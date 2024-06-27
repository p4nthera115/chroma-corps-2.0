"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const StoryClient = () => {
  const tabs = ["2X20, 2X21, 2X22, 2X23, 2X24"];

  const pathname = usePathname();

  return (
    <div className="inset-0 flex flex-col w-full justify-center">
      <div
        id="Menu-list"
        className="flex flex-row w-full justify-center mx-auto"
      >
        <div
          id="Menu-item"
          className="w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <Link id="Menu-link-2X20" href="" className="text-3xl font-cyber">
            2X20
          </Link>
        </div>
        <div
          id="Menu-item"
          className="w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <Link id="Menu-link-2X21" href="" className="text-3xl font-cyber">
            2X21
          </Link>
        </div>
        <div
          id="Menu-item"
          className="w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <Link id="Menu-link-2X22" href="" className="text-3xl font-cyber">
            2X22
          </Link>
        </div>
        <div
          id="Menu-item"
          className="w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <Link id="Menu-link-2X23" href="" className="text-3xl font-cyber">
            2X23
          </Link>
        </div>
        <div
          id="Menu-item"
          className="w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <Link id="Menu-link-2X24" href="" className="text-3xl font-cyber">
            2X24
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryClient;
