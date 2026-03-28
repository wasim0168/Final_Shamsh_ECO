import express from 'express';
import cors from 'cors';

import { sendEmail, replyEmail } from "./config/email.config.js";
import Emails from "./model/Email.js";
import { connectDb } from './config/db.config.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: ["http://localhost:3000", "https://shamsheco.com"] }));
app.use(express.json());

connectDb()

app.post("/api/email", async (req, res) => {
    try {
        const { fullName, email, phone, company, subject, message } = req.body;

        const newEmail = new Emails({
            fullName,
            email,
            phone,
            company,
            subject,
            message,
        });

        await Promise.all([
            sendEmail({ fullName, email, phone, company, subject, message }),
            await newEmail.save(),
            replyEmail({ fullName, email, phone, company, subject, message })
        ]);

        res.status(200).json({ success: true, message: "Inquiry sent successfully" });
    } catch (error) {
        console.error("Email Route Error:", error);
        res.status(500).json({ success: false, message: error.message });
    }
});


app.get('/', (req, res) => {
    res.send('Solar Eco Recycling Backend is running');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
