import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(logger);

// parse JSON bodies for API (non-multipart)
app.use(express.json());

// serve uploads directory as static -- public access to posters
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// api routes
app.use("/api/movies", movieRoutes);

// health
app.get("/", (req, res) => res.json({ message: "Movie Management API is running" }));

// error handler (last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
