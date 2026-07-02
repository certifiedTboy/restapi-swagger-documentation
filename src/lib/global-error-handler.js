/**
 * Global error handling middleware for the Express application.
 * It catches errors thrown from any part of the application and sends a formatted response.
 * @param {Error} err - The error object.
 * @param {import("express").Request} req - The Express request object.
 * @param {import("express").Response} res - The Express response object.
 * @param {import("express").NextFunction} next - The next middleware function.
 */
export const globalErrorHandler = (err, req, res, next) => {
  // Determine the status code, defaulting to 500 (Internal Server Error)
  const statusCode = err.statusCode || 500;
  // Determine the error message, defaulting to a generic message
  const message = err.message || "Internal Server Error";

  // Send a JSON response with the error details
  res.status(statusCode).json({ error: message, status: statusCode });
};
