import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" })
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        replyTo: email,
        to: process.env.EMAIL_USER,
        subject: `Новий лист від ${name}`,
        text: message,
    });

    res.json({ success: true, message: "Лист надіслано!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Помилка при відправці листа"});
    }
});

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

