import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-secondary text-white">
      <div className="max-w-[1250px]   py-9 px-4 mx-auto ">
        <div className="flex-col gap-8 md:flex-row flex justify-between">
          <div className="flex flex-col">
            <Link href="/" className="font-bold text-4xl mb-5">
              BurgerHunt
            </Link>
            <p className="max-w-80 mb-12">
              Indulge in burger perfection at our haven where every bite tells a
              tale of flavor and quality, crafted with passion and served with a
              side of delightful moments.
            </p>
            <div className="flex items-center gap-8">
              <Link href="/">
                <svg
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8546 11.9491L29.0231 0H26.376L16.681 10.3748L8.93391 0H0L11.7134 15.6903L0 28.2199H2.64709L12.8869 17.2625L21.0686 28.2199H30.0025L17.8546 11.9491ZM14.2303 15.8273L13.0435 14.2651L3.60004 1.83429H7.66552L15.2847 11.8665L16.4715 13.4286L26.3782 26.4702H22.3127L14.2303 15.8273Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.6233 27.2214H4.16667C3.0616 27.2214 2.00179 26.8203 1.22039 26.1063C0.438987 25.3922 0 24.4238 0 23.414V3.80741C0 2.79762 0.438987 1.82919 1.22039 1.11516C2.00179 0.401136 3.0616 0 4.16667 0H25.6233C26.7284 0 27.7882 0.401136 28.5696 1.11516C29.351 1.82919 29.79 2.79762 29.79 3.80741V23.414C29.79 24.4238 29.351 25.3922 28.5696 26.1063C27.7882 26.8203 26.7284 27.2214 25.6233 27.2214ZM4.16667 1.52296C3.50363 1.52296 2.86774 1.76364 2.3989 2.19206C1.93006 2.62048 1.66667 3.20153 1.66667 3.80741V23.414C1.66667 24.0199 1.93006 24.601 2.3989 25.0294C2.86774 25.4578 3.50363 25.6985 4.16667 25.6985H25.6233C26.2864 25.6985 26.9223 25.4578 27.3911 25.0294C27.8599 24.601 28.1233 24.0199 28.1233 23.414V3.80741C28.1233 3.20153 27.8599 2.62048 27.3911 2.19206C26.9223 1.76364 26.2864 1.52296 25.6233 1.52296H4.16667Z"
                    fill="white"
                  />
                  <path
                    d="M14.8951 20.6054C13.3807 20.6039 11.9008 20.1922 10.6425 19.4222C9.38413 18.6523 8.40384 17.5587 7.82553 16.2798C7.24721 15.0008 7.09684 13.5939 7.39341 12.2369C7.68999 10.8799 8.42019 9.63369 9.49173 8.65582C10.5633 7.67795 11.928 7.01233 13.4135 6.7431C14.8989 6.47387 16.4384 6.61312 17.8372 7.14324C19.2361 7.67336 20.4316 8.57055 21.2725 9.7214C22.1135 10.8723 22.5621 12.2251 22.5618 13.6089C22.5591 15.4653 21.7502 17.2449 20.3127 18.5567C18.8752 19.8686 16.9267 20.6054 14.8951 20.6054ZM14.8951 8.12624C13.7108 8.12775 12.5535 8.44995 11.5695 9.05213C10.5854 9.65431 9.81875 10.5095 9.36629 11.5096C8.91383 12.5097 8.79587 13.6099 9.02733 14.6713C9.25878 15.7326 9.82926 16.7075 10.6667 17.4727C11.5042 18.238 12.571 18.7593 13.7325 18.9708C14.894 19.1823 16.098 19.0745 17.1925 18.661C18.287 18.2476 19.2229 17.547 19.8819 16.6478C20.5409 15.7486 20.8935 14.6911 20.8951 13.6089C20.8951 12.1548 20.263 10.7603 19.1378 9.73208C18.0125 8.70388 16.4864 8.12624 14.8951 8.12624Z"
                    fill="white"
                  />
                  <path
                    d="M23.5617 7.37203C24.5512 7.37203 25.3534 6.63903 25.3534 5.73484C25.3534 4.83065 24.5512 4.09766 23.5617 4.09766C22.5722 4.09766 21.77 4.83065 21.77 5.73484C21.77 6.63903 22.5722 7.37203 23.5617 7.37203Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href="/">
                <svg
                  width="18"
                  height="28"
                  viewBox="0 0 18 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10.6607H17.5L16.6667 13.7067H10V27.4133H6.66667V13.7067H0V10.6607H6.66667V7.80975C6.66667 5.09431 6.97667 4.10895 7.55667 3.11598C8.12502 2.1349 9.00301 1.33261 10.0767 0.813262C11.1633 0.283271 12.2417 0 15.2133 0C16.0833 0 16.8467 0.0761483 17.5 0.228445V3.04593H15.2133C13.0067 3.04593 12.335 3.16472 11.6483 3.49977C11.1554 3.73507 10.7535 4.10293 10.4967 4.55366C10.13 5.17959 10 5.79335 10 7.80975V10.6607Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-2xl mb-4">Useful Links</h5>

            <div className="flex flex-col gap-2">
              <Link className="text-lg font-medium" href="/">
                Home
              </Link>
              <Link className="text-lg font-medium" href="/">
                Menu
              </Link>
              <Link className="text-lg font-medium" href="/">
                About Us
              </Link>
              <Link className="text-lg font-medium" href="/">
                Locations
              </Link>
              <Link className="text-lg font-medium" href="/">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:basis-96 flex flex-col gap-2">
            <input
              className="px-5 py-3 rounded-md w-full"
              type="email"
              placeholder="Email: info@burgerwebsite.com"
            />
            <input
              className="px-5 py-3 rounded-md w-full"
              type="number"
              placeholder="Phone: (555) 123-4567"
            />
          </div>
        </div>
        <div className="font-semibold flex flex-col gap-2 md:flex-row justify-between items-center mt-10">
          <span>© 2024 Burger Website. All rights reserved</span>
          <div className="flex gap-6 items-center">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
