import User from "./user-model.js";
import { HttpException } from "#/lib/index.js";
import { hashPassword } from "#/helpers/password.js";

export const createUser = async (userData) => {
  const user = new User({
    ...userData,
    password: await hashPassword(userData.password),
  });

  await user.save();

  if (!user) {
    throw new HttpException("user creation failed", 400);
  }
  // await sendVerificationEmail(user.email, user.otp);

  return user;
};

export const checkUserExists = async (query) => {
  const userExist = await User.findOne(query).select(
    "-__v -otp -otpExpiresIn -createdAt -updatedAt",
  );

  if (!userExist) {
    throw new HttpException("user not found", 404);
  }

  return userExist;
};
