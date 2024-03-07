const Reviews = () => {
  return (
    <section className="mt-52 flex flex-col gap-14">
      <h2 className="font-semibold text-3xl md:text-5xl text-center">
        See Why Our Clients Love Us
      </h2>

      <article className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <img
            className="w-full max-w-[620px] rounded-2xl"
            src="/t1.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 flex items-center  text-center flex-col">
          <span className=" font-medium text-9xl">“</span>
          <p className="mb-8 text-xl">
            &quot;I can&apos;t get enough of the mouthwatering burgers from this
            website! The flavors are incredible, and the quality is top-notch.
            Definitely my go-to place for a burger fix!&quot;
          </p>
          <h6 className="text-2xl font-semibold">Sarah Thompson</h6>
        </div>
      </article>
    </section>
  );
};
export default Reviews;
