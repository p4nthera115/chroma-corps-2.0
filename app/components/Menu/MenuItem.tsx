"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
    // className="
    //   relative
    //   before:absolute before:inset-0
    //   before:-translate-x-full
    //   hover:before:animate-[shimmer_1.2s_infinite]
    //   before:bg-gradient-to-r
    //   before:from-transparent before:via-yellow-100/50 before:to-transparent
    // "
    >
      <motion.div
        variants={itemVariants}
        className="px-4 py-0 transition font-semibold text-neutral-900 text-center"
        onClick={onClick}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="py-8 bg-clip-text relative
          before:absolute before:inset-0 before:-translate-x-full
          hover:before:animate-[shimmer_1.5s_infinite]
          before:bg-gradient-to-r
          before:from-transparent before:via-yellow-300/50 before:to-transparent"
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MenuItem;
