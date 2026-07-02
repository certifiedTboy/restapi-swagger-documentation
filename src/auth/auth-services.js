// Import necessary utilities, services, and custom exceptions
import {
  HttpException,
  ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "#/lib/index.js";
import { checkUserExists } from "#/users/user-services.js";
import { comparePassword } from "#/helpers/password.js";
import { generateJWT } from "#/helpers/jwt.js";

/**
 * Handles user login by validating credentials and generating JWTs.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<{accessToken: string, refreshToken: string}>} - The generated access and refresh tokens.
 */
export const login = async (email, password) => {
  // Check if a user with the given email exists
  const user = await checkUserExists({ email });

  // Compare the provided password with the hashed password in the database
  const passwordIsValid = await comparePassword(password, user.password);

  // If passwords do not match, throw an error
  if (!passwordIsValid) {
    throw new HttpException("invalid credentials", 403);
  }

  // Create the payload for the JWT
  const payload = {
    id: user._id.toString(),
    email: user.email,
  };

  // Generate a new access token
  const accessToken = generateJWT(
    ACCESS_TOKEN_SECRET,
    payload,
    ACCESS_TOKEN_EXPIRES_IN,
  );

  // Generate a new refresh token
  const refreshToken = generateJWT(
    REFRESH_TOKEN_SECRET,
    payload,
    REFRESH_TOKEN_EXPIRES_IN,
  );

  return { accessToken, refreshToken };
};

/**
 * Generates a new access and refresh token pair.
 * This is typically used when the original access token has expired.
 * @param {string} id - The user's ID.
 * @param {string} email - The user's email.
 * @returns {Promise<{accessToken: string, refreshToken: string}>} - The new access and refresh tokens.
 */
export const newAccessToken = async (id, email) => {
  // Verify the user exists before generating new tokens
  const user = await checkUserExists({ _id: id });

  // Create the payload for the new tokens
  const payload = { id: user?._id.toString(), email: user?.email };

  // Generate a new access token
  const accessToken = generateJWT(
    ACCESS_TOKEN_SECRET,
    payload,
    ACCESS_TOKEN_EXPIRES_IN,
  );

  // Generate a new refresh token
  const refreshToken = generateJWT(
    REFRESH_TOKEN_SECRET,
    payload,
    REFRESH_TOKEN_EXPIRES_IN,
  );

  return { accessToken, refreshToken };
};
