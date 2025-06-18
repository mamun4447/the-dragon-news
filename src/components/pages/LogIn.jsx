import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const { loginUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
        navigate(location?.state ? location.state : "/");
      })
      .catch((er) => {
        const text = er.code.split("/");
        // console.log(text[1]);
        setError(text[1]);
      });
  };
  return (
    <div className="min-h-max flex justify-center items-center bg-base-200 pt-10">
      <div className=" bg-base-100 w-full max-w-sm shrink-0  py-8">
        <h2 className="text-xl font-bold my-4 text-center">
          Login your account
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogIn} className="fieldset">
            <label className="label text-black">Email</label>
            <input
              name="email"
              type="email"
              className="input rounded-none"
              placeholder="Email"
            />
            <label className="label text-black">Password</label>
            <input
              name="password"
              type="password"
              className="input rounded-none"
              placeholder="Password"
            />
            <span className="text-red-600">{error}</span>
            <button className="btn btn-neutral mt-4 rounded-none">Login</button>
          </form>
          <div className=" mx-auto">
            <p className="inline mr-2">Don't have an account?</p>
            <Link
              state={location.state}
              to="/auth/register"
              className="text-red-600 "
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
