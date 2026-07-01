import {
  HttpException,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} from "#/lib/index.js";
import { verifyJWT } from "#/helpers/jwt.js";

export const authGuard = (req, res, next) => {
  const accessToken = req.cookies["accessToken"];

  if (!accessToken) {
    throw new HttpException("invalid jwt", 403);
  }

  const payload = verifyJWT(ACCESS_TOKEN_SECRET, accessToken);

  req.user = { id: payload.id, email: payload.email };

  next();
};

export const authHeaderGuard = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const splittedHeader = authHeader.split(" ");

  if (
    splittedHeader &&
    splittedHeader.length !== 2 &&
    splittedHeader[0] !== "Bearer"
  ) {
    throw new HttpException("invalid jwt", 403);
  }

  const payload = verifyJWT(REFRESH_TOKEN_SECRET, splittedHeader[1]);

  req.user = { id: payload.id, email: payload.email };

  next();
};
