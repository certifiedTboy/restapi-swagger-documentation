import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "#/users/user-routes.js";
import authRoutes from "#/auth/auth-routes.js";
import {
  globalErrorHandler,
  notFoundError,
  HttpException,
} from "#/lib/index.js";
const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(cookieParser());
// global middleware
// allows json body data in the req.body object
app.use(json({ limit: "10kb" }));
app.use(urlencoded({ extended: true, limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({ message: "Server is live..." });
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

app.use(globalErrorHandler);
app.use(notFoundError);

export default app;
