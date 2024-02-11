import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import ShoppingPage from "../Pages/ShoppingPage";
import CartPage from "../Pages/CartPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <ErrorPage></ErrorPage>,
    },
    { path: "/shopping", element: <ShoppingPage></ShoppingPage> },
    { path: "/cart", element: <CartPage></CartPage> },
  ]);

  return <RouterProvider router={router} />;
}
