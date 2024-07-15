import React from "react";
import SignIn from "./components/SignIn/SignIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";

import Dashboard from "./components/UnAuth_Nav/Dashboard/Dashboard";
// import Products from "./components/Products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        // {
        //   path: "/products",
        //   element: <Products />,
        // },
        // {
        //   path: "/signin",
        //   element: <SignIn />,
        // },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
