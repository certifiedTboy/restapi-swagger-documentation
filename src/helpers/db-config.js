import { connect } from "mongoose";
import { DB_URI } from "#/lib/index.js";

/**
 * Establishes a connection to the MongoDB database using Mongoose.
 * It uses the connection string from the environment variables.
 */
export const connectDb = async () => {
  try {
    // Attempt to connect to the database
    await connect(DB_URI);
    console.log("connected to db");
  } catch (error) {
    // Log any errors that occur during the connection process
    console.log(error);
  }
};
