 import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({

  ownerEmail,
  visitorName,
  visitorEmail,
  subject,
  message,
  listingTitle,
  listingId

}) => {

  try {

    const listingLink =
      `${process.env.FRONTEND_URL}/listing/${listingId}`;


    const response = await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: ownerEmail,

      reply_to: visitorEmail,

      cc: "info@knowliberia.com",

      bcc: "info@knowliberia.com",

      subject: `Enquiry: ${listingTitle}`,

      html: `

        <h2>New Enquiry</h2>

        <p>Name: ${visitorName}</p>

        <p>Email: ${visitorEmail}</p>

        <p>${message}</p>

        <a href="${listingLink}">View Listing</a>

      `

    });


    // ✅ SUCCESS LOG

    console.log("📧 EMAIL SENT SUCCESSFULLY");

    console.log("To:", ownerEmail);

    console.log("From Visitor:", visitorEmail);

    console.log("Listing:", listingTitle);

    console.log("Resend ID:", response.data?.id);

    console.log("-----------------------------");


    return response;

  }

  catch (error) {

    console.error("❌ EMAIL FAILED");

    console.error(error.message);

    console.error("-----------------------------");

    throw error;

  }

};

export default sendEmail;

// ✅ LISTING STATUS EMAIL

export const sendListingStatusEmail = async ({

  ownerEmail,
  ownerName,
  listingTitle,
  listingId,
  status

}) => {

  try {

    const listingLink =
      `${process.env.FRONTEND_URL}/listing/${listingId}`;


    const isApproved = status === "approved";


    const subject = isApproved
      ? "✅ Your listing has been approved"
      : "❌ Your listing has been rejected";


    const html = `

      <div style="font-family:Arial;padding:20px">

        <h2>
          ${
            isApproved
              ? "Your listing has been approved 🎉"
              : "Your listing has been rejected"
          }
        </h2>

        <p>Hello ${ownerName},</p>

        <p>
          Listing:
          <strong>${listingTitle}</strong>
        </p>

        <p>
          ${
            isApproved
              ? "Your listing is now live on Know Liberia."
              : "Your listing did not meet our guidelines."
          }
        </p>

        <a href="${listingLink}">
          View Listing
        </a>

        <br><br>

        <p>
          Know Liberia Team
        </p>

      </div>

    `;


    await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: ownerEmail,

      subject,

      html,

    });


    console.log("📧 STATUS EMAIL SENT:", ownerEmail);

  }

  catch (error) {

    console.error("❌ STATUS EMAIL FAILED");

    console.error(error.message);

  }

};

// ✅ EMAIL VERIFICATION MAIL

export const sendVerificationEmail = async ({

  userEmail,
  userName,
  token

}) => {

  try {

    const verifyLink =
      `${process.env.FRONTEND_URL}/verify/${token}`;


    const html = `

      <div style="font-family:Arial;padding:20px">

        <h2>Email Verification</h2>

        <p>Hello ${userName},</p>

        <p>
          Please click below button to verify your account:
        </p>

        <a href="${verifyLink}"
           style="
             background:#144474;
             color:white;
             padding:10px 20px;
             text-decoration:none;
             border-radius:5px;
             display:inline-block;
           "
        >
          Verify Email
        </a>

        <br><br>

        <p>
          If you did not create account, ignore this email.
        </p>

      </div>

    `;


    await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: userEmail,

      subject: "Verify your email",

      html

    });


    console.log("📧 VERIFICATION EMAIL SENT:", userEmail);

  }

  catch (error) {

    console.error("❌ VERIFICATION EMAIL FAILED");

    console.error(error.message);

  }

};