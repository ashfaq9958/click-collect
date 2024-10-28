import { lazy } from "react";

const SignIn = lazy(() => import("../SignIn/SignIn.jsx"));
const Signup = lazy(() => import("../SignUp/SignUp.jsx"));
const Dashboard = lazy(() => import("../UnAuth_Nav/Dashboard/Dashboard.jsx"));
const ProductDetails = lazy(() =>
  import("../UnAuth_Nav/ProductDetails/ProductDetails.jsx")
);

const MensCategory = lazy(() =>
  import("../UnAuth_Nav/Categories/Mens/Mens.jsx")
);
const WomensCategory = lazy(() =>
  import("../UnAuth_Nav/Categories/Womens/Womens.jsx")
);
const KidsCategory = lazy(() =>
  import("../UnAuth_Nav/Categories/Kids/Kids.jsx")
);
// export const NotFound = lazy(() => import("../PageNotFound/NotFound.jsx"));
const Blog = lazy(() => import("../UnAuth_Nav/Categories/Blog/Blog.jsx"));
const About = lazy(() => import("../UnAuth_Nav/Categories/AboutUs/About.jsx"));

export {
  About,
  Blog,
  KidsCategory,
  WomensCategory,
  MensCategory,
  ProductDetails,
  Dashboard,
  Signup,
  SignIn,
};
