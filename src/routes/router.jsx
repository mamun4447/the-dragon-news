import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import LogIn from "../components/pages/LogIn";
import SignUp from "../components/pages/SignUp";
import Root from "../components/common/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
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
