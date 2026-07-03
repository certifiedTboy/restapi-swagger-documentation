import { createUser, checkUserExists } from "./user-services.js";
import { ResponseHandler } from "#/lib/index.js";

export const createNewUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    await createUser({
      firstName,
      lastName,
      email,
      password,
    });

    ResponseHandler.created(res, {}, "user created successfully");
  } catch (error) {
    next(error);
  }
};


export const getCurrentUser = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await checkUserExists({ _id: id });

    ResponseHandler.ok(res, user, "user retrieved successfully");
  } catch (error) {
    next(error);
  }
};
