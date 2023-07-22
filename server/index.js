import express from "express";
import dotenv from "dotenv";

// set locals from .env (FOR SECURITY PURPOSE)

dotenv.config();
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;

const app = express();

try {
  app.listen(port || 8000, () => {
    console.log(`server running on ${hostName}:${port}`);
  });
} catch (err) {
  console.log(`Error occurs during server making`, err);
}
