import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <nav className="max-w-[1250px] px-4 mx-auto flex items-center justify-between py-6 sticky top-0 w-full z-50">
      <Link className="text-3xl font-bold text-white" href={"/"}>
        Burger
        <span className="text-secondary">Hunt</span>
      </Link>
      <ul className="text-xl  hidden md:flex items-center gap-8">
        <li>
          <Link
            className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
            href="/"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
            href="/"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className="border-b-4 pb-1 border-transparent transition-all hover:border-secondary "
            href="/"
          >
            Contact
          </Link>
        </li>
      </ul>
      <button className="text-xl text-secondary py-2 px-6 rounded-full border-2 border-secondary  font-semibold hidden md:flex mr-10">
        Sign In
      </button>

      <MobileMenu />
    </nav>
  );
};
export default Navbar;
