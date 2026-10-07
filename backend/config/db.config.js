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
    // Check if the URI even exists before trying to connect
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("MongoDB connection established");
  } catch (error) {
    console.error("MongoDB INITIAL CONNECTION FAILED");
    console.error(error);
    
    // ⭐ CRITICAL FIX: Exit the process so Render restarts the service
    // and you can see the real error in the logs instead of a silent timeout.
    process.exit(1); 
  }
}

export default connectDb;
