import React from "react";
import MainNavigation from "./components/Main_Navigation/MainNavigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
