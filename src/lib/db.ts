import { connect } from "mongoose";
import ENV from "./env";

export const connectDb = async () => {
  try {
    await connect(ENV.DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    throw new Error("Failed to connect Database", error as Error);
  }
};
