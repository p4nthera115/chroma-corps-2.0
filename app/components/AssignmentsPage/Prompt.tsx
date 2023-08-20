interface PromptProps {
  prompt: string | undefined;
  assignmentNo: number | undefined;
}

const Prompt: React.FC<PromptProps> = ({ prompt, assignmentNo }) => {
  return (
    <div className="w-full h-full diagonal-lines-yellow bg-neutral-900">
      <div className="w-full max-w-max text-center flex flex-col gap-4 px-12 sm:px-12 md:px-8 py-12 mx-auto">
        <h1 className="font-cyber text-3xl sm:text-3xl md:text-5xl lg:text-6xl min-w-fit">
          Assignment {assignmentNo?.toString()}:
        </h1>
        <p className="font-cyber text-xl p-0 sm:pr-4 md:p-0 sm:text-2xl md:text-3xl lg:text-3xl max-w-fit text-center">
          {" "}
          {prompt}
        </p>
      </div>
    </div>
  );
};

export default Prompt;
