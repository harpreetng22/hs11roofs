// sendEmail.ts
"use server";
import nodemailer from "nodemailer";

interface EmailOptions {
  contactNumber: string;
  email: string;
  name: string;
  service: string;
}

export async function sendEmail({
  contactNumber,
  email,
  name,
  service,
}: EmailOptions): Promise<{
  success: boolean;
  message?: string;
  error?: string;
}> {
  console.log(email);
  // Create reusable transporter object using the default SMTP transport
  var smtpConfig = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "hsingh_be18@thapar.edu",
      pass: "zses tkir jqvn kszm",
    },
  };
  var transporter = nodemailer.createTransport(smtpConfig);
  //   let transporter = nodemailer.createTransport({
  //     // specify your email service and credentials here
  //     //service: "hsingh_be18",
  //     auth: {
  //       user: "hsingh_be18@thapar.edu",
  //       pass: "hsingh_be18@thapar.edu",
  //     },
  //     port: 587,
  //   });
  console.log(transporter);
  // Email template
  const mailOptions = {
    from: "hsingh_be18@thapar.edu",
    to: "hs11roofing@gmail.com",
    subject: "Service Request",
    html: `
      <p>Hello HS11 Roofing & Renovation,</p>
      <p>We got a Service Request. Below are your service details:</p>
      <ul> 
        <li>Service: ${service}</li>
        <li>Customer Name: ${name}</li>
        <li>Contact Number: ${contactNumber}</li>
        <li>Email: ${email}</li>
      </ul>
      <p>Feel free to contact us if you have any questions or concerns.</p>
    `,
  };

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "An error occurred while sending the email",
    };
  }
}
