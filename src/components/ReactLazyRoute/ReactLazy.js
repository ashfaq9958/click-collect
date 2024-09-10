import React from "react";
export const SignIn = React.lazy(() => import("../SignIn/SignIn"));
export const Dashboard = React.lazy(() =>
  import("../UnAuth_Nav/Dashboard/Dashboard")
);
export const ProductDetails = React.lazy(() =>
  import("../UnAuth_Nav/ProductDetails/ProductDetails")
);
