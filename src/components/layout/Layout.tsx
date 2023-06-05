import React from "react";
import Aside from "./Aside";
import Header from "./Header";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="font-tw-cen-mt bg-black h-screen">
      <section className="">
        <div className="wrapper relative">
          <div className="relative w-full">
            <div className="flex items-center justify-between">
              <Header />
              <Aside />
            </div>
          </div>
        </div>
        <Main />
      </section>
    </div>
  );
};

export default Layout;
