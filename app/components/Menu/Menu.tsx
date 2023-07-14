"use client";

import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuVariants = {
  closed: {
    scale: 0,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Menu = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const toggleSubOpen = useCallback(() => {
    setSubOpen((value) => !value);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    if (isOpen === false) {
      setSubOpen(false);
    }
  }, []);

  const menuItems = ["About", "Lore", "Join"];

  return (
    <div className="flex max-h-full max-w-full z-10 overflow-hidden">
      <div
        className="
          fixed
          z-20
          right-0       
          m-[1.5rem]
          cursor-pointer 
        "
      >
        <AiOutlineMenu
          size={40}
          onClick={toggleOpen}
          color={isOpen ? "black" : "white"}
        />
      </div>

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && (
          <>
            <motion.div
              className="
                fixed
                h-[100vh]
                w-[100vw]
                shadow-md
                bg-yellow-400/90
                overflow-hidden
                text-6xl
                sm:text-8xl
                md:text-8xl
              "
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex z-3 mt-16 flex-col cursor-pointer font-cyber"
              >
                <div className=" text-center">
                  <MenuItem onClick={toggleSubOpen} label="Cadets +" />
                  {subOpen && (
                    <div className="text-2xl flex flex-row gap-16 justify-center text-black py-4 font-semibold">
                      <p
                        className="hover:opacity-70"
                        onClick={() => router.push("/cadets/2022")}
                      >
                        2022
                      </p>
                      <p
                        className="hover:opacity-70"
                        onClick={() => router.push("/cadets/2021")}
                      >
                        2021
                      </p>
                      <p
                        className="hover:opacity-70"
                        onClick={() => router.push("/cadets/2020")}
                      >
                        2020
                      </p>
                    </div>
                  )}
                </div>
                {menuItems.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => router.push(`/${item.toLowerCase()}`)}
                    label={item}
                  />
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
