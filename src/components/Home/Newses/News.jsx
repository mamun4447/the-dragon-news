import { useContext, useEffect } from "react";
import { FaStar, FaEye, FaRegBookmark } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const News = ({ news }) => {
  // console.log(news);
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-4 mx-auto my-2">
      <div className="flex justify-between items-center bg-gray-300 p-2  rounded-t-2xl">
        <div className="flex items-center space-x-3 mb-2">
          <img
            src={news.author.img}
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">{news.author.name}</p>
            <p className="text-xs text-gray-500">
              {news?.author?.published_date?.slice(0, 10)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-500 items-center">
          <button className="p-1 rounded-full hover:bg-gray-300">
            <FaRegBookmark className="text-lg " />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-300">
            <IoShareSocialOutline className="text-xl" />
          </button>
        </div>
      </div>
      <h2 className="text-lg font-bold mb-2">{news?.title}</h2>
      <img
        src={news?.thumbnail_url}
        alt="news"
        className="w-full h-40 object-cover rounded-lg mb-2"
      />
      <p className="text-sm text-gray-700 mb-2">
        {news?.details?.length > 100
          ? news.details.slice(0, 100) + "..."
          : news.details}
      </p>
      <Link
        to={`/details/${news._id}`}
        className="text-blue-500 hover:underline text-sm"
      >
        Read More
      </Link>
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-500" />
          <span>{news?.rating?.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{news?.total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default News;
