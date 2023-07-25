import { useEffect, useState } from "react";
import { API_URL } from "../utils/mockData";
import Header from "./Header";

import CardShow from "./CardShow";
import Footer from "./Footer";

const Body = () => {
  const [restaurantsCard, setRestaurantsCard] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}`);
    const json = await data.json();
    setRestaurantsCard(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // console.log();
  return (
    <>
      <Header />
      <CardShow resData={restaurantsCard}/>
      <Footer />
    </>
  );
};
export default Body;
