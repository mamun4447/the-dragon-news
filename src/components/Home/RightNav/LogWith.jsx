import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaGit } from "react-icons/fa6";

const LogWith = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Login with</h2>
      <div className="*:w-full flex flex-col gap-4">
        <button className="btn  outline-cyan-500 text-cyan-500  outline-1 ">
          <FaGoogle className="text-lg" /> Login with Google
        </button>
        <button className="btn outline-1">
          {" "}
          <FaGithub className="text-lg" /> Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default LogWith;
