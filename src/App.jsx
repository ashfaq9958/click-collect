import * as LazyRoute from "./components/ReactLazyRoute/ReactLazy";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
const App = () => {
const router = createBrowserRouter([
  // 🔒 Auth Routes (no navbar/footer)
  {
    path: "/",
    element: <LazyRoute.SignIn />, // Show SignIn directly at `/`
  },
  {
    path: "/signin",
    element: <LazyRoute.SignIn />,
  },
  {
    path: "/signup",
    element: <LazyRoute.Signup />,
  },

  // 🌐 App Routes (with Root layout: navbar + footer)
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "dashboard",
        element: <LazyRoute.Dashboard />,
      },
      {
        path: "product-details/:id",
        element: <LazyRoute.ProductDetails />,
      },
      {
        path: "mens-category",
        element: <LazyRoute.MensCategory />,
      },
      {
        path: "womens-category",
        element: <LazyRoute.WomensCategory />,
      },
      {
        path: "kids-category",
        element: <LazyRoute.KidsCategory />,
      },
      {
        path: "blog",
        element: <LazyRoute.Blog />,
      },
      {
        path: "about-us",
        element: <LazyRoute.About />,
      },
      {
        path: "cart-checkout",
        element: <LazyRoute.CartCheckOut />,
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
