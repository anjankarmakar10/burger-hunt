"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" flex flex-col-reverse md:flex-row">
      <div className="pt-20 flex-2 text-center md:text-start">
        <h1 className="font-bold  text-5xl md:text-7xl max-w-4xl md:leading-snug">
          Bite into Flavorful Delights
        </h1>
        <p className="py-10 text-xl mx-auto md:mx-0 font-medium md:max-w-[400px]">
          Savor the Juicy Goodness, Crafted with Passion. Indulge in Burger
          Bliss Beyond Compare.
        </p>
        <motion.button
          whileTap={{
            scale: 0.9,
          }}
          className="font-semibold text-xl px-6 py-2 rounded-lg bg-secondary"
        >
          Get Started
        </motion.button>
      </div>
      <div className="flex-2 relative">
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            type: "spring",
            damping: 8,
            duration: 0.3,
          }}
          className="absolute top-[15%] left-8 right-[20%] md:right-8 bottom-[20%] rounded-full bg-[#3c4650] bg-opacity-50 blur-2xl z-10"
        ></motion.div>

        <motion.img
          initial={{
            y: "-115%",
          }}
          animate={{
            y: 0,
          }}
          transition={{
            type: "spring",
            damping: 8,
            duration: 0,
          }}
          className="w-full   relative z-20 lg:mt-[-4.5rem] md:max-w-2xl"
          src="/bg.webp"
          alt=""
        />
      </div>
    </section>
  );
};
export default Hero;
