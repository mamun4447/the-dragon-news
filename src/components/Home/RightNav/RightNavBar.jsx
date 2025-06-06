import FindUs from "./FindUs";
import LogWith from "./LogWith";

const RightNavBar = () => {
  return (
    <div className="flex flex-col gap-4">
      <LogWith />
      <FindUs />
    </div>
  );
};

export default RightNavBar;
