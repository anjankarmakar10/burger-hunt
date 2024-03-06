"use client";

import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="flex flex-col mt-32 md:flex-row items-center gap-10">
      <div className="flex-1 relative">
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 10,
          }}
          className="w-full relative z-20 flex-1"
          src="/image1.png"
          alt=""
          viewport={{ once: true }}
        />
        <div className="absolute z-10 top-[40%] left-4 right-[10%]  bottom-[15%] rounded-full bg-[#3c4650] bg-opacity-40 blur-2xl "></div>
      </div>
      <div className="flex-1 md:pt-32 text-center md:text-start">
        <h2 className="font-bold text-5xl leading-snug">
          Delicious Burger Creations Await You
        </h2>
        <p className="my-9 text-lg ">
          Indulge in a symphony of savory delights as our artisanal burgers
          redefine culinary excellence. From succulent patties to gourmet
          toppings, each bite is a journey through a world of flavors.{" "}
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="px-6 py-2 text-2xl font-semibold bg-secondary rounded-full"
        >
          Order Now
        </motion.button>
      </div>
    </section>
  );
};
export default Features;
