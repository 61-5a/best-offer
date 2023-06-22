import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./index.module.css";

export default function SecThreeHome() {
  const [listView, setListview] = useState(false);
  const [data, setData] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        // console.log(response.data);
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const catClick = (item) => {
    setCurrentCategory(item);
    axios
      .get(`https://fakestoreapi.com/products/category/${item}`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        setListview(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div className="mt-12 flex justify-between items-center">
        <h2 className="capitalize text-2xl font-extrabold tracking-tight text-gray-900">{currentCategory}</h2>
        <div className={`w-1/2 sm:w-56 ${styles.z_10}`}>
          <div className="relative mt-1">
            <button
              className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
              id="headlessui-listbox-button-:r3:"
              type="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => setListview(true)}
            >
              <span className="capitalize block truncate">{currentCategory}</span>
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
            {listView ? (
              <ul
                className={`absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${styles.z_1}`}
                aria-labelledby="headlessui-listbox-button-:r2:"
                aria-orientation="vertical"
                id="headlessui-listbox-options-:r4f:"
                role="listbox"
                tabindex="0"
              >
                {/* <li
                  className="capitalize relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900"
                  id="headlessui-listbox-option-:r4g:"
                  role="option"
                  tabindex="-1"
                  onClick={() => catClick("All")}
                >
                  {currentCategory == "All" ? (
                    <>
                      <span className="block truncate font-medium">All</span>
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
                    </>
                  ) : (
                    <span className="block truncate font-normal">All</span>
                  )}
                </li> */}
                {categories.map((item, index) => (
                  <li
                    className="capitalize relative cursor-pointer select-none py-2 pl-10 pr-4 text-gray-900"
                    id="headlessui-listbox-option-:r4g:"
                    role="option"
                    tabindex="-1"
                    onClick={() => catClick(item)}
                    key={index}
                  >
                    {currentCategory == item ? (
                      <>
                        <span className="block truncate font-medium">{item}</span>
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
                      </>
                    ) : (
                      <span className="block truncate font-normal">{item}</span>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item, index) => (
          <div className="cursor-pointer group relative" key={index}>
            <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={item.image}
                alt="men,shoes"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 w-full flex flex-center justify-between">
              <p className="text-sm font-medium text-gray-900">Rs. {item.price}</p>
              {/* <img src="/img/brands/ajio.png" className="bg-white object-contain h-6" alt="brand name" /> */}
            </div>
            <h3 className={`text-sm text-gray-700 ${styles.title}`} title={item.title}>
              {item.title}
            </h3>
            <p className={`mt-1 text-sm text-gray-500 ${styles.desc}`} title={item.description}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
