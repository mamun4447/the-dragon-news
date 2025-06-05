import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="logo py-4">
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h3 className="text-gray-500">Journalism Without Fear or Favour</h3>
      {moment().format("dddd, MMMM Do YYYY")}
    </div>
  );
};

export default Header;
