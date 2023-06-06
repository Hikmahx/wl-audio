import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    // <div className="font-tw-cen-mt bg-black h-screen w-full">
      <section className="font-tw-cen-mt bg-black h-screen w-full relative">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <Header />
              <Aside />
            </div>
          </div>
        <Main />
      </section>
    // </div>
  );
};

export default Layout;
