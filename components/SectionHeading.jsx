import Link from "next/link";

const SectionHeading = ({ children }) => {
  return (
    <header className="flex gap-2 flex-col sm:flex-row items-center justify-between">
      <h2 className="font-semibold text-3xl md:text-5xl ">{children}</h2>
      <Link href="/" className="flex items-center gap-1 text-2xl">
        See all
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.4248 19.8575L16.3643 11.2245C16.2131 11.0804 16.0123 11 15.8034 11C15.5946 11 15.3937 11.0804 15.2425 11.2245L15.2328 11.2343C15.1592 11.3041 15.1007 11.3882 15.0607 11.4814C15.0206 11.5747 15 11.675 15 11.7765C15 11.8779 15.0206 11.9783 15.0607 12.0715C15.1007 12.1647 15.1592 12.2488 15.2328 12.3187L23.7649 20.4476L15.2328 28.5733C15.1592 28.6432 15.1007 28.7273 15.0607 28.8205C15.0206 28.9137 15 29.0141 15 29.1155C15 29.2169 15.0206 29.3173 15.0607 29.4105C15.1007 29.5037 15.1592 29.5878 15.2328 29.6577L15.2425 29.6675C15.3937 29.8116 15.5946 29.892 15.8034 29.892C16.0123 29.892 16.2131 29.8116 16.3643 29.6675L25.4248 21.0345C25.5045 20.9586 25.568 20.8673 25.6113 20.7661C25.6547 20.665 25.677 20.556 25.677 20.446C25.677 20.3359 25.6547 20.227 25.6113 20.1258C25.568 20.0247 25.5045 19.9334 25.4248 19.8575Z"
            fill="#F37F59"
          />
        </svg>
      </Link>
    </header>
  );
};
export default SectionHeading;
