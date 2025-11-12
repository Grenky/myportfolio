import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// --- CORS ---

const allowedOrigins = [
  "https://www.dmitro.dev",
  "https://dmitro.dev",
  "http://localhost:3000",
  "http://127.0.0.1:3000"
]

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin"));
    }
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Origin", "Content-Type", "Accept"]
}));

app.use(express.json());

// --- Resend setup ---
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Send email route ---
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "noreply@resend.dev",
      to: "demosoft61@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New message from your website:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

// --- Root route ---
app.get("/", (req, res) => {
  res.send("Server works! Use POST /send-email for form.");
});

// --- Start server ---
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);







