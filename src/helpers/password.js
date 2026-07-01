import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export const hashPassword = async (password) => {
  const salt = randomBytes(16).toString("hex");

  const buffer = await scryptAsync(password, salt, 64);

  return `${buffer.toString("hex")}.${salt}`;
};

export const comparePassword = async (providedPassword, storedPassword) => {
  const [hashedPassword, salt] = storedPassword.split(".");

  const buffer = await scryptAsync(providedPassword, salt, 64);

  return buffer.toString("hex") === hashedPassword;
};
