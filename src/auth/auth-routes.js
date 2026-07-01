import { Router } from "express";
import { loginUser, getNewAcessToken } from "./auth-controllers.js";
import { authHeaderGuard } from "#/middlewares/auth.js";

const authRoutes = Router();

authRoutes.post("/login", loginUser);
authRoutes.get("/new-access-token", authHeaderGuard, getNewAcessToken);

export default authRoutes;
