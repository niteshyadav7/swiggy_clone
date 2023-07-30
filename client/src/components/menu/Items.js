import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";




const Items = ({ data }) => {
  
  const dispatch = useDispatch();

  const handleAddItem = (data) => {
    // Dispatch an action
    dispatch(addItem(data));
  };
  
  
  console.log(data);
  return (
    <div className="mt-10 ml-10 mr-10">
      <div className="w-60 ">
        <img
          className="rounded-3xl w-60 h-44 "
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}
          alt="banner"
        />
        <div className="font-semibold text-lg">{data?.name}</div>
        <button onClick={() => handleAddItem(data)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5">
          ADD+
        </button>
      </div>
    </div>
  );
};

export default Items;
