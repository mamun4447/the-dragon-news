import { useLoaderData } from "react-router-dom";
import News from "./News";
const Newses = () => {
  const { data } = useLoaderData();

  return (
    <div className="mx-2">
      <h2 className="font-bold text-lg ">Dragon News Home</h2>
      <p className="text-gray-400 mb-2">
        {data.length} News Found In This Category
      </p>
      <div>
        {data?.map((news) => (
          <News key={news?._id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default Newses;
