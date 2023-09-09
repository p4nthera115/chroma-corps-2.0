"use client";

import Accordion from "../components/Accordion/Accordion";

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
      title: "I hear the Cadets may be on teams, who picks the teams?",
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
      <h1 className="font-cyber font-extrabold text-center text-[#ffe600] lg:text-6xl md:text-5xl text-4xl mb-4 p-10">
        FAQs
      </h1>
      <h3 className="text-center text-md py-2 italic sm:px-4 md:px-0 px-4 text-neutral-100">
        If you have a question which is not answered below, feel free to post it
        on the{" "}
        <a
          href="https://discord.gg/m6Q9sBdxu6"
          className=" text-[#ffe600] font-semibold animate-pulse"
        >
          Discord channel
        </a>
      </h3>
      <a id="faq_section">
        <div className="flex flex-col align-middle justify-center font-mono md:w-[50%] mx-auto w-full">
          <div className="flex flex-col my-4">
            {accordionData.map(({ title, content }) => (
              <Accordion title={title} content={content} key={title} />
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default AboutClient;
