"use client";

import { useGlitch, GlitchHandle } from "react-powerglitch";

export const ComingSoon = () => {
  const glitch: GlitchHandle = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2500,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.008,
      amplitudeY: 0.05,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.1,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  return (
    <div
      className="
        bg-neutral-950
        flex 
        fixed
        justify-center
        items-center
        inset-0
      "
    >
      <img src="/images/cc.jpg" alt="" className="opacity-[0.15]" />
      <div
        className="
          flex 
          fixed
          justify-center
          items-center
        "
      >
        <h1
          className="
            text-5xl
            font-bold
            font-cyber
            text-[#f4ce34]
          "
          ref={glitch.ref}
        >
          Coming soon...
        </h1>
      </div>
    </div>
  );
};
