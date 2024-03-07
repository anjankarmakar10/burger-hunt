import BurgerCard from "./BurgerCard";
import SectionHeading from "./SectionHeading";

const burgerList = [
  {
    id: 1,
    name: "Zinger Burger",
    price: 20,
    image: "/b1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Chicken Burger",
    price: 24,
    image: "/b2.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Fish Burger",
    price: 30,
    image: "/b3.webp",
    rating: 5,
  },
  {
    id: 4,
    name: "Beef Burger",
    price: 28,
    image: "/b4.webp",
    rating: 5,
  },
];

const BestSection = () => {
  return (
    <section className="mt-40 flex flex-col gap-14">
      <SectionHeading>Our Best Seller</SectionHeading>

      <div className="flex gap-5 flex-wrap">
        {burgerList.map((item) => (
          <BurgerCard key={item.id} burger={item} />
        ))}
      </div>
    </section>
  );
};
export default BestSection;
