// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex flex-col relative h-full w-full text-center  bg-[#ffe600] diagonal-lines-yellow">
//       <h1 className="text-5xl text-black font-cyber font-bold">GET INVOLVED</h1>

//       <div className="my-16 flex justify-center gap-10">
//         <a href="https://discord.com/invite/ejaQBdWyyN">
//           <div className="bg-black text-[#ffe600] py-4 px-16 rounded shadow-inner hover:scale-110 transition font-mono">
//             <h2>Join the Discord server</h2>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <div className="relative h-full w-full bg-[#ffe600] diagonal-lines-yellow flex flex-col gap-10 justify-center">
      <h1 className="text-5xl text-black font-cyber font-bold flex justify-center">
        GET INVOLVED
      </h1>

      <div className="relative  flex justify-center">
        <a href="https://discord.com/invite/ejaQBdWyyN">
          <button className="bg-black text-[#ffe600] py-4 px-16 rounded shadow-inner hover:scale-110 transition font-mono">
            <h2>Join the Discord server</h2>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
