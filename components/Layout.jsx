import React from "react";
import Banner from "./Banner";
import Discover from "./Discover";
import Footer from "./Footer";
import Hot from "./Hot";
import Navbar from "./Navbar";
import Started from "./Started";
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
        <div>
          <Hot />
        </div>
        <div>
          <Started />
        </div>
        <div>
          <Discover />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
