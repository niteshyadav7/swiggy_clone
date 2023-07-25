import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

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
  return (
    <div className="ml-20">
      <div className="text-3xl mt-5 p-4 ml-10 font-bold">Best Offers For you</div>
      <Carousel responsive={responsive}>
        {resCarousal.map((data, id) => (
          <div key={id}>
            <Card />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default OfferCarousal;
