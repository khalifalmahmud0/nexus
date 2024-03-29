import Link from "next/link";
import Slider from "./slider";
import CurrentDateTime from "./currentDateTime";

const HeroAndSlider = (props) => {
  return (
    <section className="bg-gray-950 pt-8 px-4 lg:py-24 lg:px-12">
      <div className="mx-auto max-w-screen-xl text-center ">
        <CurrentDateTime />
        <br />
        <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-10 text-sm text-gray-700 bg-gray-100 rounded-full  hover:bg-gray-200">
          <span className="text-xs bg-red-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span className="text-sm font-medium">
            Exploring Hidden Gems and Stories That Shape Our World
          </span>
        </div>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
          Unveiling Unique Heroes, Icons of Courage
        </h1>
        <p className="mb-12 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Journey into the Unknown: Unraveling Tales of Bravery, Resilience, and
          Triumph in the Ever-Changing Tapestry of Our World.
        </p>
        <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            href={"/type?type=Feature"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Latest
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            href={"/type?type=Video"}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-300  focus:ring-4 focus:ring-gray-100 "
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Video News
          </Link>
        </div>
        <Slider data={props?.data} />
      </div>
    </section>
  );
};

export default HeroAndSlider;
