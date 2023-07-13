import { useState } from "react";

const Accordion = ({ title, content }: any) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="border-b-yellow-400 border-b p-12 hover:bg-neutral-800/80 hover:cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="flex flex-row justify-between hover:opacity-70 ">
        <div className="text-2xl">{title}</div>
        <div className="text-3xl">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && <div className="py-4">{content}</div>}
    </div>
  );
};

export default Accordion;
