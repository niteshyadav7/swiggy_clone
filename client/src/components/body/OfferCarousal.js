import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OfferCarousalCard from "./OfferCarousalCard";
import ShimmerCar from "../shimmer/carousalShimmer";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const OfferCarousal = ({ resCarousal }) => {
  // console.log(resCarousal[0].imageId);

  if (!resCarousal) return <ShimmerCar />;

  return (
    <div className="ml-20">
      <div className="text-3xl mt-5 p-4 ml-10 font-bold">
        Best Offers For you
      </div>
      <Carousel responsive={responsive}>
        {resCarousal.map((data, id) => (
          <div className="ml-10" key={id}>
            <OfferCarousalCard data={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default OfferCarousal;
