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

  const menuItems = ["Home", "Cadets +", "FAQs", "Credits", "Merch"];

  return (
    <div className="flex max-h-full max-w-full z-[100] overflow-hidden absolute">
      <div
        className="
          fixed
          z-20
          right-5    
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
                flex
                flex-col
                justify-center
                min-h-full
                min-w-full
                fixed
                shadow-md
                bg-yellow-400
                overflow-hidden
                text-7xl
                sm:text-8xl
                md:text-8xl
                lg:text-8xl
              "
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <motion.div
                variants={itemVariants}
                className="flex z-3 flex-col cursor-pointer font-cyber"
              >
                {menuItems.map((item) => {
                  if (item === "Cadets +") {
                    return (
                      <>
                        <MenuItem onClick={toggleSubOpen} label={item} />
                        {subOpen && (
                          <div className="text-2xl flex flex-col md:flex-row gap-4 md:gap-16 align-middle items-center justify-center text-black py-4 font-semibold">
                            <p
                              className="hover:opacity-70 flex"
                              onClick={() => router.push("/cadets/2022")}
                            >
                              2022
                            </p>
                            <p
                              className="hover:opacity-70 flex"
                              onClick={() => router.push("/cadets/2021")}
                            >
                              2021
                            </p>
                            <p
                              className="hover:opacity-70 flex"
                              onClick={() => router.push("/cadets/2020")}
                            >
                              2020
                            </p>
                          </div>
                        )}
                      </>
                    );
                  } else if (item === "Merch") {
                    return (
                      <MenuItem
                        onClick={() =>
                          router.push(
                            "https://my-store-b86026.creator-spring.com/"
                          )
                        }
                        label={item}
                        key={item}
                      />
                    );
                  } else {
                    return (
                      <MenuItem
                        onClick={() => router.push(`/${item.toLowerCase()}`)}
                        label={item}
                        key={item}
                      />
                    );
                  }
                })}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
