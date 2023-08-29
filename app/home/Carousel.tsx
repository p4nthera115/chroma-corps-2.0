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
  "/images/CadetCarousel/chedilkm.png",
  "/images/CadetCarousel/beatrice.png",
  "/images/CadetCarousel/nikittysan.png",
  "/images/CadetCarousel/weiao.png",
];

function Carousel() {
  const [mouse, setMouse] = useState(0);
  const [mouseSide, setMouseSide] = useState(0);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    (document.onmousemove = (e: MouseEvent) => {
      setMouse((e.clientX / window.innerWidth - 0.5) * 2);
      return setMouseSide(mouse > 0 ? -1 : 1);
    }),
      [mouse];
  });

  console.log(mouseSide);

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

    baseX.set(baseX.get() + moveBy + (mouseDown ? mouseSide * 10 : 0));
  });

  return (
    <div className="parallax flex flex-row relative h-full w-full border-8 border-[#ffe600] diagonal-lines-black bg-[#ffe600]">
      <div className="h-full w-full absolute flex justify-between items-center px-8">
        <button
          className="rounded-full bg-black z-50 h-14 w-14 opacity-50 hover:opacity-100 transition flex justify-center items-center"
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
        >
          <BsFillCaretLeftFill color="#ffe600" />
        </button>
        <button
          className="rounded-full bg-black z-50 h-14 w-14 opacity-50 hover:opacity-100 transition flex justify-center items-center"
          onMouseDown={() => setMouseDown(true)}
          onMouseUp={() => setMouseDown(false)}
        >
          <BsFillCaretRightFill color="#ffe600" />
        </button>
      </div>

      <motion.div className="scroller flex" style={{ x: baseX }}>
        <section className="relative h-full w-full flex flex-row gap-12 -translate-x-60">
          {images.map((image: string) => (
            <img
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-fit h-full min-w-max scale-150"
            />
          ))}
          {images.map((image: string) => (
            <img
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-fit h-full min-w-max scale-150"
            />
          ))}
          {images.map((image: string) => (
            <img
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-fit h-full min-w-max scale-150"
            />
          ))}
        </section>
      </motion.div>
    </div>
  );
}

export default Carousel;
