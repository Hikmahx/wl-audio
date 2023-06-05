import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="w-full h-full ml-auto overflow-hidden">
      <Outlet />
    </main>
  );
};

export default Main;
