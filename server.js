// imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
// security packages
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

import connectDB from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoute.js";
import jobsRoutes from "./routes/jobsRoute.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
// env
dotenv.config();

// mongodb connection
connectDB();


const app = express();

// middlewares
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(cors());
app.use(morgan());

// validation middleware
app.use(errorMiddleware);

// port
const PORT = process.env.PORT || 8080;

// routes
app.use("/api/test", testRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/job", jobsRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port no ${PORT}`.bgCyan.white);
});
