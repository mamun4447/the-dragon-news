import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/pages/LogIn";
import SignUp from "../components/pages/SignUp";
import Root from "../components/common/Root";
import Newses from "../components/Home/Newses/Newses";

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
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },

  {
    path: "*",
    element: <h1 className="text-center">Error</h1>,
  },
]);

export default router;
