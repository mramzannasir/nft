import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <main className="bg-[#2a273a] px-2 xl:px-24 overflow-x-hidden">
        <div>
          <Navbar />
        </div>
        <div>
          <Banner />
        </div>
      </main>
    </>
  );
};

export default Layout;
