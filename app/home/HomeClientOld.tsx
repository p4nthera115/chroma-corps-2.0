"use client";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { useState } from "react";

export default function HomeClient() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3950);
  return (
    <div
      className={`absolute
      inset-0
      flex 
      flex-col
      ${isLoading && "overflow-hidden"}
      
      `}
    >
      <div className="flex flex-col justify-center text-center sm:py-[20%] md:py-[10%]">
        <div className="flex flex-row justify-center mr-16 mt-48 mb-16 sm:mt-0 sm:gap-0 md:gap-0 lg:gap-16 sm:mb-16 sm:mr-12 md:mb-16">
          <div className="flex flex-col text-5xl sm:text-7xl md:text-8xl lg:text-8xl">
            <h1
              className="
            font-bold
            font-cyber
            text-white
          "
            >
              CHROMA CORPS
            </h1>
            <h2 className=" text-yellow-400 font-cyber text-center">
              クロマ隊
            </h2>
          </div>
          <div className="sm:mr-8 md:mr-16">
            <img
              src="/images/ChromaCorpsLogoWhite.png"
              alt=""
              height={200}
              width={200}
              className="h-40 w-40 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-52"
            />
          </div>
        </div>
        <div className="mt-24 mb-12 sm:mb-0">
          <div>
            <h2 className="text-3xl font-cyber">Discover</h2>
            <div className="flex flex-col items-center justify-center mt-6">
              <Link
                to="about-section"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <HiArrowDown
                  size={50}
                  className="animate-bounce hover:cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-8 ">
        <div className="flex flex-col align-middle justify-center mt-16">
          <h1 className="font-cyber font-extrabold text-center text-yellow-400 lg:text-6xl md:text-4xl text-3xl mt-32 mb-8">
            FOR THE LOVE OF ART.
            <a id="about-section"></a>
          </h1>
        </div>
        <div className="flex flex-col justify-center mx-auto text-center max-w-[50%] md:text-3xl text-2xl font-mono gap-4">
          <h2 className="">
            The ultimate art Battle Royale. Only the strongest will make it to
            the end.
          </h2>
          <h2 className="">
            But more than a contest and more than the prizes, Chroma Corps
            brings artists together every summer to produce thousands of art
            pieces, share their work, connect and collaborate.
          </h2>
        </div>
        <br />
        <div className="mx-auto my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="464px"
            height="4px"
          >
            <path
              fill-rule="evenodd"
              fill="#facc15"
              d="M-0.002,-0.001 L-0.002,3.999 L40.999,3.999 L45.999,0.999 L463.999,0.999 L463.999,-0.001 L-0.002,-0.001 Z"
            />
          </svg>
        </div>
        <section id="about-sinix">
          <div className="flex flex-col justify-center text-center py-4">
            <h1 className="text-5xl font-cyber text-yellow-400 py-4 mb-32">
              An annual event hosted by Sinix
            </h1>
            <div id="constraint" className="w-[90%] mx-auto ">
              <div
                id="about-block"
                className="bg-yellow-400/20 flex flex-col px-0 pt-48 pb-12 sm:px-52 sm:pt-48 sm:pb-12 mt-16 mb-16 relative diagonal-lines-yellow border-8 border-yellow-400/40"
              >
                <div
                  id="sinix-image"
                  className="flex justify-center absolute top-[-8rem] self-center"
                >
                  <img
                    className="flex justify-center overflow-hidden rounded-full border-8 border-neutral-800"
                    src="https://pub-61ec03a9970d48d19f2731dc689f697b.r2.dev/Sinix/sinixdp.jpg"
                    alt=""
                    height={300}
                    width={300}
                  />
                </div>
                <h2 id="sinix-title" className="text-center text-4xl">
                  Hi, I&rsquo;m Sinix
                </h2>
                <div
                  id="sinix-content"
                  className="text-center mt-4 text-lg flex flex-col gap-y-8"
                >
                  <p>
                    Blah blah blah... I do this and that, and all of this and
                    all of that.
                  </p>
                  <p>
                    Oh and I also do some of that and a bit of this. YouTube and
                    whatnot...
                  </p>
                  <p>
                    You can find me here. Not <a className=" italic">here</a>{" "}
                    but on those icons below, you bozo
                  </p>
                  <div className="flex flex-row space-x-2 self-center">
                    <a
                      href="https://www.youtube.com/@sinixdesign"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiOutlineYoutube
                        size={50}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/sinixdesign/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiOutlineInstagram
                        size={50}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                      />
                    </a>
                    <a
                      href="https://twitter.com/sinix777"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiOutlineTwitter
                        size={50}
                        className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="footer">
          <div className="flex flex-col text-center my-16">
            <h1 className="text-5xl text-yellow-400 font-cyber font-bold">
              GET INVOLVED
            </h1>
            <div className="my-16 flex justify-center gap-10">
              <a href="https://discord.com/invite/ejaQBdWyyN">
                <div className="bg-yellow-400 text-black py-4 px-16 rounded shadow-inner shadow-yellow-600 hover:opacity-80 font-mono">
                  <h2>Join the Discord server</h2>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
