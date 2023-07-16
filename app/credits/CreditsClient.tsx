import React from "react";

const CreditsClient = () => {
  return (
    <div
      className="
    inset-0
    flex 
    flex-col
  "
    >
      <h1 className="font-cyber font-extrabold text-center text-yellow-400 lg:text-5xl md:text-4xl text-3xl mb-4">
        CREDITS
      </h1>
      <div className="flex flex-col text-center m-8">
        <h2 className="text-2xl">
          This website was created by @_panthera and @lifguson.
        </h2>
        <p>We created this website out of love for the Chroma Corps contest.</p>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-xl">
          Our gratitude to those who cooperated with us in gathering images and
          information.
        </h2>
      </div>
    </div>
  );
};

export default CreditsClient;
