import jwt from "jsonwebtoken";

export const generateJWT = (secret, payload, expiresIn) => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyJWT = (secret, token) => {
  return jwt.verify(token, secret);
};
