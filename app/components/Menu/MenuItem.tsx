"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const itemVariants = {
  open: {
    // y: 0,
    // opacity: 1,
    // transition: {
    //   y: { stiffness: 1000, velocity: -100 },
    // },
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: { duration: 0.3 },
  },
  closed: {
    // y: 50,
    // opacity: 0,
    // transition: {
    //   y: { stiffness: 1000 },
    // },
    opacity: 0,
    rotateX: 90,
    translateY: 0,
    translateX: 0,
    transition: { duration: 0.3 },
  },
};

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  const pathname = usePathname();
  const activePage = pathname.replace("/", "") === label.toLowerCase();

  return (
    <button>
      <motion.div
        variants={itemVariants}
        className={`${
          activePage ? "bg-neutral-700" : ""
        } px-10 py-0 transition font-semibold text-[#ffe600] text-left text-4xl xl:text-6xl`}
        onClick={onClick}
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="py-8"
        >
          {label}
        </motion.div>
      </motion.div>
    </button>
  );
};

export default MenuItem;
