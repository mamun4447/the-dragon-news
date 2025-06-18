import { GoArrowLeft } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../../common/Header";
import RightNavBar from "../RightNav/RightNavBar";

const DetailsNews = () => {
  const { data } = useLoaderData();
  const news = data[0];
  //   console.log(news);
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="w-11/12 grid grid-cols-4 gap-4 mx-auto">
        <section className="col-span-3 ">
          <h2 className="text-xl font-bold mb-2">Dragon News</h2>
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
            <div>
              <img src={news.image_url} alt="" />
            </div>
            <div className="">
              <h2 className="text-lg font-bold my-2">{news.title}</h2>
              <p>{news.details}</p>
            </div>
            <Link
              to="/"
              className="btn w-xs bg-red-600 text-white rounded-none my-2 flex gap-2 items-center"
            >
              <GoArrowLeft className="text-xl" />
              All news in this category
            </Link>
          </div>
        </section>
        <aside className="col-span-1">
          <RightNavBar />
        </aside>
      </main>
    </>
  );
};

export default DetailsNews;
