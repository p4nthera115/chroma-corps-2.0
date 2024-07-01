"use client";

import { motion } from "framer-motion";

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
    <button>
      <motion.div
        variants={itemVariants}
        className="py-3 md:px-10 md:py-5 transition font-semibold text-white text-center text-3xl md:text-4xl xl:text-6xl"
        onClick={onClick}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          // className="py-8 bg-clip-text relative
          // before:absolute before:inset-0 before:-translate-x-full
          // hover:before:animate-[shimmer_1.5s_infinite]
          // before:bg-gradient-to-r
          // before:from-transparent before:via-yellow-100/80 before:to-transparent"
        >
          {label}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default MenuItem;
