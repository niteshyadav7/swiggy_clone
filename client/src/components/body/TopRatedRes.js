import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShimmerCar from "../shimmer/carousalShimmer";
import TopRatedResCard from "./TopRatedResCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const TopRatedRes = ({ resTop }) => {
  if (!resTop) return <ShimmerCar />;
  return (
    <div className="ml-20">
      <div className="text-3xl mt-5 p-4 ml-10 font-bold">
        Top restaurant chains in Bareilly
      </div>
      <Carousel responsive={responsive}>
        {resTop.map((data, id) => (
          <div className="ml-10" key={id}>
            <TopRatedResCard data={data} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default TopRatedRes;
