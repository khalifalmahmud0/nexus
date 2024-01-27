import Image from "next/image";
import Link from "next/link";

const Footer = (props) => {
  let PopularPicks = props?.data?.categories?.data?.slice(6, 10);
  let ExclusiveDeals = props?.data?.categories?.data?.slice(11, 15);
  let NewArrivals = props?.data?.categories?.data?.slice(16, 20);
  let SeasonalSpecials = props?.data?.categories?.data?.slice(21, 25);
  let legals = props?.data?.policies?.data;
  let socials = props?.data?.socials?.data;
  return (
    <footer className="bg-black py-8 lg:pt-16 lg:pb-20">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl ">
            Subscribe Our Newsletter for Updates
          </h2>
          <p className="mx-auto mb-8 max-w-2xl  text-gray-500 md:mb-12 sm:text-xl ">
            Delve Deeper into Current Affairs with Our Informative Newsletter
            Bringing You Comprehensive Insights and Breaking News Highlights
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 "
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input
                  className="block p-3 pl-9 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 outline-none	"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required=""
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">
              We care about the protection of your data.{" "}
              <Link
                href={"/"}
                className="font-medium text-primary-600  hover:underline"
              >
                Read our Privacy Policy
              </Link>
              .
            </div>
          </form>
        </div>
      </div>

      <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Popular Picks
            </h2>
            <ul className="text-gray-500 ">
              {PopularPicks?.map((menu, index) => {
                return (
                  <li className="mb-4" key={index}>
                    <Link
                      href={`category?id=${menu?.id}&name=${menu?.name}`}
                      className=" hover:underline"
                    >
                      {menu?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Exclusive Deals
            </h2>
            <ul className="text-gray-500 ">
              {ExclusiveDeals?.map((menu, index) => {
                return (
                  <li className="mb-4" key={index}>
                    <Link
                      href={`category?id=${menu?.id}&name=${menu?.name}`}
                      className=" hover:underline"
                    >
                      {menu?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              New Arrivals
            </h2>
            <ul className="text-gray-500 ">
              {NewArrivals?.map((menu, index) => {
                return (
                  <li className="mb-4" key={index}>
                    <Link
                      href={`category?id=${menu?.id}&name=${menu?.name}`}
                      className=" hover:underline"
                    >
                      {menu?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              Seasonal Specials
            </h2>
            <ul className="text-gray-500 ">
              {SeasonalSpecials?.map((menu, index) => {
                return (
                  <li className="mb-4" key={index}>
                    <Link
                      href={`category?id=${menu?.id}&name=${menu?.name}`}
                      className=" hover:underline"
                    >
                      {menu?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
              LEGALS
            </h2>
            <ul className="text-gray-500 ">
              {legals?.map((item, index) => {
                return (
                  <li className="mb-4" key={index}>
                    <Link
                      href={`news/posts/by/category?id=${item?.id}`}
                      className="hover:underline"
                    >
                      {item?.type}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
        <div className="text-center">
          <Link
            href="/"
            className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 "
          >
            <Image
              src="img/logo.svg"
              alt="nexus logo"
              width={150}
              height={150}
            />
          </Link>
          <span className="block text-sm text-center text-gray-500 ">
            © 2021- {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              nexus™
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="flex justify-center mt-5 space-x-5">
            <li>
              <Link href={socials[0]["facebook"]} className="text-gray-500 ">
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={socials[0]["twitter"]} className="text-gray-500 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={socials[0]["youtube"]} className="text-gray-500 ">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href={socials[0]["linkedin"]} className="text-gray-500">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
