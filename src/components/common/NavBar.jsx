import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar ">
      <div className="navbar-start">
        {/* Small Screen */}

        <h2 className="btn btn-ghost text-xl">{user && user.displayName}</h2>
      </div>
      {/* NavLink */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link t="/career">Career</Link>
          </li>
        </ul>
      </div>
      {/* Button */}
      {user ? (
        <div className="navbar-end gap-4 items-center">
          {user && user?.photoURL ? (
            <div className="flex flex-col items-center justify-center">
              <div className="avatar shadow-2xl bg-black rounded-full">
                <div className="w-8 rounded-full">
                  <img className="" src={user.photoURL} />
                </div>
              </div>
              {user?.displayName && (
                <p className="text-xs">{user?.displayName}</p>
              )}
            </div>
          ) : (
            <>{user.email}</>
          )}
          <button
            onClick={logOut}
            className="btn bg-black text-white rounded-none px-6"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="navbar-end gap-2">
          <Link
            to="/auth/login"
            className="btn bg-black text-white rounded-none px-6"
          >
            Log In
          </Link>
          <Link
            to="/auth/register"
            className="btn bg-black text-white rounded-none px-6"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
