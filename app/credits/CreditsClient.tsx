"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineGlobal,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

const CreditsClient = () => {
  const [hover, setHover] = useState(false);

  const contributors = [
    {
      name: "Sinix",
      description: "for allowing us the freedom to create this site",
      youtube: "https://www.youtube.com/@sinixdesign",
      instagram: "https://www.instagram.com/sinixdesign/",
      twitter: "https://twitter.com/sinix777",
    },
    {
      name: "Sabi",
      description:
        "for creating a spreadsheet to keep track of the contest history, making it easier for us to collate data",
      instagram: "https://www.instagram.com/awfullysabi/",
    },
    {
      name: "Javan Napoli",
      description:
        "for creating the awesome Chroma Corps logo on the home page",
      instagram: "https://www.instagram.com/_jnart_/",
    },
  ];

  const variants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="credits">
      <div
        className="
          inset-0
          flex 
          flex-col
          justify-center
        text-neutral-100
       "
      >
        {/* <h1 className="font-cyber font-extrabold text-center text-[#ffe600] lg:text-5xl md:text-4xl text-4xl m-4 pointer-events-none">
          CREDITS
        </h1> */}
        <h2 className="text-center font-cyber md:text-xl sm:text-lg text-lg pt-2">
          Website designed and developed by
        </h2>
        <div
          id="website-credits"
          className="flex flex-row justify-center pb-32 pt-16 gap-8"
        >
          <div
            id="left-side"
            className="flex flex-col w-[30%] text-center pb-4"
          >
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
                <div className="max-w-[75%] flex justify-center mx-auto py-4">
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
          <div
            id="right-side"
            className="flex flex-col w-[30%] text-center pb-4"
          >
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
                <div className="max-w-[75%] flex justify-center mx-auto py-4">
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
          </div>
        </div>
        <div className="flex flex-col mb-12">
          <h2 className="font-cyber text-5xl text-center text-[#ffe600] m-6 leading-[3.5rem]">
            Shoutout to these people for their contributions
          </h2>
          <div className="flex flex-col text-center py-8">
            <ul className="flex flex-col gap-16 mt-8 md:px-4 px-8">
              {contributors.map((contributor, i: number) => (
                <li className="flex flex-col gap-4" key={i}>
                  <div className="flex flex-row justify-center mx-auto gap-4">
                    <motion.h3
                      variants={variants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className="font-cyber text-3xl sm:text-3xl md:text-4xl text-[#FFe600] max-w-fit mx-auto"
                    >
                      {contributor.name}
                    </motion.h3>
                  </div>
                  {contributor.name === "Sabi" ? (
                    <motion.p
                      variants={variants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className=" italic md:text-lg"
                    >
                      for creating a{" "}
                      <a
                        href="https://docs.google.com/spreadsheets/d/1QvC4Lgf1trMt8ASqIdF42dbcYIH4L-V4I6B5R4YaCvg/edit#gid=369953751"
                        target="_blank"
                        className="text-[#ffe600] animate-pulse"
                      >
                        spreadsheet
                      </a>{" "}
                      to keep track of the contest history, making it easier for
                      us to collate data
                    </motion.p>
                  ) : (
                    <motion.p
                      variants={variants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      className=" italic md:text-lg"
                    >
                      {contributor.description}
                    </motion.p>
                  )}

                  <motion.div
                    variants={variants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="flex flex-row space-x-2 self-center"
                  >
                    {contributor.youtube && (
                      <a
                        href={contributor.youtube}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <AiOutlineYoutube
                          size={50}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
                        />
                      </a>
                    )}
                    {contributor.instagram && (
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
                    )}
                    {contributor.twitter && (
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
                    )}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditsClient;
