import { Router } from "express";
const router = Router();

import {
  createServer,
  getAllServer,
  getServerByName,
  updateServerByName,
  deleteServerById,
} from "../controller/server.controller.js";

router.post("/", createServer);
router.get("/", getAllServer);
router.get("/:name", getServerByName);
router.put("/update/:name", updateServerByName);
router.delete("/delete/:id", deleteServerById);

export default router;
