"use client";

import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineGlobal,
} from "react-icons/ai";

const MobileCards = () => {
  return (
    <div
      id="mobile-credits"
      className="w-full h-full flex justify-center font-cyber"
    >
      <div className="flex flex-col justify-center mt-8 mb-8 gap-8 w-[90%]">
        <div id="top-card" className="flex flex-col w-full">
          <div id="name-section" className="flex justify-center">
            <h1 className="p-2 text-xl">p4n</h1>
          </div>
          <div id="main-section" className="flex flex-row">
            <div id="img" className="w-[85%] p-4 flex justify-center">
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
                        w-[75%]
                        
                      "
              />
            </div>
            <div
              id="socials"
              className="w-[15%] flex flex-col justify-center items-center gap-2"
            >
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
        <div id="top-card" className="flex flex-col w-full">
          <div id="name-section" className="flex justify-center">
            <h1 className="p-2 text-xl">Leon</h1>
          </div>
          <div id="main-section" className="flex flex-row">
            <div id="img" className="w-[85%] p-4 flex justify-center">
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
                        w-[75%]
                        
                      "
              />
            </div>
            <div
              id="socials"
              className="w-[15%] flex flex-col justify-center items-center gap-2"
            >
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
              <a
                href="https://leonwellstead.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGlobal
                  size={40}
                  className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCards;
