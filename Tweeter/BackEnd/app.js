import express from "express";
import cors from "cors";
import tweetRoutes from "./routes/tweetRoutes.js";
import { logger } from "./MiddleWare/logger.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());
app.use(logger);

app.use("/api/tweets", tweetRoutes);

app.get("/", (req, res) => res.send(" Tweeter API running"));

app.listen(PORT, () => console.log(`🚀 Backend running at http://localhost:${PORT}`));
