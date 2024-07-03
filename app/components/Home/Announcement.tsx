export default function Announcement() {
  return (
    <div className="md:p-8 text-black font-mono flex flex-col justify-center text-center ">
      <div className="h-72 w-full bg-black "></div>
      <div className="flex flex-col gap-8 bg-[#ffe600] w-full p-6 diagonal-lines-black">
        <p className="text-3xl font-semibold">
          2024 Chroma Corps Tryouts are taking place now! Enter your cadet and
          get involved!
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
  );
}
