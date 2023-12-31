import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BannerCarousalCard from "./BannerCarousalCard";
import ShimmerCar from "../shimmer/carousalShimmer";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

const BannerCarousal = ({ resBanner }) => {
  if (resBanner.length === 0) return <ShimmerCar />;
  return (
    <div className="ml-20">
      <div className="text-3xl mt-5 p-4 ml-10 font-bold">
        What's on your mind?
      </div>
      <Carousel responsive={responsive}>
        {resBanner?.map((data, id) => (
          <Link to="/innerCard" key={id}>
            <div className="ml-10" >
              <BannerCarousalCard data={data} />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
export default BannerCarousal;
