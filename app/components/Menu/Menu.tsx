"use client";

import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import HomeButton from "./HomeButton";
import { TfiClose } from "react-icons/tfi";

const menuVariants = {
  closed: {
    x: 1000,
    transition: {
      delay: 0.15,
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.3,
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

interface MenuProps {
  iconPosition?: {
    right?: string;
    margin?: string;
  };
}

const Menu: React.FC<MenuProps> = ({ iconPosition }) => {
  const [width, setWidth] = useState<number>(0);
  const [donateHover, setDonateHover] = useState(false);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  const toggleSubOpen = useCallback(() => {
    setSubOpen((value) => !value);
  }, []);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
    if (isOpen === false) {
      setSubOpen(false);
    }
  }, []);

  const menuItems = ["Cadets", "Story", "FAQs", "Merch", "Credits"];

  return (
    <div className="flex max-h-full max-w-full z-[100] overflow-hidden absolute">
      <div
        className={`
          fixed
          z-[1000]
          right-0
          ${iconPosition?.right ? iconPosition.right : "right-0"}    
          ${iconPosition?.margin ? iconPosition.margin : "m-6"}    
          cursor-pointer 
        `}
      >
        <AiOutlineMenu
          size={width < 768 ? 30 : 40}
          onClick={toggleOpen}
          color={"white"}
        />
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed h-full w-full z-40 bg-black/20 backdrop-blur-md"
        ></motion.div>
      )}

      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && (
          <>
            <motion.div
              className="
                flex
                flex-col
                justify-center
                items-center
                min-h-full
                w-full
                md:w-1/2
                right-0
                fixed
                shadow-md
                bg-black
                backdrop-blur-lg
                overflow-hidden
                text-7xl
                sm:text-8xl
                md:text-8xl
                lg:text-8xl
                p-8
                z-[2000]
              "
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <section className="w-full h-20 md:h-36 border-b-[1px] border-white/40 absolute z-[2000] top-0 bg-black flex flex-row overflow-hidden justify-between items-center">
                <HomeButton />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSubOpen(false);
                  }}
                  className="flex h-12 w-12 md:h-24 md:w-24 ml-auto m-3 md:m-6 items-center justify-center"
                >
                  <TfiClose />
                </button>
              </section>

              <motion.div
                variants={itemVariants}
                className="flex z-3 flex-col cursor-pointer font-cyber w-full absolute"
              >
                {menuItems.map((item) => {
                  if (item === "Cadets") {
                    return (
                      <>
                        <MenuItem
                          onClick={toggleSubOpen}
                          label={item}
                          key={item}
                        />
                        {subOpen && (
                          <div className="text-base md:text-2xl bg-neutral-900 w-full flex flex-row align-middle items-center justify-evenly text-white/90 font-semibold">
                            <Link
                              href={"/cadets/2024"}
                              className="hover:opacity-70 flex h-full w-full justify-center items-center py-2 md:py-4 bg-[#0a0a0a]"
                              prefetch
                            >
                              2X24
                            </Link>
                            <Link
                              href={"/cadets/2023"}
                              className="hover:opacity-70 flex h-full w-full justify-center items-center py-2 md:py-4 bg-[#121212]"
                              prefetch
                            >
                              2X23
                            </Link>
                            <Link
                              href={"/cadets/2022"}
                              className="hover:opacity-70 flex h-full w-full justify-center items-center py-2 md:py-4 bg-[#0a0a0a]"
                              prefetch
                            >
                              2X22
                            </Link>
                            <Link
                              href={"/cadets/2021"}
                              className="hover:opacity-70 flex h-full w-full justify-center items-center py-2 md:py-4 bg-[#121212]"
                              prefetch
                            >
                              2X21
                            </Link>
                            <Link
                              href={"/cadets/2020"}
                              className="hover:opacity-70 flex h-full w-full justify-center items-center py-2 md:py-4 bg-[#0a0a0a]"
                              prefetch
                            >
                              2X20
                            </Link>
                          </div>
                        )}
                      </>
                    );
                  } else if (item === "Merch") {
                    return (
                      <MenuItem
                        onClick={() =>
                          window.open(
                            "https://my-store-b86026.creator-spring.com/",
                            "_blank"
                          )
                        }
                        label={item}
                        key={item}
                      />
                    );
                  } else if (item === "Home") {
                    return (
                      <MenuItem
                        onClick={() => router.push("/")}
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

              <section className="w-full h-20 md:h-36 border-t-[1px] border-white/40 absolute right-0 z-[2000] bottom-0 bg-black flex flex-row overflow-hidden">
                <button
                  onClick={() =>
                    window.open(
                      "https://ko-fi.com/anzuwebdevs/goal?g=0",
                      "_blank"
                    )
                  }
                  onMouseEnter={() => setDonateHover(true)}
                  onMouseLeave={() => setDonateHover(false)}
                  className="w-2/3 md:w-1/3 z-50 h-full border-r-[1px] border-white/40 text-lg md:text-4xl justify-center items-center font-cyber"
                >
                  Donate
                </button>
                <motion.div
                  initial={{ width: 0 }}
                  animate={donateHover ? { width: "100%" } : { width: 0 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-full bg-white/10 absolute left-0"
                ></motion.div>
                <div className="w-1/3 md:w-2/3 h-full flex bg-black absolute z-[51] right-0"></div>
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
