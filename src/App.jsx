import React from "react";
import {
  SignIn,
  Dashboard,
  ProductDetails,
} from "./components/ReactLazyRoute/ReactLazy";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Root from "./Root";
// import Dashboard from "./components/UnAuth_Nav/Dashboard/Dashboard";
// import ProductDetails from "./components/UnAuth_Nav/ProductDetails/ProductDetails";
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
          element: <SignIn />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/product-details",
          element: <ProductDetails />,
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
