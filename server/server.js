const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());

// IMPORTANT: allow frontend to access backend
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);


// Gmail transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gbhuvaneshwarireddy123@gmail.com",   // your Gmail
    pass: "mbjactpmxixinyjb"                   // 16-digit app password
  }
});

// POST route for sending email
app.post("/send-mail", async (req, res) => {
  console.log("Request reached backend:", req.body);   // <-- ADD THIS

  const { name, email, message } = req.body;

  try {
    console.log("Sending email..."); // <-- ADD THIS

    await transporter.sendMail({
      from: email,
      to: "gbhuvaneshwarireddy123@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `
    });

    console.log("Email sent successfully!"); // <-- ADD THIS

    res.json({ success: true });
  } catch (error) {
    console.log("Email error:", error);  // <-- ADD THIS
    res.json({ success: false });
  }
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
