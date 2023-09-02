"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Image from "next/image";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const images = [
  "/images/CadetCarousel/double.png",
  "/images/CadetCarousel/trout.png",
  "/images/CadetCarousel/teted.png",
  "/images/CadetCarousel/fatcat.png",
  "/images/CadetCarousel/dako.png",
  "/images/CadetCarousel/ozan-banner1.png",
  "/images/CadetCarousel/chedilkm2.png",
  "/images/CadetCarousel/beatrice.png",
  "/images/CadetCarousel/nikittysan.png",
  "/images/CadetCarousel/weiao.png",
];

function Carousel() {
  const [mouse, setMouse] = useState(0);
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocityFactor = useTransform(scrollVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const direction = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = direction.current * 150 * (delta / 1000);

    if (velocityFactor.get() > 0) {
      direction.current = -1;
    } else if (velocityFactor.get() < 0) {
      direction.current = 1;
    } else if (velocityFactor.get() == 0) {
      direction.current = 0;
    }

    moveBy -= direction.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy + (right ? -10 : left ? 10 : 0));
  });

  return (
    <div className="parallax flex flex-row relative h-full w-full border-8 border-[#ffe600] diagonal-lines-black bg-[#ffe600]">
      <div className="h-full w-full absolute flex justify-between items-center px-4 md:px-8">
        <button
          className="rounded-full bg-black z-50 h-8 w-8 md:h-14 md:w-14 opacity-50 hover:opacity-100 transition flex justify-center items-center"
          onMouseDown={() => setLeft(true)}
          onMouseUp={() => setLeft(false)}
          onTouchStart={() => setLeft(true)}
          onTouchEnd={() => setLeft(false)}
        >
          <BsFillCaretLeftFill color="#ffe600" />
        </button>
        <button
          className="rounded-full bg-black z-50 h-8 w-8 md:h-14 md:w-14 opacity-50 hover:opacity-100 transition flex justify-center items-center"
          onMouseDown={() => setRight(true)}
          onMouseUp={() => setRight(false)}
          onTouchStart={() => setRight(true)}
          onTouchEnd={() => setRight(false)}
        >
          <BsFillCaretRightFill color="#ffe600" />
        </button>
      </div>

      <motion.div className="scroller flex" style={{ x: baseX }}>
        <section className="relative h-full w-full flex flex-row gap-8 translate-x-[-70rem]">
          {images.map((image: string) => (
            <Image
              quality={100}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              loading="eager"
              className="object-fit h-full min-w-max scale-[120%]"
            />
          ))}
          {images.map((image: string) => (
            <Image
              quality={100}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              loading="eager"
              className="object-fit h-full min-w-max scale-[120%]"
            />
          ))}
          {images.map((image: string) => (
            <Image
              quality={100}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              loading="eager"
              className="object-fit h-full min-w-max scale-[120%]"
            />
          ))}
          {images.map((image: string) => (
            <Image
              quality={100}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              loading="lazy"
              className="object-fit h-full min-w-max scale-[120%]"
            />
          ))}
          {images.map((image: string) => (
            <Image
              quality={100}
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              loading="lazy"
              className="object-fit h-full min-w-max scale-[120%]"
            />
          ))}
        </section>
      </motion.div>
    </div>
  );
}

export default Carousel;
