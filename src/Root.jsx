import React from "react";
import UnAuthorized_Navigation from "./components/UnAuth_Nav/Navigation/UnAuthorized_Navigation";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const { pathname } = useLocation();

  const hideNavigation = pathname === "/signin" || pathname === "/signup";
  const user = localStorage.getItem("userDetails");

  return (
    <div>
      {user ? <UnAuthorized_Navigation /> : hideNavigation}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Root;
