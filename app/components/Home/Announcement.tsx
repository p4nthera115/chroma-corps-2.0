export default function Announcement() {
  return (
    <div className="md:p-8 text-black font-mono flex flex-col justify-center text-center h-full ">
      <div className="w-full h-full justify-center items-center p-3 md:p-8 flex">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jzVm_8EQuzM?si=XU0Hgxf7w1Xqx0j4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          // referrerpolicy="strict-origin-when-cross-origin"
          // allowfullscreen
          className="flex aspect-video w-full md:w-3/5 h-full rounded-xl"
        ></iframe>
      </div>
      <div className=" relative rounded-xl flex flex-col gap-8 bg-[#ffe600] w-full p-4 md:p-6 md:py-8 diagonal-lines-black">
        <div className="border flex flex-col gap-8 h-full w-full bg-[#ffe600] p-4 md:p-6 md:py-9 border-black">
          <p className="text-base md:text-3xl font-semibold">
            2024 Chroma Corps cadet tryouts are taking place now! Enter your
            cadet and get involved!
          </p>
          <a
            href="https://discord.com/invite/ejaQBdWyyN"
            className="max-w-fit mx-auto"
          >
            <button className="bg-black text-[#ffe600] text-sm md:text-base py-4 px-4 md:px-16 rounded shadow-inner hover:scale-[105%] transition font-mono">
              <h2>Join the Discord server</h2>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
