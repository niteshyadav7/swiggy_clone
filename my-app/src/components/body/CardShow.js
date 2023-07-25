import Card from "./Card";

const CardShow = ({ resData }) => {
  return (
    <>
      <div className="">
        <div className="ml-20 mt-5 p-5 ">
          <div className="text-3xl font-bold ">
            Restaurants with online food delivery in Bareilly
          </div>
        </div>
        <div className="mt-5">
          <ul className="ml-20 flex">
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Top Rated Restaurants
              </button>
            </li>
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cost:High to Low
              </button>
            </li>
            <li>
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Cost:Low to High
              </button>
            </li>
            <li className="ml-52 flex w-1/3">
              <input
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-red-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                placeholder="Search Restaurants "
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-wrap  ">
        {resData.map((data, id) => (
          <div className="m-8 flex" key={id}>
            <Card />
          </div>
        ))}
      </div>
    </>
  );
};
export default CardShow;
