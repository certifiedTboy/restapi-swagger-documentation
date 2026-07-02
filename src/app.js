// Import necessary modules from express and other libraries
import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "#/helpers/swagger-spec.js";

// Import route handlers
import userRoutes from "#/users/user-routes.js";
import authRoutes from "#/auth/auth-routes.js";

// Import custom error handlers and exception class
import {
  globalErrorHandler,
  notFoundError,
  HttpException,
} from "#/lib/index.js";

// Initialize the Express application
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) for specified origins
app.use(
  cors({
    origin: ["http://localhost:5173"], // Allow requests from this origin
    credentials: true, // Allow cookies to be sent with requests
  }),
);

// Parse cookies attached to the client request object
app.use(cookieParser());

// Parse incoming JSON requests with a limit of 10kb
app.use(json({ limit: "10kb" }));
// Parse incoming URL-encoded requests with a limit of 10kb
app.use(urlencoded({ extended: true, limit: "10kb" }));

// A simple route to check if the server is running
app.get("/", (req, res) => {
  res.json({ message: "Server is live..." });
});

// Mount the user and auth routes under the /api/v1 prefix
app.use("/api/v1/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/auth", authRoutes);

// Apply the global error handler for all routes
app.use(globalErrorHandler);
// Handle requests to routes that are not found
app.use(notFoundError);

export default app;
