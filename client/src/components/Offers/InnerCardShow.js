import { data } from "../utils/inner";
import InnerCard from "./InnerCard";

const InnerCardShow = () => {
  console.log(data[0].data.data);
  return (
    <>
      <div className="ml-14 flex justify-start flex-wrap  ">
        {data.map((data, id) => (
          <div className="m-8 flex" key={id}>
            <InnerCard data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default InnerCardShow;
