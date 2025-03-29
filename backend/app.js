// // import express from "express";
// // import { config } from "dotenv";
// // import cors from "cors";
// // import { sendEmail } from "./utils/sendEmail.js";

// // const app = express();
// // const router = express.Router();

// // config({ path: "./config.env" });

// // app.use(
// //   cors({
// //     origin: [process.env.FRONTEND_URL],
// //     methods: ["POST"],
// //     credentials: true,
// //   })
// // );

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // router.post("/send/mail", async (req, res, next) => {
// //   const { name, email, message } = req.body;
// //   if (!name || !email || !message) {
// //     return next(
// //       res.status(400).json({
// //         success: false,
// //         message: "Please provide all details",
// //       })
// //     );
// //   }
// //   try {
// //     await sendEmail({
// //       email: "radhakurre86@gmail.com",
// //       subject: "GYM WEBSITE CONTACT",
// //       message,
// //       userEmail: email,
// //     });
// //     res.status(200).json({
// //       success: true,
// //       message: "Message Sent Successfully.",
// //     });
// //   } catch (error) {
// //     res.status(500).json({
// //       success: false,
// //       message: " Internal Server Error",
// //     });
// //   }
// // });

// // app.use(router);

// // app.listen(process.env.PORT, () => {
// //   console.log(`Server listening at port ${process.env.PORT}`);
// // });


// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";
// import { sendEmail } from "./utils/sendEmail.js";

// const app = express();
// config({ path: "./config.env" });

// // Enable CORS middleware before routes
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL || "http://localhost:5173", // Default if FRONTEND_URL is not set
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Router setup
// const router = express.Router();

// router.options("/send/mail", cors()); // Handle preflight requests

// router.post("/send/mail", async (req, res, next) => {
//   const { name, email, message } = req.body;
//   if (!name || !email || !message) {
//     return res.status(400).json({
//       success: false,
//       message: "Please provide all details",
//     });
//   }
//   try {
//     await sendEmail({
//       email: "radhakurre86@gmail.com",
//       subject: "GYM WEBSITE CONTACT",
//       message,
//       userEmail: email,
//     });
//     res.status(200).json({
//       success: true,
//       message: "Message Sent Successfully.",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// });

// // Use the router after middleware
// app.use(router);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });


import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";

const app = express();
config({ path: "./config.env" });

// Enable CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["POST"],
    credentials: true,
  })
);

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Contact Form Route
app.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  try {
    await sendEmail({
      email: process.env.SMTP_MAIL, // Admin email to receive messages
      subject: "GYM WEBSITE CONTACT",
      message: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    });

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
