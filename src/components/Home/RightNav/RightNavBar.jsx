import { useContext } from "react";
import FindUs from "./FindUs";
import LogWith from "./LogWith";
import { AuthContext } from "../../../provider/AuthProvider";

const RightNavBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-4">
      {user ? "" : <LogWith />}
      <FindUs />
    </div>
  );
};

export default RightNavBar;
