"use client";
import { useState } from "react";

const CreditsClient = () => {
  const [hover, setHover] = useState(false);

  return (
    <section id="credits">
      <div
        className="
    inset-0
    flex 
    flex-col
     justify-center
  "
      >
        <h1 className="font-cyber font-extrabold text-center text-yellow-400 lg:text-5xl md:text-4xl text-4xl mb-8">
          CREDITS
        </h1>
        <h2 className="text-center font-cyber mb-8 md:text-xl sm:text-lg text-lg">
          Website designed and developed by
        </h2>
        <div id="website-credits" className="flex flex-row mb-36">
          <div
            id="left-side"
            className="flex flex-col w-[50%] text-center border-r-[1px] border-neutral-600"
          >
            <h2 className=" font-cyber lg:text-4xl md:text-3xl text-2xl mb-4">
              Panthera
            </h2>
            <div className="mx-auto w-[75%]">
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="
            overflow-hidden 
            border 
            border-white 
            hover:cursor-pointer
          "
              >
                <h1
                  className="
                justify-center
                flex
                font-cyber
                font-bold
                border
                "
                >
                  Panthera
                </h1>
                <img
                  src="/images/ChromaCorpsLogoWhite.png"
                  height={200}
                  width={400}
                  alt="cadet"
                  className="
              object-cover 
              object-center 
              scale-100 sepia opacity-50
              hover:sepia-0 
              hover:opacity-100
              hover:scale-110
              transition
              w-full
              "
                />
              </div>
            </div>
          </div>
          <div
            id="right-side"
            className="flex flex-col w-[50%] text-center border-l-[1px] border-neutral-600"
          >
            <h2 className="font-cyber lg:text-4xl md:text-3xl text-2xl mb-4">
              Lifguson
            </h2>
            <div className="mx-auto w-[75%]">
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="
            overflow-hidden 
            border 
            border-white 
            hover:cursor-pointer
          "
              >
                <h1
                  className="
                justify-center
                flex
                font-cyber
                font-bold
                border
                "
                >
                  Lifguson
                </h1>
                <img
                  src="/images/ChromaCorpsLogoWhite.png"
                  height={200}
                  width={400}
                  alt="cadet"
                  className="
              object-cover 
              object-center 
              scale-100 sepia opacity-50
              hover:sepia-0 
              hover:opacity-100
              hover:scale-110
              transition
              w-full
              "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditsClient;