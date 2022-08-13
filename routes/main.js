import { Router } from "express";

import server from "./server.routes.js";

const router = Router();

router.use("/server", server);

export default router;
