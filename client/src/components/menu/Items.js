import React from "react";

const Items = ({ data }) => {
  return (
    <>
      <div className="flex justify-evenly">
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}
          alt="img"
        />
        
        <span>{data?.name}</span>
        <div className="bg-green-400">
          <button className="text-red-700">Add</button>
        </div>
      </div>
    </>
  );
};

export default Items;
