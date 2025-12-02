import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import logger from "./middleware/logger.js";
import bookroutes from "./routes/BookRoutes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);  // custom middleware

connectDB(); // connect mongoDB

app.use("/api/books",bookroutes);

app.listen(5000, () => console.log("Server running on port 5000"));
