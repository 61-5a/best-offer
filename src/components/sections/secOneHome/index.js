import { brands } from "../../common/brands";

import styles from "./index.module.css";

export default function SecOneHome() {
  return (
    <>
      <div className="mb-8 grid gap-y-10 gap-x-6 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:gap-x-8">
        {brands.map((item, index) => (
          <div
            key={index}
            className="group relative shadow rounded-md cursor-pointer w-full min-h-16 flex justify-center aspect-w-1 aspect-h-1 overflow-hidden lg:h-16 lg:aspect-none"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-center object-contain lg:w-full lg:h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
}
