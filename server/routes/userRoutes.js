import express from "express";
import { register, login } from "../controllers/authControllers.js";
import { checkUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", checkUser);
router.post("/register", register);
router.post("/login", login);

export default router;
