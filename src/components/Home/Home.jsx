import LatestNews from "./LatestNews";

const Home = () => {
  return (
    <div className="md:w-[1140px] grid mx-auto">
      <section className="my-7">
        <LatestNews />
      </section>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
