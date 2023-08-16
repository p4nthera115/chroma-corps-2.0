const Title = () => {
  const chroma = "CHROMA".split("");
  const corps = "CORPS|".split("");

  const jap = "クロマ隊".split("");

  return (
    <div className="relative h-full items-center flex">
      <section className="relative h-[90%] flex flex-row gap-6  border-black ml-24">
        <div className=" border-black w-20 m-0 flex flex-col gap-4 justify-center">
          {chroma.map((letter) => (
            <h1
              key={letter}
              className="text-black text-7xl font-cyber font-extrabold text-center"
            >
              {letter}
            </h1>
          ))}
        </div>
        <div className="w-20 m-0 flex flex-col gap-4 justify-center  border-black">
          {corps.map((letter, i) => (
            <h1
              key={letter}
              className={`${
                i === 5 ? "text-transparent" : "text-black"
              } text-7xl font-cyber font-extrabold text-center`}
            >
              {letter}
            </h1>
          ))}
        </div>
      </section>
      <section className="absolute right-0 h-[80%] border-black mr-28">
        <div className=" border-black w-20 m-0 flex flex-col gap-6 justify-center">
          {jap.map((letter) => (
            <h1
              key={letter}
              className="text-black text-8xl  font-bold text-center"
            >
              {letter}
            </h1>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Title;
