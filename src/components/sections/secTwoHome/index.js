import { brands } from "../../common/brands";

import styles from "./index.module.css";

export default function SecTwoHome() {
  return (
    <>
      <div className="mt-12 flex justify-between items-center mb-8">
        <h2 className="capitalize text-2xl font-extrabold tracking-tight text-gray-900">All</h2>
        <div className={`w-1/2 sm:w-56 relative mt-1 ${styles.z_10}`}>
          <button
            className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            id="headlessui-listbox-button-:r2:"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="capitalize block truncate">All</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-600 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </span>
          </button>
          {/* <ul
            className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${styles.z_1}`}
            aria-labelledby="headlessui-listbox-button-:r2:"
            aria-orientation="vertical"
            id="headlessui-listbox-options-:r4f:"
            role="listbox"
            tabindex="0"
          >
            {brands.map((item, index) => (
              <li
                className="capitalize relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900"
                id="headlessui-listbox-option-:r4g:"
                role="option"
                tabindex="-1"
                key={index}
              >
                <span className="block truncate font-normal">all</span>
              </li>
            ))}

            <li
              className="capitalize relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900"
              id="headlessui-listbox-option-:r4j:"
              role="option"
              tabindex="-1"
              aria-selected="true"
            >
              <span className="block truncate font-medium">myntra</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="mb-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
        {Array.apply(null, { length: 5 }).map((e, i) => (
          // {brands.map((item, i) => (
          <div className="cursor-pointer group relative" key={i}>
            <div className="w-full min-h-40 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-40 lg:aspect-none">
              <img
                src="https://asset22.ckassets.com/resources/image/staticpage_images/8234910c-b30c-49c8-9f2f-5d9d16145cb8-1653626249.jpg"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 w-full flex flex-center justify-between">
              <p className="text-sm font-medium text-gray-900">Rs Starting from 00.5</p>
              <img src="/img/brands/ajio.png" className="bg-white object-contain h-6" alt="brand name" />
            </div>
            <p className="mb-1 text-sm text-gray-700">Everything under $9</p>
          </div>
        ))}
      </div>
    </>
  );
}
