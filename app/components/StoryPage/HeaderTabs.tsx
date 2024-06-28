"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderTabs = () => {
  const pathname = usePathname();

  //TODO: abstract some of the code below into a separate "Tab" component and automate the active tab, instead of hard-coding it into each Link element

  return (
    <div id="Menu-list" className="flex flex-row w-full justify-center mx-auto">
      <Link
        id="Menu-link-2X20"
        href={pathname === "/story/2X20" ? "/story" : "/story/2X20"}
        className={`text-3xl font-cyber w-full py-8 px-8 ${
          pathname === "/story/2X20" ? "bg-[#ffe600]" : "bg-neutral-800"
        } border-2 border-neutral-400 ${
          pathname === "/story/2X20" ? "text-neutral-800" : "text-[#ffe600]"
        } text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition`}
      >
        <div>2X20</div>
      </Link>
      <Link
        id="Menu-link-2X21"
        href={pathname === "/story/2X21" ? "/story" : "/story/2X21"}
        className={`text-3xl font-cyber w-full py-8 px-8 ${
          pathname === "/story/2X21" ? "bg-[#ffe600]" : "bg-neutral-800"
        } border-2 border-neutral-400 ${
          pathname === "/story/2X21" ? "text-neutral-800" : "text-[#ffe600]"
        } text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition`}
      >
        <div>2X21</div>
      </Link>
      <Link
        id="Menu-link-2X22"
        href={pathname === "/story/2X22" ? "/story" : "/story/2X22"}
        className={`text-3xl font-cyber w-full py-8 px-8 ${
          pathname === "/story/2X22" ? "bg-[#ffe600]" : "bg-neutral-800"
        } border-2 border-neutral-400 ${
          pathname === "/story/2X22" ? "text-neutral-800" : "text-[#ffe600]"
        } text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition`}
      >
        <div>2X22</div>
      </Link>
      <Link
        id="Menu-link-2X23"
        href={pathname === "/story/2X23" ? "/story" : "/story/2X23"}
        className={`text-3xl font-cyber w-full py-8 px-8 ${
          pathname === "/story/2X23" ? "bg-[#ffe600]" : "bg-neutral-800"
        } border-2 border-neutral-400 ${
          pathname === "/story/2X23" ? "text-neutral-800" : "text-[#ffe600]"
        } text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition`}
      >
        <div>2X23</div>
      </Link>
      {/* <Link
          id="Menu-link-2X24"
          href="/story/2X24"
          className="text-3xl font-cyber w-full py-8 px-8 bg-neutral-800 border-2 border-neutral-400 text-[#ffe600] text-center hover:cursor-pointer hover:bg-[#ffe600] hover:text-black transition"
        >
          <div>2X24</div>
        </Link> */}
    </div>
  );
};
