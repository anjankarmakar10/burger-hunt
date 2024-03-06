"use client";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./MobileMenu.module.css";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Home",

    href: "/",
  },

  {
    title: "About",

    href: "/",
  },

  {
    title: "Features",

    href: "/",
  },

  {
    title: "Contact",

    href: "/",
  },
];

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },

  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },

  enter: (i) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },

  closed: { scale: 0, transition: { duration: 0.4 } },
};

const MobileMenu = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && (
          <>
            <motion.nav
              initial="initial"
              animate="enter"
              exit="exit"
              variants={menuSlide}
              className={styles.menu}
            >
              <div className={styles.body}>
                <div className={styles.nav}>
                  <div className={styles.header}>
                    <p>Navigation</p>
                  </div>

                  {navItems.map((data, index) => {
                    return (
                      <motion.div
                        key={data.href}
                        className={styles.link}
                        custom={index}
                        variants={slide}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                      >
                        <motion.div
                          variants={scale}
                          animate={isActive ? "open" : "closed"}
                          className={styles.indicator}
                        ></motion.div>

                        <Link href={data.href}>{data.title}</Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default MobileMenu;
