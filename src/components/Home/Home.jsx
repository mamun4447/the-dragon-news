import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import LatestNews from "./LatestNews";
import LeftNavBar from "./LeftNavBar";
import RightNavBar from "./RightNav/RightNavBar";

const Home = () => {
  // console.log(news);
  return (
    <div className="md:w-[1140px] grid mx-auto mt-2">
      <section className="my-7">
        <LatestNews />
      </section>
      <NavBar />
      <main className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <LeftNavBar />
        </div>
        <div className="col-span-2">
          <Outlet />
        </div>
        <div className="col-span-1">
          <RightNavBar />
        </div>
      </main>
    </div>
  );
};

export default Home;
