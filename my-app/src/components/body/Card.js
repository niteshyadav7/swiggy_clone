import { CARD_IMG } from "../utils/mockData";
import { STAR_URL } from "../utils/mockData";

const Card = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="w-60 hover:scale-95 scroll-smooth cursor-pointer">
        <img
          className="rounded-3xl w-60 h-44 "
          src={CARD_IMG + data?.info?.cloudinaryImageId}
          alt="banner"
        />
        <div className="font-semibold text-lg">{data?.info?.name}</div>
        <div className="font-medium text-base mt-2">
          <img className="w-7 mb-1 mr-2   inline" src={STAR_URL} alt="images" />
          {data?.info?.avgRating}
        </div>
        <div className="font-light">{data?.info?.cuisines?.join(", ")}</div>
        <div className="font-light">{data?.info?.areaName}</div>
      </div>
    </>
  );
};
export default Card;
