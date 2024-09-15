import React from "react";
import MainNavigation from "./components/Main_Navigation/MainNavigation";
import UnAuthorized_Navigation from "./components/UnAuth_Nav/Navigation/UnAuthorized_Navigation";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();

  const hideNavigation = pathname === "/signin" || pathname === "/signup";

  return (
    <div>
      {!hideNavigation && <UnAuthorized_Navigation />}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
