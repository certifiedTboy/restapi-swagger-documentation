/**
 * Custom Error class for handling HTTP-specific errors.
 * It extends the built-in Error class to include a statusCode.
 */
export class HttpException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode; // HTTP status code
  }
}
