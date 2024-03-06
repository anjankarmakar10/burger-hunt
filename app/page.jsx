export default function Home() {
  return (
    <main className="max-w-[1250px] px-4 mx-auto flex flex-col-reverse md:flex-row">
      <div className="pt-20 flex-2 text-center md:text-start">
        <h1 className="font-bold  text-5xl md:text-7xl max-w-4xl md:leading-snug">
          Bite into Flavorful Delights
        </h1>
        <p className="py-10 text-xl mx-auto md:mx-0 font-medium max-w-[400px]">
          Savor the Juicy Goodness, Crafted with Passion. Indulge in Burger
          Bliss Beyond Compare.
        </p>
        <button className="font-semibold text-xl px-6 py-2 rounded-lg bg-secondary">
          Get Started
        </button>
      </div>
      <div className="flex-2 relative">
        <div className="absolute top-[15%] left-8 right-[50%] md:right-8 bottom-[20%] rounded-full bg-[#3c4650] bg-opacity-50 blur-2xl z-10"></div>

        <img
          className="w-full relative z-20 lg:mt-[-4rem] max-w-xl"
          src="/bg.png"
          alt=""
        />
      </div>
    </main>
  );
}
