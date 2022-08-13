import { Router } from "express";
const router = Router();

import {
  createServer,
  getAllServer,
  getServerByName,
  updateServerByName,
  deleteServerByName,
} from "../controller/server.controller.js";

router.post("/", createServer);
router.get("/", getAllServer);
router.get("/:name", getServerByName);
router.put("/update/:name", updateServerByName);
router.delete("/delete/:name", deleteServerByName);

export default router;
