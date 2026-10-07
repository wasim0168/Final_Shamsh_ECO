import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { sendEmail, replyEmail } from "./config/email.config.js";
import Emails from "./model/Email.js";
import connectDb from './config/db.config.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Your public Render URL (used for the self-ping)
const SELF_URL = process.env.SELF_URL || "https://shamsh-eco.onrender.com";

// ---------- CORS CONFIG ----------
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://shamsheco.com",
  "https://www.shamsheco.com",
  "https://renderping.amudhanmohan.in"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, curl, mobile apps)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log("❌ Blocked by CORS:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

// Handle preflight requests explicitly
app.options("*", cors());

app.use(express.json());

// ---------- ROUTES ----------
app.get("/health", (req, res) => {
  res.status(200).send("✅ Server is awake");
});

app.get('/', (req, res) => {
  res.send('Solar Eco Recycling Backend is running');
});

app.post("/api/email", async (req, res) => {
  try {
    const { fullName, email, phone, company, subject, message } = req.body;

    // Basic validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "fullName, email, and message are required"
      });
    }

    const newEmail = new Emails({
      fullName, email, phone, company, subject, message,
    });

    // ✅ FIX: no `await` inside Promise.all
    await Promise.all([
      sendEmail({ fullName, email, phone, company, subject, message }),
      newEmail.save(),
      replyEmail({ fullName, email, phone, company, subject, message })
    ]);

    return res.status(200).json({
      success: true,
      message: "Inquiry sent successfully"
    });
  } catch (error) {
    console.error("❌ Email Route Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ---------- SELF-PING (keep Render awake) ----------
function startSelfPing() {
  const INTERVAL_MS = 10 * 60 * 1000; // every 10 minutes

  setInterval(async () => {
    try {
      const res = await fetch(`${SELF_URL}/health`);
      console.log(`🔁 Self-ping: ${res.status} at ${new Date().toISOString()}`);
    } catch (err) {
      console.error("⚠️ Self-ping failed:", err.message);
    }
  }, INTERVAL_MS);
}

// ---------- START SERVER ----------
async function startServer() {
  try {
    await connectDb();          // connect to MongoDB FIRST
    console.log("✅ DB ready");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port: ${PORT}`);
      startSelfPing();          // start pinging only after server is up
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
