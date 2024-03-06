"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const burgerList = [
  {
    id: 1,
    name: "Double Cheese Zinger Burger",
    price: 28,
    image: "/b5.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Double Cheese Bacon Fish Burger",
    price: 32,
    image: "/b6.png",
    rating: 5,
  },
];

const PopularSection = () => {
  return (
    <section className="mt-40 flex flex-col gap-14">
      <SectionHeading>Our Popular Menu</SectionHeading>

      <div className="flex flex-col md:flex-row items-center gap-5 overflow-hidden ">
        {burgerList.map((burger) => (
          <article
            key={burger.id}
            className="flex-1 basis-72 gap-6 sm:gap-4 flex flex-col sm:flex-row   transition-all duration-300  pt-4 rounded-2xl items-center  h-fit cursor-pointer "
          >
            <div className="relative flex-1">
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  damping: 9,
                }}
                className="w-full mx-auto relative z-20"
                src={burger.image}
                alt={burger.name}
              />
              <motion.div className="absolute right-[10%] left-[10%] top-[10%] bottom-[10%] rounded-full bg-[#3c4650] bg-opacity-50 blur-2xl z-10"></motion.div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-center sm:items-start p-4">
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
              <button className="text-lg mt-4 font-semibold px-6 py-1 rounded-full border-2 border-secondary transition-all hover:bg-secondary">
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default PopularSection;
