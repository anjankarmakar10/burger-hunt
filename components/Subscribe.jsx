const Subscribe = () => {
  return (
    <div className="py-52">
      <section className="pt-28 bg-sub bg-no-repeat bg-cover bg-center rounded-3xl  pb-24 text-center px-4">
        <h5 className="text-3xl font-bold mb-4">
          Subscribe to Stay in the Loop
        </h5>
        <p className="text-xl mb-14">
          Get the Latest News, Trends, and Special Promotions Direct to Your
          Inbox.
        </p>
        <div className="flex flex-col md:flex-row mx-auto items-center gap-4 max-w-[720px]">
          <input
            className="h-14 px-5 py-3 rounded-md w-full"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="  text-xl w-full sm:size-fit h-14 bg-secondary rounded-md font-semibold py-3 px-8">
            SUBSCRIBE
          </button>
        </div>
      </section>
    </div>
  );
};
export default Subscribe;
