import React from "react";
import { STAR_URL } from "../utils/mockData";

const InnerCard = ({ data }) => {
  const { name, avgRating, cloudinaryImageId } = data.data.data;

  return (
    <>
      <div className="w-60 hover:scale-95 scroll-smooth cursor-pointer">
        <img
          className="rounded-3xl w-60 h-44 "
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt="banner"
        />
        <div className="font-semibold text-lg">{name}</div>
        <div className="font-medium text-base mt-2">
          <img className="w-7 mb-1 mr-2   inline" src={STAR_URL} alt="images" />
          {avgRating}
        </div>
      </div>
    </>
  );
};

export default InnerCard;
