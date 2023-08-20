"use client";

import { useRef } from "react";
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

function Carousel() {
  const images = [
    "/images/CadetCarousel/cropped-hieumay.png",
    "/images/CadetCarousel/dehaf-full.png",
    "/images/CadetCarousel/joharts.png",
    "/images/CadetCarousel/kawffee.png",
    "/images/CadetCarousel/ozan-banner1.png",
    "/images/CadetCarousel/silverstar1234-banner1.png",
  ];

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

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax flex flex-row relative h-full w-full border-8 border-[#ffe600]  diagonal-lines-black bg-[#ffe600]">
      <motion.div className="scroller flex" style={{ x: baseX }}>
        <section className="relative h-full w-full flex flex-row gap-12 -translate-x-60">
          {images.map((image: string) => (
            <Image
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-fit h-full min-w-max scale-150"
            />
          ))}
          {images.map((image: string) => (
            <Image
              key={image}
              src={image}
              alt={image}
              width={100}
              height={100}
              className="object-fit h-full min-w-max scale-150"
            />
          ))}
          {images.map((image: string) => (
            <Image
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
