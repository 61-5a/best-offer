import { useState } from "react";

import Header from "./components/common/header";
import Footer from "./components/common/footer";
import SecOneHome from "./components/sections/secOneHome";
import SecTwoHome from "./components/sections/secTwoHome";
import SecThreeHome from "./components/sections/secThreeHome";
import SearchPopup from "./components/common/searchPopup";

import styles from "./App.module.css";

function App() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <>
      <Header setShowSearch={setShowSearch} />
      <div className={`${styles.all_outer}`}>
        <div className={`max-w-2xl mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8 ${styles.az_container}`}>
          <SecOneHome />
          <SecTwoHome />
          <SecThreeHome />
        </div>
      </div>
      <Footer />
      {showSearch ? <SearchPopup setShowSearch={setShowSearch} /> : null}
    </>
  );
}

export default App;
