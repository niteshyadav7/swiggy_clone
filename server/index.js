// Library imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// locals imports =>with full name
import Connection from "./database/db.js";
import router from "./routes/userRoutes.js";

// set locals from .env (FOR SECURITY PURPOSE)
dotenv.config();
const port = process.env.PORT;
const hostName = process.env.HOST_NAME;
const mongoUrl = process.env.DB_URL;

const app = express();

// third-party middlewares
app.use(cors({ credentials: true, origin: "http://localhost:8000" }));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// routes
app.use("/", router);

// setting database
Connection(mongoUrl);

// server running
try {
  app.listen(port || 8000, () => {
    console.log(`server running on ${hostName}:${port}`);
  });
} catch (err) {
  console.log(`Error occurs during server making`, err);
}
