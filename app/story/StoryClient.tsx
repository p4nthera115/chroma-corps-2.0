"use client";

const StoryClient = () => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center gap-12 h-full xs:w-1/2 sm:w-3/4 md:w-3/4 lg:w-1/2 pb-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-5xl font-cyber mx-auto py-8">
          The Stories of Chroma Corps
        </h2>
        <p className="text-3xl font-mono">
          Uncover the eventful past of the prestigious polymecha academy, Chroma
          Corps.
        </p>
      </div>
      <div className="flex flex-col gap-8 text-xl font-mono leading-loose h-full">
        <p>
          With rival organizations plotting to sabotage the academy, plants
          growing out of control and wreaking havoc, and two graduates
          accidentally folding the fabric of reality... chaos always finds life
          at Chroma Corps.
        </p>
        <p>
          Come back each year to hear how the latest batch of academy cadets
          fared and what series of (un)fortunate events happened to unfold!
        </p>
      </div>
    </div>
  );
};

export default StoryClient;
