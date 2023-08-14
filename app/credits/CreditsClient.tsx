"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLink } from "react-icons/ai";

const CreditsClient = () => {
  const [hover, setHover] = useState(false);

  const contributors = [
    {
      name: "Sinix",
      description: "for allowing us the freedom to create this site",
      link: "https://www.instagram.com/sinixdesign/",
    },
    {
      name: "Sabi",
      description:
        "for creating a spreadsheet to keep track of the contest history, making it easier for us to collate data",
      link: "https://www.instagram.com/awfullysabi/",
    },
    {
      name: "Javan Napoli",
      description:
        "for creating the beautiful Chroma Corps logo on the home page",
      link: "https://www.instagram.com/_jnart_/",
    },
  ];

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
        <h1 className="font-cyber font-extrabold text-center text-[#ffe600] lg:text-5xl md:text-4xl text-4xl mb-8">
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
            <a
              className=" font-cyber lg:text-4xl md:text-3xl text-2xl mb-4 mx-auto text-[#FFEF5C] hover:scale-[110%] transition"
              href="https://twitter.com/p4nthera_"
            >
              @p4n
            </a>
            <div className="mx-auto w-[75%]">
              <Link href="https://twitter.com/p4nthera_">
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
                    p4n
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
              </Link>
            </div>
          </div>
          <div
            id="right-side"
            className="flex flex-col w-[50%] text-center border-l-[1px] border-neutral-600 pb-24"
          >
            <a
              className="font-cyber lg:text-4xl md:text-3xl text-2xl mb-4 mx-auto text-[#FFEF5C] hover:scale-[110%] transition"
              href="https://twitter.com/leondvlpr"
            >
              @Leon
            </a>
            <div className="mx-auto w-[75%]">
              <Link href="https://twitter.com/leondvlpr">
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
                    Leon
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
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-12">
          <h2 className="font-cyber text-5xl text-center text-[#ffe600]">
            Shoutout to these people for their contributions
          </h2>
          <div className="flex flex-col text-center py-8">
            <ul className="flex flex-col gap-16 mt-8 md:px-4 px-8">
              {contributors.map((contributor, i: number) => (
                <li className="flex flex-col gap-2" key={i}>
                  <div className="flex flex-row justify-center mx-auto gap-4 hover:scale-[110%] transition">
                    <a
                      className="font-cyber text-3xl sm:text-3xl md:text-4xl text-[#FFEF5C] max-w-fit mx-auto"
                      href={contributor.link}
                    >
                      {contributor.name}
                    </a>{" "}
                    <a href={contributor.link} className="hover:cursor-pointer">
                      <AiOutlineLink size={40} />
                    </a>
                  </div>
                  <p className=" italic md:text-lg">
                    {contributor.description}
                  </p>
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
