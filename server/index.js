import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://www.dmitro.dev",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Origin", "Content-Type", "Accept"]
}));

app.options("*", cors({
  origin: "https://www.dmitro.dev",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Origin", "Content-Type", "Accept"]
}));
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Новий лист від ${name}`,
      text: message,
    });

    res.json({ success: true, message: "Лист надіслано!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ error: "Помилка при відправці листа" });
  }
});

app.get("/", (req, res) => {
  res.send("Server works! Використовуй POST /send-email для форми.");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
