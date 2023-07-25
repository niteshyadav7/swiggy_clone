import { useEffect, useState } from "react";
import { API_URL } from "../utils/mockData";
import Header from "./Header";

import CardShow from "./CardShow";
import Footer from "./Footer";
import OfferCarousal from "./OfferCarousal";

const Body = () => {
  const [restaurantsCard, setRestaurantsCard] = useState([]);
  const [carousal, setCarousal] = useState([]);

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
    console.log(json);
    // console.log(json.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
  };
  // console.log();
  return (
    <>
      <div className="ml-24 mr-24">
        <Header />
        <OfferCarousal resCarousal={carousal} />
        <CardShow resData={restaurantsCard} />
      </div>
      <Footer />
    </>
  );
};
export default Body;
