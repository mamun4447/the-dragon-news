import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    createUser(email, password)
      .then((result) => {
        setError("");
        console.log(result);
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then((res) => {
            navigate(location?.state ? location.state : "/");
          })
          .catch((er) => {
            const text = er.code.split("/");
            // console.log(text[1]);
            setError(text[1]);
          });
      })
      .catch((er) => {
        const text = er.code.split("/");
        // console.log(text[1]);
        setError(text[1]);
      });
  };
  return (
    <div className="min-h-max flex justify-center items-center bg-base-200">
      <div className=" bg-base-100 w-full max-w-sm shrink-0 ">
        <h2 className="text-xl font-bold text-center pt-10 ">
          Register Your Account
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegisterUser} className="fieldset">
            <label className="label text-black">Full Name</label>
            <input
              name="name"
              type="text"
              className="input rounded-none "
              placeholder="Full Name"
            />
            <label className="label text-black">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input rounded-none"
              placeholder="Photo URL"
            />
            <label className="label text-black">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input rounded-none"
              placeholder="Email"
            />
            <label className="label text-black">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input  rounded-none"
              placeholder="Password"
            />
            <span className="text-red-600">{error}</span>
            <div className="flex gap-2 items-center mt-2">
              <input type="checkbox" name="terms" />
              <span>Terms & Conditions</span>
            </div>
            <button className="btn btn-neutral mt-4  rounded-none">
              Register
            </button>
          </form>
          <div className="mx-auto">
            <p className="inline">All ready have an account?</p>
            <Link to="/auth/login" className=" text-red-600 ml-2">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
