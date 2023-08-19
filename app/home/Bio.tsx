const Bio = () => {
  return (
    <div className="flex flex-col justify-center gap-8 ">
      <div className="flex flex-col align-middle justify-center">
        <h1 className="font-cyber font-extrabold text-center text-[#ffe600] lg:text-6xl md:text-4xl text-3xl mt-20 mb-8">
          FOR THE LOVE OF ART.
          <a id="about-section"></a>
        </h1>
      </div>
      <div className="flex flex-col justify-center mx-auto text-center max-w-[50%] md:text-3xl text-2xl font-mono gap-4">
        <h2 className="">
          The ultimate art Battle Royale. Only the strongest will make it to the
          end.
        </h2>
        <h2 className="">
          But more than a contest and more than the prizes, Chroma Corps brings
          artists together every summer to produce thousands of art pieces,
          share their work, connect and collaborate.
        </h2>
      </div>
      <br />
      <div className="mx-auto mt-0 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="464px"
          height="4px"
        >
          <path
            fill-rule="evenodd"
            fill="#ffe600"
            d="M-0.002,-0.001 L-0.002,3.999 L40.999,3.999 L45.999,0.999 L463.999,0.999 L463.999,-0.001 L-0.002,-0.001 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Bio;
