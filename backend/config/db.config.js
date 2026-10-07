import mongoose from "mongoose";

async function connectDb() {
  mongoose.connection.on("connected", () => {
    console.log("MongoDB CONNECTED");
  });

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB ERROR:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB DISCONNECTED");
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

  console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB INITIAL CONNECTION FAILED");
    console.error(error);
  }
}

export default connectDb;
