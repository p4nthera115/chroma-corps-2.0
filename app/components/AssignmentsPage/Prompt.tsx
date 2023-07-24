interface PromptProps {
  prompt: string | undefined;
  assignmentNo: number | undefined;
}

const Prompt: React.FC<PromptProps> = ({ prompt, assignmentNo }) => {
  return (
    <div className="w-screen mb-8 justify-center items-center flex flex-row gap-12 bg-neutral-900 px-12 sm:px-12 md:px-8 py-6">
      <h1 className="font-cyber text-3xl sm:text-3xl md:text-5xl lg:text-6xl">
        Assignment {assignmentNo?.toString()}:
      </h1>
      <h1 className="font-cyber text-2xl p-0 sm:pr-4 md:p-0 sm:text-2xl md:text-4xl lg:text-5xl">
        {" "}
        {prompt}
      </h1>
    </div>
  );
};

export default Prompt;
