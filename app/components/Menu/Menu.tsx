"use client";

import { useCallback, useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import GreyDonateButton from "@/app/components/Kofi/GreyDonateButton";
import HomeButton from "./HomeButton";

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
      ease: "circIn",
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

  console.log(isOpen);

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
          ${
            iconPosition?.right || iconPosition?.margin
              ? ""
              : "bg-black/80 backdrop-blur-lg p-4 rounded-l-md"
          }
        `}
      >
        <AiOutlineMenu
          size={width < 768 ? 30 : 40}
          onClick={toggleOpen}
          color={!isOpen ? "white" : "white"}
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
                w-1/2
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
              <section className="w-full h-36 border-b-[1px] border-white/40 absolute z-[2000] top-0 bg-black flex flex-row overflow-hidden justify-between items-center">
                <HomeButton />
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setSubOpen(false);
                  }}
                  className="flex m-6 h-24 w-24 ml-auto"
                >
                  <Image src={"/x.svg"} alt="x" height={100} width={100} />
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
                          <div className="text-2xl bg-neutral-900 w-full flex flex-col md:flex-row gap-4 md:gap-10 align-middle items-center justify-evenly text-white/90 py-4 font-semibold">
                            <Link
                              href={"/cadets/2024"}
                              className="hover:opacity-70 flex"
                              prefetch
                            >
                              2X24
                            </Link>
                            <Link
                              href={"/cadets/2023"}
                              className="hover:opacity-70 flex"
                              prefetch
                            >
                              2X23
                            </Link>
                            <Link
                              href={"/cadets/2022"}
                              className="hover:opacity-70 flex"
                              prefetch
                            >
                              2X22
                            </Link>
                            <Link
                              href={"/cadets/2021"}
                              className="hover:opacity-70 flex"
                              prefetch
                            >
                              2X21
                            </Link>
                            <Link
                              href={"/cadets/2020"}
                              className="hover:opacity-70 flex"
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

              <section className="w-full h-36 border-t-[1px] border-white/40 absolute right-0 z-[2000] bottom-0 bg-black flex flex-row overflow-hidden">
                <button
                  onMouseEnter={() => setDonateHover(true)}
                  onMouseLeave={() => setDonateHover(false)}
                  className="w-1/3 z-50 h-full border-r-[1px] border-white/40 p-10 text-4xl tracking-wide justify-center items-center"
                >
                  Donate
                </button>
                <motion.div
                  initial={{ width: 0 }}
                  animate={donateHover ? { width: "33.333333%" } : { width: 0 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="h-full bg-white/10 absolute left-0"
                ></motion.div>
              </section>

              <GreyDonateButton />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
