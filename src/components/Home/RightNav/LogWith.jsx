import { useContext } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";

const LogWith = () => {
  const { googleLogIn } = useContext(AuthContext);

  const handleGoogleLogIn = () => {
    googleLogIn().then((result) => console.log(result));
  };
  const handleFacebookLogIn = () => {
    alert("It will not work for your privecy purpose!");
  };

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Login with</h2>
      <div className="*:w-full flex flex-col gap-4">
        <button
          onClick={handleGoogleLogIn}
          className="btn  outline-cyan-500 text-cyan-500  outline-1 "
        >
          <FaGoogle className="text-lg" /> Login with Google
        </button>
        <button onClick={handleFacebookLogIn} className="btn outline-1">
          {" "}
          <FaFacebook className="text-lg" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default LogWith;
