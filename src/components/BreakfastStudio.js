import React from "react";

export default function BreakfastStudio() {
  return (
    <div className="text-gray-900 bg-gray-100 leading-normal">
      <div className="p-4 max-w-5xl mx-auto">
        <img
          className="mx-auto my-8 max-w-full sm:max-w-sm"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45561/undraw_Ordinary_day_3gk3.svg"
          alt="A drawing of two houses in a neighborhood"
        />
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center my-4 font-black">
          <span className="concert-underline">Concert Breakfast Studio</span>
        </h1>
        <nav className="flex flex-col md:flex-row bg-gray-300 rounded shadow overflow-hidden p-2 mb-8 text-sm">
          <label className="sr-only" htmlFor="search">
            Search
          </label>
          <input
            className="mb-2 md:mb-0 p-2 rounded flex-grow"
            type="search"
            placeholder="Search for foods"
            id="search"
          />
          <select className="mb-2 md:ml-2 md:mb-0">
            <option>Food Groups</option>
          </select>
          <button
            className="md:ml-2 p-2 rounded"
            style={{ backgroundColor: "var(--concert-blue)" }}
          >
            Place Order (0)
          </button>
        </nav>
        <div className="grid mb-8">
          <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg bg-white text-center relative">
            <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-green-600">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="2em"
                height="2em"
                style={{ transform: "rotate(360deg)" }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </button>
            {/* <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-600">
          <svg
            className="fill-current"
            viewBox="0 0 20 20"
            width="1.9em"
            height="1.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"
              fill-rule="evenodd"
            ></path>
          </svg>
  </button> */}
            <img
              className="mx-auto"
              src="https://emjvb.csb.app/images/pancakes.svg"
              alt="Pancakes"
            />
            <div className="px-6 pt-4">
              <div className="font-bold text-xl mb-2">Pancakes</div>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                dessert
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                hot
              </span>
            </div>
          </div>
          <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg bg-white text-center relative">
            <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-green-600">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="2em"
                height="2em"
                style={{ transform: "rotate(360deg)" }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </button>
            {/* <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-600">
          <svg
            className="fill-current"
            viewBox="0 0 20 20"
            width="1.9em"
            height="1.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"
              fill-rule="evenodd"
            ></path>
          </svg>
</button> */}
            <img
              className="mx-auto"
              src="https://emjvb.csb.app/images/eggs.svg"
              alt="Eggs"
            />
            <div className="px-6 pt-4">
              <div className="font-bold text-xl mb-2">Eggs</div>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                protein
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                hot
              </span>
            </div>
          </div>
          <div className="max-w-sm py-4 rounded overflow-hidden shadow-lg bg-white text-center relative">
            <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-green-600">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="2em"
                height="2em"
                style={{ transform: "rotate(360deg)" }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" />
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
              </svg>
            </button>
            {/* <button className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-red-600">
          <svg
            className="fill-current"
            viewBox="0 0 20 20"
            width="1.9em"
            height="1.9em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm5-9v2H5V9h10z"
              fill-rule="evenodd"
            ></path>
          </svg>
</button> */}
            <img
              className="mx-auto"
              src="https://emjvb.csb.app/images/bacon.svg"
              alt="Bacon"
            />
            <div className="px-6 pt-4">
              <div className="font-bold text-xl mb-2">Bacon</div>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                protein
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                fat
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                hot
              </span>
            </div>
          </div>
        </div>
        <nav className="flex flex-col md:flex-row bg-gray-300 rounded shadow overflow-hidden p-2 mb-8 text-sm">
          <label className="sr-only" htmlFor="search">
            Search
          </label>
          <input
            className="mb-2 md:mb-0 p-2 rounded flex-grow"
            type="search"
            placeholder="Search for foods"
            id="search"
          />
          <select className="mb-2 md:ml-2 md:mb-0">
            <option>Food Groups</option>
          </select>
          <button
            className="md:ml-2 p-2 rounded"
            style={{ backgroundColor: "var(--concert-blue)" }}
          >
            Place Order (0)
          </button>
        </nav>
      </div>
    </div>
  );
}
