"use client";

import { useState } from "react";

const TitleLeft = () => {
  const [name, setName] = useState("CHROMA");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const hoverAnimation = () => {
    let iterations = 0;

    const interval = setInterval(() => {
      setName(
        name
          .split("")
          .map((letter: string, i: number) => {
            if (i < iterations) {
              return "CHROMA"[i];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iterations >= name.length) clearInterval(interval);

      iterations += 3;
    }, 80);
  };

  const chroma = name.split("");
  const corps = "CORPS|".split("");

  return (
    <div className="relative h-full w-full items-center flex">
      <section className="relative h-[90%] flex flex-row gap-6  border-black ml-24">
        <div
          className=" border-black w-20 m-0 flex flex-col gap-4 justify-center"
          // onMouseOver={hoverAnimation}
        >
          {chroma.map((letter) => (
            <h1
              key={letter}
              className="text-black text-7xl font-cyber font-extrabold text-center"
            >
              {letter}
            </h1>
          ))}
        </div>
        <div className="w-20 m-0 flex flex-col gap-4 justify-center  border-black">
          {corps.map((letter, i) => (
            <h1
              key={letter}
              className={`${
                i === 5 ? "text-transparent" : "text-black"
              } text-7xl font-cyber font-extrabold text-center`}
            >
              {letter}
            </h1>
          ))}
        </div>
      </section>
    </div>
  );
};
const TitleRight = () => {
  const jap = "クロマ隊".split("");

  return (
    <div className="relative h-full w-full items-center flex">
      <section className="absolute right-0 h-[80%] border-black mr-[12rem]">
        <div className=" border-black w-20 m-0 flex flex-col gap-6 justify-center">
          {jap.map((letter) => (
            <h1
              key={letter}
              className="text-black text-8xl  font-bold text-center"
            >
              {letter}
            </h1>
          ))}
        </div>
      </section>
    </div>
  );
};

export { TitleLeft, TitleRight };
