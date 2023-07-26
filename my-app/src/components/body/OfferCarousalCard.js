import { CLOUD_IMG_OFEERS } from "../utils/mockData";
const OfferCarousalCard = ({ data }) => {
  return (
    <>
      <div className="cursor-pointer">
        <img src={CLOUD_IMG_OFEERS + data.imageId} alt="images" />
      </div>
    </>
  );
};
export default OfferCarousalCard;
