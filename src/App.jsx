import React from "react";
import * as LazyRoute from "./components/ReactLazyRoute/ReactLazy";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "./Root";
import SignIn from "./components/SignIn/SignIn";
import Dashboard from "./components/UnAuth_Nav/Dashboard/Dashboard";
import ProductDetails from "./components/UnAuth_Nav/ProductDetails/ProductDetails";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          // Redirect root path to "/signin"
          index: true,
          element: <Navigate to="/signin" />,
        },
        {
          path: "/signin",
          element: <LazyRoute.SignIn />,
        },
        {
          path: "/dashboard",
          element: <LazyRoute.Dashboard />,
        },
        {
          path: "/product-details",
          element: <LazyRoute.ProductDetails />,
        },
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
