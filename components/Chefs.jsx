const chefs = [
  {
    id: 1,
    name: "Chef Gabriella Russo",
    image: "/c1.jpg",
  },
  {
    id: 1,
    name: "Chef Malik Thompson",
    image: "/c2.jpg",
  },
  {
    id: 1,
    name: "Chef Isabella Chang",
    image: "/c3.jpg",
  },
  {
    id: 1,
    name: "Chef Xavier Rodriguez",
    image: "/c4.jpg",
  },
];

const Chefs = () => {
  return (
    <section className="mt-40 flex flex-col gap-14">
      <h2 className="font-semibold text-3xl md:text-5xl text-center">
        Our Best Chef
      </h2>

      <div className="flex gap-5 justify-center sm:justify-start flex-wrap ">
        {chefs.map((chef) => (
          <article
            className="flex-1 basis-72 max-w-96 rounded overflow-hidden"
            key={chef.id}
          >
            <div>
              <img
                className="w-full object-cover h-96"
                src={chef.image}
                alt={chef.name}
              />
            </div>
            <div className="pt-7 pb-5 px-6 text-lg font-medium bg-secondary">
              {chef.name}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Chefs;
