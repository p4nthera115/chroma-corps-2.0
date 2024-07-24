"use client";

import { usePathname } from "next/navigation";
import { cadets2023 } from "@/app/data/CadetData";
import Banner from "@/app/components/CadetPage/Banner";
import Menu from "@/app/components/Menu/Menu";
import Assignments from "@/app/components/CadetPage/Assignments";
import { useEffect, useState } from "react";
import OriginalSubmission from "@/app/components/CadetPage/OriginalSubmission";
import Select2023 from "@/app/components/Cadets/Select2023";

const CadetClient = () => {
  const pathname = usePathname();
  const [cadetName, setCadetName] = useState(pathname.slice(13));
  const [initialZ, setInitialZ] = useState(true);

  if (cadetName.includes("%20")) {
    setCadetName(cadetName.replace("%20", " "));
  }

  const cadet = cadets2023.find((cadet) => cadet.name === cadetName);

  useEffect(() => {
    setTimeout(() => {
      return setInitialZ(false);
    }, 300);
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="absolute z-[60]">
        <Menu iconPosition={{ right: "md:right-5" }} />
      </div>
      <div className="relative h-screen w-full flex flex-col">
        <section
          className={`flex ${
            initialZ ? "z-20" : "z-0"
          } top-0 max-w-full bg-black`}
        >
          <Banner cadet={cadet} year={"2 0 2 3"} />
        </section>
        <section id="original-submission">
          <OriginalSubmission cadet={cadet} />
        </section>
        <section className="flex z-10 h-[10000%] bg-neutral-900">
          <Assignments cadet={cadet} />
        </section>
        <section className="hidden md:flex z-0">
          <Select2023 cadets={cadets2023} />
        </section>
      </div>
    </div>
  );
};

export default CadetClient;
