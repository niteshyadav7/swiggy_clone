import { useEffect, useState } from "react";
import { API_URL } from "../utils/mockData";
import Header from "./Header";

import CardShow from "./CardShow";
import Footer from "./Footer";
import OfferCarousal from "./OfferCarousal";
import BannerCarousal from "./BannerCarousal";
import TopRatedRes from "./TopRatedRes";

const Body = () => {
  const [restaurantsCard, setRestaurantsCard] = useState([]);
  const [carousal, setCarousal] = useState([]);
  const [banner, setBanner] = useState([]);
  const [topRes,setTopRes]=useState([])
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}`);
    const json = await data.json();
    setRestaurantsCard(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setCarousal(
      json.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    setBanner(json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info)
    setTopRes(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log(json);
    // console.log(json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  return (
    <>
      <div className="ml-24 mr-24">
        <Header />

        <OfferCarousal resCarousal={carousal} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <BannerCarousal resBanner={banner} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <TopRatedRes resTop={topRes}/>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <CardShow resData={restaurantsCard} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      </div>
      <Footer />
    </>
  );
};
export default Body;
