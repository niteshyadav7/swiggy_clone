import { CARD_IMG, STAR_URL } from "../utils/mockData";

const TopRatedResCard = ({ data }) => {
//   console.log(data);

  return (
    <>
      <div className="w-60 ">
        <img
          className="rounded-3xl  w-60 h-40"
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
        <div className="text-blue-600 font-semibold text-xl opacity-80">
          {data?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {data?.info?.aggregatedDiscountInfoV3?.subHeader}
        </div>
      </div>
    </>
  );
};
export default TopRatedResCard;
