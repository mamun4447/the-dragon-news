import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/pages/LogIn";
import SignUp from "../components/pages/SignUp";
import Root from "../components/common/Root";
import Newses from "../components/Home/Newses/Newses";
import DetailsNews from "../components/Home/Newses/DetailsNews";
import AuthLayout from "./../components/pages/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Navigate to={"/category/01"} />,
          },
          {
            path: "/category/:Id",
            element: <Newses />,
            loader: ({ params }) =>
              fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.Id}`
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/details/:id",
    element: (
      <PrivateRoute>
        <DetailsNews />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to={"/auth/login"} />,
      },
      {
        path: "/auth/login",
        element: <LogIn />,
      },
      {
        path: "/auth/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <h1 className="text-center">Error</h1>,
  },
]);

export default router;
