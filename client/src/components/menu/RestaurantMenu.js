import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CARD_IMG } from "../utils/mockData";
import ShimmerCard from "../shimmer/CardShimmer";
import Items from "./Items";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [menu, setMenu] = useState([]);
  const [list, setList] = useState([]);
  const { name, avgRating, cloudinaryImageId } = menu;

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setMenu(json?.data?.cards[0]?.card?.card?.info);
    setList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (menu.length === 0) return <ShimmerCard />;

  return (
    <>
      <div className="flex  justify-between m-10">
        <img
          className="rounded-2xl w-80 h-80"
          src={CARD_IMG + cloudinaryImageId}
          alt="img"
        />
        <div className="m-20 ">
          <div className="font-bold text-2xl"> {name}</div>
          <div className="font-bold text-lg">⭐{avgRating}</div>
        </div>
      </div>
      <div className="text-center text-3xl font-bold">FOOD LIST</div>
      <div>
        {list.map((data, id) => (
          <div key={id}>
            <Items data={data?.card?.info}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
