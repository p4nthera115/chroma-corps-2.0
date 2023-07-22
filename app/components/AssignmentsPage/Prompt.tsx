interface PromptProps {
  prompt: string | undefined;
  assignmentNo: number | undefined;
}

const Prompt: React.FC<PromptProps> = ({ prompt, assignmentNo }) => {
  return (
    <div className="w-screen mb-8 justify-center items-center flex bg-neutral-900">
      <h1 className="font-cyber text-7xl flex p-4">
        Assignment {assignmentNo?.toString()} <br className="p-4" />
        {prompt}
      </h1>
    </div>
  );
};

export default Prompt;
