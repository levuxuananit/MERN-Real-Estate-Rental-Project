import express from "express";
import * as controllers from "../controllers/price.js";
// CRUD
const router = express.Router();

router.get("/", controllers.getPrices);

export default router;
