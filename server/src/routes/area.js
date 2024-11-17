import express from "express";
import * as controllers from "../controllers/area.js";
// CRUD
const router = express.Router();

router.get("/", controllers.getAreas);

export default router;
