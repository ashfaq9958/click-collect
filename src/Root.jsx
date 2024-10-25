import React from "react";
import UnAuthorized_Navigation from "./components/UnAuth_Nav/Navigation/UnAuthorized_Navigation";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/UnAuth_Nav/Footer/Footer";

const Root = () => {
  const { pathname } = useLocation();

  const hideNavigation = pathname === "/signin" || pathname === "/signup";

  return (
    <div>
      {!hideNavigation && <UnAuthorized_Navigation />}
      <main>
        <Outlet />
      </main>
      {!hideNavigation && <Footer />}
    </div>
  );
};

export default Root;
