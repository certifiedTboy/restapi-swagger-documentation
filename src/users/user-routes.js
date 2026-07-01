import { Router } from "express";
import {
  createNewUser,
  verifyUserAccount,
  getCurrentUser,
} from "./user-controllers.js";
import {
  checkValidationErrors,
  createUserValidationRules,
} from "#/middlewares/data-validators.js";
import { sanitizeData } from "#/middlewares/sanitize-data.js";
import { authGuard } from "#/middlewares/auth.js";

const userRoutes = Router();

userRoutes.post(
  "/",
  createUserValidationRules,
  checkValidationErrors,
  sanitizeData,
  createNewUser,
);

userRoutes.get("/me", authGuard, getCurrentUser);

export default userRoutes;
