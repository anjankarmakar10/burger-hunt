"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrollDown(true);
      } else {
        setIsScrollDown(false);
      }
    };
    console.log(isScrollDown);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollDown]);

  return (
    <motion.div
      animate={{
        backgroundColor: isScrollDown ? "white" : "transparent",
      }}
      transition={{
        ease: "easeIn",
        duration: 0.5,
      }}
      className={` z-50 sticky top-0 w-full ${
        isScrollDown ? " text-secondary " : " text-white"
      }`}
    >
      <nav className="max-w-[1250px] px-4 mx-auto flex items-center justify-between py-6  ">
        <Link className="text-3xl font-bold " href={"/"}>
          Burger
          <span className="text-secondary">Hunt</span>
        </Link>
        <ul className="text-xl  hidden md:flex items-center gap-8">
          <li>
            <Link
              className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
              href="/"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
              href="/"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
              href="/"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className="text-xl text-secondary py-2 px-6 rounded-full border-2 border-secondary  font-semibold hidden md:flex mr-10">
          Sign In
        </button>

        <MobileMenu />
      </nav>
    </motion.div>
  );
};
export default Navbar;
