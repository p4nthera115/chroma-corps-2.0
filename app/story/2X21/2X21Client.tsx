"use client";

import { story2X21 } from "@/app/components/StoryPage/StoryData";
import Image from "next/image";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center h-full xs:w-1/2 sm:w-3/4 md:w-full md:max-w-full xs:max-w-fit">
      <div className="flex flex-col justify-center mx-auto text-center gap-8 h-full xs:w-3/4 md:w-1/2">
        <h2 className="text-4xl font-cyber mx-auto">{story2X21.title}</h2>
        <div className="flex flex-col gap-8 text-lg font-mono leading-loose">
          <p>{story2X21.body.para1}</p>
          <p>
            A dimensional soft-serve machine seemed like a welcome addition to
            the cafeteria, a pleasant reward for the hard-working cadets. That
            was until the previous graduates, Weiao and Nikittysan, decided on a
            dare to see if they could create a swirl of every dimensional flavor
            possible. The fabrics of reality folded in on themselves like a
            fitted sheet, not only did the resulting explosion wipe out most of
            the academy, but the incident blasted in doppelganger cadets from
            alternate dimensions of Chroma Corps. Chaos ensued and many cadets
            were wiped out, mostly alternate ones, but some locals as well. When
            the dimensional dust settled, three cadets remained,{" "}
            <a href="/cadets/2021/Beatrice" className="text-[#ffe600]">
              Beatrice
            </a>
            ...{" "}
            <a href="/cadets/2021/Chedilkm" className="text-[#ffe600]">
              ChedilKM
            </a>
            ... and{" "}
            <a href="/cadets/2021/Ozan%20Pulat" className="text-[#ffe600]">
              Ozan
            </a>
            . I think they were from this dimension? Wait, am I from this
            dimension? Oh, who really cares, let&#39;s just graduate them and
            move on.
          </p>
        </div>
      </div>
      <div className="flex w-full h-full mx-auto py-8">
        <Image
          src="/images/2021CadetClass.png"
          alt="2021 Cadet Class"
          className="max-h-screen max-w-screen mx-auto border-4 border-white"
        />
      </div>
    </div>
  );
};

export default StoryClient;
