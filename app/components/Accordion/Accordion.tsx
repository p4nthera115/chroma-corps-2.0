import { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="border-b-yellow-400 border-b md:p-12 p-8 hover:bg-neutral-800/80 hover:cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-row justify-between hover:opacity-70 ">
        <div className="md:text-2xl sm:text-xl text-xl">{title}</div>
        <div className="text-3xl pl-4">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="py-4">{content}</div>}
    </div>
  );
};

export default Accordion;
