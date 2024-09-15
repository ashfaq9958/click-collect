import React from "react";
import * as LazyRoute from "./components/ReactLazyRoute/ReactLazy";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "./Root";
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
          path: "/signup",
          element: <LazyRoute.Signup />,
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
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
