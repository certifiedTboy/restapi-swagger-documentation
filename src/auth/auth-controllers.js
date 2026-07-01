import { login, newAccessToken } from "./auth-services.js";
import { ResponseHandler } from "#/lib/index.js";

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await login(email, password);

    ResponseHandler.auth(res, result, "login successful");
  } catch (error) {
    next(error);
  }
};

export const getNewAcessToken = async (req, res, next) => {
  try {
    const { id, email } = req.user;

    const result = await newAccessToken(id, email);

    ResponseHandler.auth(res, result, "success");
  } catch (error) {
    next(error);
  }
};
