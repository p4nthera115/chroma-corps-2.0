interface PromptProps {
  prompt: string | undefined;
  assignmentNo: number | undefined;
}

const Prompt: React.FC<PromptProps> = ({ prompt, assignmentNo }) => {
  return (
    <div className="w-screen mb-8 justify-center items-center border flex flex-col p-4 bg-neutral-900">
      <h1 className="text-4xl sm:text-5xl font-cyber md:text-6xl flex p-4">
        Assignment {assignmentNo?.toString()}: <br className="p-4" />
      </h1>
      <h1 className="font-cyber text-3xl sm:text-4xl md:text-5xl">{prompt}</h1>
    </div>
  );
};

export default Prompt;
