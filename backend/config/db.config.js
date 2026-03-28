import { connect } from "mongoose";

export const connectDb = async () => {
    try {
        await connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        throw new Error("Failed to connect Database", error);
    }
};
