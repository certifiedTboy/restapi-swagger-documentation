import { connect } from "mongoose";
import { DB_URI } from "#/lib/index.js";

/**
 * connect to the mongodb database using
 * mongoose ODM connect method
 */
export const connectDb = async () => {
  try {
    await connect(DB_URI);

    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};
