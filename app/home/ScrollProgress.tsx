"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed bg-transparent w-48 right-0 top-1/2 -translate-y-1/2 z-[300] rotate-90">
      <motion.div
        className="h-3 bg-white  translate-x-1/2 "
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default ScrollProgress;
