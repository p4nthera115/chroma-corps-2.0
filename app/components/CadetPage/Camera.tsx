"use client";

import { Cadet } from "@/app/types";
import React, { useEffect, useState } from "react";

interface CameraProps {
  cadetImg: string | undefined;
  cadet: Cadet | undefined;
}

const Camera: React.FC<CameraProps> = ({ cadetImg, cadet }) => {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const newSeconds = prevTime.seconds + 1;
        const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
        const newHours = prevTime.hours + Math.floor(newMinutes / 60);

        return {
          hours: newHours,
          minutes: newMinutes % 60,
          seconds: newSeconds % 60,
        };
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatTime = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <>
      <img
        src={cadetImg}
        alt={cadet?.name}
        className={`
          md:hidden
          absolute
          h-full
          scale-[150%]
          min-w-max
          top-14
        `}
      />
      <div
        className={`relative h-full w-full border ${cadet?.borderColor} rounded-lg overflow-hidden hidden md:block`}
      >
        <div
          className={`z-30 absolute w-full h-full ${cadet?.teamColorOpacity} ${cadet?.bgLines}`}
        ></div>
        <div className="z-[48] absolute w-full h-full justify-center items-center">
          <div className="absolute left-0 m-2 h-16 w-16 border border-r-transparent border-b-transparent"></div>
          <div className="absolute right-0 m-2 h-16 w-16 border border-l-transparent border-b-transparent"></div>
          <div className="absolute left-0 bottom-0 m-2 h-16 w-16 border border-r-transparent border-t-transparent"></div>
          <div className="absolute right-0 bottom-0 m-2 h-16 w-16 border border-l-transparent border-t-transparent"></div>
          {/* <div className="animate-camera h-full w-full "> */}
          <div className="absolute left-1/2 top-1/2">
            <div className="absolute left-0 m-2 h-6 w-6 border border-l-transparent border-t-transparent"></div>
            <div className="absolute right-0 m-2 h-6 w-6 border border-r-transparent border-t-transparent"></div>
            <div className="absolute left-0 bottom-0 m-2 h-6 w-6 border border-l-transparent border-b-transparent"></div>
            <div className="absolute right-0 bottom-0 m-2 h-6 w-6 border border-r-transparent border-b-transparent"></div>
            <div className="absolute left-0 h-3 w-3 border-[0.5px] border-r-transparent border-b-transparent"></div>
            <div className="absolute right-0 h-3 w-3 border-[0.5px] border-l-transparent border-b-transparent"></div>
            <div className="absolute left-0 bottom-0 h-3 w-3 border-[0.5px] border-r-transparent border-t-transparent"></div>
            <div className="absolute right-0 bottom-0 h-3 w-3 border-[0.5px] border-l-transparent border-t-transparent"></div>
          </div>
          {/* </div> */}
        </div>
        <div className={`absolute ${cadet?.cameraPos}`}>
          <img
            src={cadetImg}
            alt="cadetImg"
            className="sepia translate-y-[20rem] animate-camera"
          />
          {/* { // ? POTENTIAL TODO: Add more camera views for each other cadet picture} */}
        </div>
        <div className="hidden z-50 md:block absolute left-0 m-4">
          <p className="font-cyber absolute left-6 m-1">REC</p>
          <div className="absolute h-4 w-4 m-2 left-0 bg-red-600 rounded-full animate-pulse"></div>
        </div>
        <p className="font-cyber z-50 w-full absolute bottom-0 p-3 text-center">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:
          {formatTime(time.seconds)}
        </p>
      </div>
    </>
  );
};

export default Camera;
