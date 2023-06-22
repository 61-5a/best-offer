import styles from "./index.module.css";

export default function Header({ setShowSearch }) {
  return (
    <>
      <nav>
        <div className="shadow-lg bg-white mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center p-10">
                <img className={styles.logo} src="/img/common/logo.png" alt="logo" />
              </div>
            </div>
            <div className="flex items-center w-3/4">
              <div className="w-full sm:w-1/2">
                <button
                  type="button"
                  className="rounded-md w-full shadow px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                  onClick={() => setShowSearch(true)}
                >
                  <div className="flex justify-start items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span className="ml-4 text-gray-400">Search for Product</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
