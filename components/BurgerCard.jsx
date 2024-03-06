"use client";

import { motion } from "framer-motion";

const BurgerCard = ({ burger }) => {
  return (
    <article className="flex-1 basis-72  flex flex-col  transition-all duration-300  pt-4 rounded-2xl  h-fit cursor-pointer">
      <div className="relative">
        <motion.img
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            damping: 9,
          }}
          className="w-60 mx-auto relative z-20"
          src={burger.image}
          alt={burger.name}
        />
        <motion.div className="absolute inset-0 rounded-full bg-[#3c4650] bg-opacity-50 blur-2xl z-10"></motion.div>
      </div>
      <div className="flex flex-col gap-2 items-center p-4">
        <h6 className="text-xl font-semibold">{burger.name}</h6>
        <span className="text-lg font-medium">${burger.price}</span>
        <div className="flex items-center">
          {Array(burger.rating)
            .fill("")
            .map((item, index) => (
              <svg
                key={index}
                width="24"
                height="22"
                viewBox="0 0 24 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                  fill="#E6CF00"
                />
              </svg>
            ))}
        </div>
        <button className="text-lg mt-4 font-semibold px-6 py-1 rounded-full border-2 border-secondary">
          Add to cart
        </button>
      </div>
    </article>
  );
};
export default BurgerCard;
