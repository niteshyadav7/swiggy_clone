import { useState } from "react";
import ShimmerCard from "../shimmer/CardShimmer";
import Card from "./Card";
import { filteredData } from "../utils/mockData";
import { Link } from "react-router-dom";

const CardShow = ({ resData, setResData, resFilter, setResFilter }) => {
  const [searchInput, setSearchInput] = useState("");
  // console.log(resFilter);

  // console.log(resData);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    // console.log(e.target.value);
  };

  const handleClick = () => {
    const rest = filteredData(searchInput, resFilter);
    // console.log(rest);
    setResFilter(rest);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const rest = filteredData(searchInput, resData);
    // console.log(rest);
    setResFilter(rest);
  };

  if (resData.length === 0) return <ShimmerCard />;
  return (
    <>
      <div className="">
        <div className="ml-20  p-5 ">
          <h1 className="text-3xl font-bold mb-5 text-green-700">
            Number of Restaurants Available {resFilter.length}
          </h1>
          <div className="text-3xl font-bold ">
            Restaurants with online food delivery in Banglore
          </div>
        </div>
        <div className="mt-5">
          <ul className="ml-20 flex">
            <li>
              <button
                onClick={() => {
                  const filteredList = resData.filter(
                    (res) => res?.info?.avgRating > 4.2
                  );
                  setResFilter(filteredList);
                }}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Top Rated Restaurants
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const filteredList = resData.filter(
                    (res) => res?.info?.sla?.deliveryTime < 26
                  );
                  setResFilter(filteredList);
                }}
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Faster Delivery
              </button>
            </li>
            <li className="ml-52 flex w-1/3">
              <form onSubmit={handleSubmit}>
                <input
                  onChange={handleChange}
                  value={searchInput}
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-red-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  placeholder="Search Restaurants "
                />
                <button
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={handleClick}
                >
                  Search
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div className="ml-14 flex justify-evenly flex-wrap  ">
        {resFilter.map((data, id) => (
          <Link key={data?.info?.id} to={"/menu/" + data?.info?.id}>
            <Card data={data} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default CardShow;
