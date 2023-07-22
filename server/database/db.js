import mongoose from "mongoose";

const Connection = async (url) => {
  try {
    await mongoose.connect(`${url}`);
    console.log(`yey! database connected👋`);
  } catch (err) {
    console.log(`Error during database`, err);
  }
};

export default Connection;
