"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();
  const [hover, setHover] = useState(false);
  return (
    <>
      <motion.button
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        onClick={() => router.push("/")}
        animate={{
          rotate: hover ? -90 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0.1,
          delay: hover ? 0 : 0.15,
        }}
        className="hidden md:flex flex-col gap-[0.1rem] md:gap-[0.17rem] px-4 md:px-10 justify-between z-50"
      >
        <motion.div className="flex w-10 md:w-16">
          <Image
            src={"/images/LogoTop.svg"}
            alt="logo-top"
            height={100}
            width={100}
          />
        </motion.div>
        <motion.div
          animate={{
            y: hover ? 150 : 0,
          }}
          transition={{
            delay: hover ? 0.2 : 0,
            type: "tween",
            duration: hover ? 0.2 : 0.1,
          }}
          className="flex w-[2.7rem] md:w-[4.3rem]"
        >
          <Image
            src={"/images/LogoBottom.svg"}
            alt="logo-bottom"
            height={100}
            width={100}
            className="mt-auto"
          />
        </motion.div>
      </motion.button>
      <motion.div
        animate={{ x: hover ? 200 : 0 }}
        transition={{
          delay: hover ? 0.2 : 0,
          type: "tween",
          duration: hover ? 0.2 : 0.1,
        }}
        className="z-[45] bg-black absolute w-[220px] ml-16 h-full md:block hidden"
      ></motion.div>
      <motion.button
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        onClick={() => router.push("/")}
        className="z-40 absolute w-[250px] ml-6 hidden justify-center items-center text-4xl font-cyber md:flex text-white"
      >
        Home
      </motion.button>
      <button
        onClick={() => router.push("/")}
        className="flex md:hidden flex-col gap-[0.1rem] md:gap-[0.17rem] px-4 md:px-10 justify-between z-50"
      >
        <div className="flex w-10 md:w-16">
          <Image
            src={"/images/LogoTop.svg"}
            alt="logo-top"
            height={100}
            width={100}
          />
        </div>
        <div className="flex w-[2.7rem] md:w-[4.3rem]">
          <Image
            src={"/images/LogoBottom.svg"}
            alt="logo-bottom"
            height={100}
            width={100}
            className="mt-auto"
          />
        </div>
      </button>
    </>
  );
}
