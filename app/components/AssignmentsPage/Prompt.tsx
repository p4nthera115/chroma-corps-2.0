interface PromptProps {
  prompt: string | undefined;
  assignmentNo: number | undefined;
}

const Prompt: React.FC<PromptProps> = ({ prompt, assignmentNo }) => {
  return (
    <div className="w-full bg-black text-white pointer-events-none">
      <div className="relative  w-full max-w-max text-center justify-center flex flex-col gap-4 px-12 sm:px-12 md:px-8 py-12 mx-auto">
        <h1 className="font-cyber text-3xl sm:text-3xl md:text-5xl lg:text-6xl min-w-fit text-[#ffe600]">
          Assignment <span className="">{assignmentNo?.toString()}</span>:
        </h1>
        <title className="font-cyber text-xl p-0 sm:pr-4 md:p-0 sm:text-2xl md:text-3xl lg:text-3xl min-w-fit text-center w-full ">
          {prompt}
        </title>
      </div>
      <hr className="mb-6 text-[#ffe600]" />
    </div>
  );
};

export default Prompt;
