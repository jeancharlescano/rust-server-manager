import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./routes/main.js";

const app = express();
const port = process.env.PORT;

// MiddleWares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

app.listen(port, () => console.log(`Server on port`, port));
