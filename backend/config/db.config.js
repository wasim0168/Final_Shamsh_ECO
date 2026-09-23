import { connect } from "mongoose";

import dotenv from 'dotenv';
dotenv.config();

export const connectDb = async () => {
    // console.log(process.env.DATABASE_URL);
    try {
        await connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        throw new Error("Failed to connect Database", error);
    }
};
