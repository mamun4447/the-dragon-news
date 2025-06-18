import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex py-2 px-4  items-center gap-2 bg-base-300">
      <p className="bg-red-600 rounded-none px-5 py-1.5 text-white"> Latest </p>
      <Marquee pauseOnHover={true} speed={100} className="bg-base-200 p-1">
        <Link>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi
          accusamus, accusantium fugiat fugit earum laboriosam? Temporibus iusto
          voluptatum autem!
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
