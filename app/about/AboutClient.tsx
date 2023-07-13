"use client";

import { Link } from "react-scroll/modules";
import Accordion from "../components/Accordion/Accordion";
import { HiArrowDown } from "react-icons/hi";
import {
  AiOutlineYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const AboutClient = () => {
  const accordionData = [
    {
      title: "What is Chroma Corps?",
      content:
        "Chroma Corps is a fictional organization, a sci-fi mecha pilot academy, which sets the stage for a challenging and fun art contest.",
    },
    {
      title: "How to enter?",
      content:
        "Join the Discord server and watch out for the start date announcement, and simply post your cadet in the 'entries-only' channel.",
    },
    {
      title: "What should my Cadet look like?",
      content:
        "Your Cadet should be an original character who attends the fictional Chroma Corps academy. There are no specific requirements regarding what your character looks like or represents, or what medium you use. However, it is recommended that you incorporate a costume design which represents your interpretation of Chroma Corps. If you are still unsure about what your Cadet should look like, all previous entries are publicly viewable on Discord; feel free to browse through these entries for inspiration.",
    },
    {
      title: "What is the Enlistment phase?",
      content:
        "The first week of the contest is the Enlistment phase, where everyone is welcome to submit their entries. To enter, simply design your own Chroma Corps Cadet and post it in the entries channel on Discord. After the Enlistment phase, 16 Cadets are chosen to compete in the Boot Camp phase.",
    },
    {
      title: "What is the Boot Camp phase?",
      content:
        "The Boot Camp phase is when the 16 chosen Cadets compete in daily art battles, each lasting 24 hours, until only 1 Cadet remains. Those who are eliminated will go to Washout Alley. Boot Camp rules: (1) failure to submit a piece results in being eliminated from the contest; (2) getting 3 strikes, by having the weakest art in 3 different battles, will also result in elimination.",
    },
    {
      title: "What is Washout Alley?",
      content:
        "Washout Alley is where all non-Cadets hang out during the Boot Camp phase. You can chat, cheer for your favorites, and even participate in every challenge alongside the Cadets participating in the Boot Camp.",
    },
    {
      title: "How many entries can I submit?",
      content:
        "Technically, you can submit multiple entries, but it is often best to focus your time on making one entry than multiple rushed entries.",
    },
    {
      title:
        "I want to submit an entry but I don't have time for the Boot Camp...",
      content:
        " You are more than welcome to submit entries for fun. Just be sure to mention along with your submission that you do not wish to be selected for the Boot Camp.",
    },
    {
      title: "I hear the Cadets will be on teams, who picks the teams?",
      content:
        "The teams are chosen by team captains. Teams exist mainly for the sake of organization, so it shouldn't affect your overall chances of winning.",
    },
  ];

  return (
    <div
      className="
    inset-0
    flex 
    flex-col
  "
    >
      <div className=" ml-4 flex flex-col align-middle justify-center">
        <h1 className="font-cyber font-extrabold text-center text-yellow-400 lg:text-5xl md:text-4xl text-3xl mt-16 mb-8">
          FOR THE LOVE OF ART.
        </h1>
      </div>
      <div className="flex flex-col justify-center mx-auto text-center max-w-[50vw] md:text-3xl text-2xl font-normal">
        <h2 className="py-4">
          The ultimate art Battle Royale. Only the strongest will make it to the
          end.
        </h2>
        <h2 className="py-4">
          But more than a contest and more than the prizes, Chroma Corps brings
          artists together every summer to produce thousands of art pieces,
          share their work, connect and collaborate.
        </h2>
      </div>

      <br />
      <div className="mt-4">
        <p className="text-center">An annual event hosted by Sinix</p>
        <div className="flex flex-row items-center justify-center space-x-2 mt-2">
          <a
            href="https://www.youtube.com/@sinixdesign"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
            />
          </a>
          <a
            href="https://www.instagram.com/sinixdesign/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
            />
          </a>
          <a
            href="https://twitter.com/sinix777"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              size={30}
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
            />
          </a>
        </div>
      </div>
      {/* <br /> */}
      <div className="mx-auto my-auto mb-6 mt-6">
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
      <br />
      <h1 className="font-cyber font-extrabold text-center text-yellow-400 lg:text-5xl md:text-4xl text-3xl mb-4">
        FAQs
      </h1>
      <div className="flex flex-col items-center justify-center py-8">
        <Link
          to="faq_section"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown
            size={35}
            className="animate-bounce hover:cursor-pointer"
          />
        </Link>
      </div>
      <h3 className="text-center text-md py-2 italic">
        If you have a question which isn't answered below, feel free to post it
        on the{" "}
        <a
          href="https://discord.com/invite/ejaQBdWyyN"
          className=" text-yellow-400 font-semibold"
        >
          Discord channel
        </a>
      </h3>
      <a id="faq_section">
        <div className="flex flex-col align-middle justify-center font-mono w-[50vw] mx-auto">
          <div className="flex flex-col my-4">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default AboutClient;
