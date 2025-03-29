// import nodeMailer from "nodemailer";

// export const sendEmail = async (options) => {
//   const transporter = nodeMailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     service: process.env.SMTP_SERVICE,
//     auth: {
//       user: process.env.SMTP_MAIL,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.SMTP_MAIL,
//     to: options.email,
//     subject: options.subject,
//     text: `${options.message} \n\nEmail of User Who Sent The Message: ${options.userEmail}`,
//   };
//   await transporter.sendMail(mailOptions);
// };


import nodemailer from "nodemailer";

export const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    secure: true, // Use secure connection (true for port 465)
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email, // Receiving email (Admin)
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
