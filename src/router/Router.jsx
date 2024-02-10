import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage></HomePage>,
      errorElement: <ErrorPage></ErrorPage>,
    },
  ]);

  return <RouterProvider router={router} />;
}
