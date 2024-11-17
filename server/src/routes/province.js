import express from "express";
import * as controllers from "../controllers/province.js";
// CRUD
const router = express.Router();

router.get("/", controllers.getProvinces);

export default router;
