import express from "express";
import AuthRouter from "./src/routes/authRoutes.js";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"))

app.use("api/auth", AuthRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server is Connected",
    status: "success",
  });
});

app.use((err, req, res, next) => {
  const error = err.message || "Somthing went Wrong";
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: "Internal Server Error",
    error,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is running on port ", port);
  connectDB();
});
