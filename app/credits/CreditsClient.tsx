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
        <h1 className="font-cyber font-extrabold text-center text-green-400 lg:text-5xl md:text-4xl text-4xl mb-8">
          CREDITS
        </h1>
        <h2 className="text-center font-cyber mb-8 md:text-xl sm:text-lg text-lg">
          Website designed and developed by
        </h2>
        <div id="website-credits" className="flex flex-row mb-12">
          <div
            id="left-side"
            className="flex flex-col w-[50%] text-center border-r-[1px] border-neutral-600 pb-24"
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
            className="flex flex-col w-[50%] text-center border-l-[1px] border-neutral-600 pb-24"
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
        <div className="flex flex-col mb-12">
          <h2 className="font-cyber text-5xl text-center text-green-400">
            Shoutout to these people for their contributions
          </h2>
          <div className="flex flex-col text-center py-8">
            <ul className="flex flex-col gap-16 mt-8 md:px-4 px-8">
              <li className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/sinixdesign/"
                  className="font-cyber text-3xl sm:text-3xl md:text-4xl text-green-200 hover:scale-125 transition max-w-fit mx-auto"
                >
                  Sinix
                </a>{" "}
                <p className=" italic md:text-lg">
                  for allowing us the freedom to create this site
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/awfullysabi/"
                  className="font-cyber text-3xl sm:text-3xl md:text-4xl text-green-200 hover:scale-125 transition max-w-fit mx-auto"
                >
                  Sabi
                </a>{" "}
                <p className=" italic md:text-lg">
                  for creating a spreadsheet to keep track of the contest
                  history, making it easier for us to collate data
                </p>
              </li>
              <li className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/_jnart_/"
                  className="font-cyber text-3xl sm:text-3xl md:text-4xl text-green-200 hover:scale-125 transition max-w-fit mx-auto"
                >
                  Javan Napoli
                </a>{" "}
                <p className=" italic md:text-lg">
                  for creating the beautiful Chroma Corps logo on the home page
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditsClient;
