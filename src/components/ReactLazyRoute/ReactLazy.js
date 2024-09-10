import { lazy } from "react";

export const SignIn = lazy(() => import("../SignIn/SignIn.jsx"));
export const Dashboard = lazy(() =>
  import("../UnAuth_Nav/Dashboard/Dashboard.jsx")
);
export const ProductDetails = lazy(() =>
  import("../UnAuth_Nav/ProductDetails/ProductDetails.jsx")
);

