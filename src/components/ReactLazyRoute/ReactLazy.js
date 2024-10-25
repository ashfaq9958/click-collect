import { lazy } from "react";

export const SignIn = lazy(() => import("../SignIn/SignIn.jsx"));
export const Signup = lazy(() => import("../SignUp/SignUp.jsx"));
export const Dashboard = lazy(() =>
  import("../UnAuth_Nav/Dashboard/Dashboard.jsx")
);
export const ProductDetails = lazy(() =>
  import("../UnAuth_Nav/ProductDetails/ProductDetails.jsx")
);

export const MensCategory = lazy(() =>
  import("../UnAuth_Nav/Categories/Mens/Mens.jsx")
);
export const WomensCategory = lazy(() =>
  import("../UnAuth_Nav/Categories/Womens/Womens.jsx")
);
export const NotFound = lazy(() => import("../PageNotFound/NotFound.jsx"));
