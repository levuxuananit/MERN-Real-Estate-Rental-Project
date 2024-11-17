import express from "express";
import * as controllers from "../controllers/category.js";

const router = express.Router();

router.get("/", controllers.getCategories);

export default router;
