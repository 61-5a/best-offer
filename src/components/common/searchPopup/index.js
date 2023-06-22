import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./index.module.css";

export default function SearchPopup({ setShowSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the products based on the search term
  const filteredDatas = data.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <div
        className="relative z-10"
        id="headlessui-dialog-:rb:"
        role="dialog"
        aria-modal="true"
        aria-labelledby="headlessui-dialog-title-:rf:"
      >
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div
              className="z-10 fixed inset-0 bg-black bg-opacity-25 opacity-100"
              onClick={() => setShowSearch(false)}
            ></div>
            <div
              className="relative z-20 w-full max-w-md transform bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
              id="headlessui-dialog-panel-:re:"
            >
              <h3
                className="fixed top-16 text-lg font-medium leading-6 text-gray-900"
                id="headlessui-dialog-title-:rf:"
              ></h3>
              <input
                type="text"
                required=""
                className="mb-4 rounded w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Search for your product"
                tabindex="0"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="h-96 overflow-auto">
                {filteredDatas.map((item, index) => (
                  <div className="cursor-pointer hover:shadow-lg flex items-center gap-2 p-2 mt-2" key={index}>
                    <img className="w-12 h-12 object-contain" alt={item.title} src={item.image} />
                    <div className="flex flex-col">
                      <strong className="text-purple-900 text-sm font-medium dark:text-purlple-200">
                        {item.title}
                      </strong>
                      <span
                        className={`text-slate-500 text-sm font-medium dark:text-slate-400 ${styles.desc}`}
                        title={item.description}
                      >
                        {item.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
