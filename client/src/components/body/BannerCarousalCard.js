import { BANNER_IMG } from "../utils/mockData";

const BannerCarousalCard = ({ data }) => {
  return (
    <>
      <div className="cursor-pointer">
        <img
          className="rounded-full "
          src={BANNER_IMG + data.imageId}
          alt="banner"
        />
      </div>
    </>
  );
};
export default BannerCarousalCard;
