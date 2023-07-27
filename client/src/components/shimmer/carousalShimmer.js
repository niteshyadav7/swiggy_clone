const ShimmerCar = () => {
    return (
      <div className="flex justify-between flex-wrap">
        {Array(4)
          .fill("")
          .map((e, i) => (
            <div key={i} className="h-52 w-52 relative cursor-pointer mb-5">
              <div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl"></div>
              <div className="absolute inset-0 transform   transition duration-300">
                {/* <div className="h-full w-full bg-white rounded-lg shadow-2xl"></div> */}
              </div>
            </div>
          ))}
      </div>
    );
  };
  export default ShimmerCar;