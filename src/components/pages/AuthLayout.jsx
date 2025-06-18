import NavBar from "../common/NavBar";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <div className="bg-base-200">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
