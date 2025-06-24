import * as LazyRoute from "./components/ReactLazyRoute/ReactLazy";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      // errorElement:<LazyRoute.NotFound/>,
      children: [
        {
          index: true,
          element: <LazyRoute.SignIn />,
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
          path: "/product-details/:id",
          element: <LazyRoute.ProductDetails />,
        },
        {
          path: "/mens-category",
          element: <LazyRoute.MensCategory />,
        },
        {
          path: "/womens-category",
          element: <LazyRoute.WomensCategory />,
        },
        {
          path: "/blog",
          element: <LazyRoute.Blog />,
        },
        {
          path: "/about-us",
          element: <LazyRoute.About />,
        },
        {
          path: "/kids-category",
          element: <LazyRoute.KidsCategory />,
        },
        {
          path: "/cart-checkout",
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
