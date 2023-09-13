"use client";

import { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

const DesktopCards = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      id="desktop-credits"
      className="flex flex-row justify-center pb-32 pt-16 gap-8"
    >
      <div id="left-side" className="flex flex-col w-[30%] text-center pb-4 ">
        <div className="mx-auto w-[90%]">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
              overflow-hidden 
              border 
              border-white 
              rounded-lg
            "
          >
            <div className="flex w-full border-b p-2 justify-center">
              <h1
                className="
                  text-2xl
                  font-cyber
                  font-bold
                "
              >
                p4n
              </h1>
            </div>
            <div className="max-w-full max-h-[32rem] flex justify-center mx-auto py-4 overflow-hidden bg-neutral-900">
              <img
                src="/images/silhouette.png"
                height={200}
                width={400}
                alt="cadet"
                className="
                  object-contain 
                  object-center 
                  scale-[400%]
                  opacity-100
                  transition
                  translate-y-[35rem]
                  z-50
                "
              />
            </div>
            <div>
              <div id="socials">
                <div className="flex flex-row border-t p-2 justify-center gap-2">
                  <a
                    href="https://twitter.com/p4nthera_"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineTwitter
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/_p4nthera/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineInstagram
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                  <a
                    href="https://github.com/p4nthera115"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="right-side" className="flex flex-col w-[30%] text-center pb-4">
        <div className="mx-auto w-[90%]">
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
                    overflow-hidden 
                    border 
                    border-white 
                    
                    rounded-lg
                  "
          >
            <div className="flex w-full border-b p-2 justify-center">
              <h1
                className="text-2xl
                        font-cyber
                        font-bold
                      "
              >
                Leon
              </h1>
            </div>
            <div className="max-w-full max-h-[32rem] flex justify-center mx-auto py-4 overflow-hidden bg-neutral-900">
              <img
                src="/images/silhouette.png"
                height={200}
                width={400}
                alt="cadet"
                className="
                  object-contain 
                  object-center 
                  scale-[400%]
                  opacity-100
                  transition
                  translate-y-[35rem]
                  z-50
                "
              />
            </div>
            <div>
              <div id="socials">
                <div className="flex flex-row border-t p-2 justify-center gap-2">
                  <a
                    href="https://twitter.com/leondvlpr"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineTwitter
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leonwellstead/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineLinkedin
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                  <a
                    href="https://github.com/Lifguson"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineGithub
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a>
                  {/* <a
                    href="https://leonwellstead.vercel.app/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <AiOutlineGlobal
                      size={40}
                      className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                    />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCards;
