"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const StoryClient = () => {
  const tabs = ["2X20, 2X21, 2X22, 2X23, 2X24"];

  const pathname = usePathname();

  return <div className="flex flex-col justify-center mx-auto">text</div>;
};

export default StoryClient;
