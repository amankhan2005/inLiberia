 import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ⭐ HARDCODED DOMAIN (NO ENV BUG)
const FRONTEND_URL = "https://www.knowliberia.com";



/*
========================================
CONTACT / ENQUIRY EMAIL
========================================
*/

const sendEmail = async ({

  ownerEmail,
  visitorName,
  visitorEmail,
  message,
  listingTitle,
  listingId

}) => {

  try {

    const listingLink =
      `${FRONTEND_URL}/listing/${listingId}`;


    const response = await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: ownerEmail,

      reply_to: visitorEmail,

      cc: "info@knowliberia.com",

      bcc: "info@knowliberia.com",

      subject: `Enquiry: ${listingTitle}`,

      html: `

        <div style="font-family:Arial;padding:20px">

          <h2>New Enquiry</h2>

          <p><b>Name:</b> ${visitorName}</p>

          <p><b>Email:</b> ${visitorEmail}</p>

          <p><b>Message:</b></p>

          <p>${message}</p>

          <br>

          <a href="${listingLink}"
          style="
          background:#144474;
          color:white;
          padding:10px 20px;
          text-decoration:none;
          border-radius:5px;
          display:inline-block;
          ">
          View Listing
          </a>

        </div>

      `

    });


    console.log("✅ EMAIL SENT");
    console.log("To:", ownerEmail);
    console.log("Link:", listingLink);


    return response;

  }

  catch (error) {

    console.log("❌ EMAIL FAILED");

    console.log(error.message);

    throw error;

  }

};


export default sendEmail;



/*
========================================
LISTING STATUS EMAIL
========================================
*/

export const sendListingStatusEmail = async ({

  ownerEmail,
  ownerName,
  listingTitle,
  listingId,
  status

}) => {

  try {

    const listingLink =
      `${FRONTEND_URL}/listing/${listingId}`;


    const isApproved =
      status === "approved";


    const subject =
      isApproved
        ? "✅ Listing Approved"
        : "❌ Listing Rejected";


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
        <b>${listingTitle}</b>

        </p>

        <br>

        <a href="${listingLink}"
        style="
        background:#144474;
        color:white;
        padding:10px 20px;
        text-decoration:none;
        border-radius:5px;
        display:inline-block;
        ">
        View Listing
        </a>

      </div>

    `;


    await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: ownerEmail,

      subject,

      html

    });


    console.log("✅ STATUS EMAIL SENT");

  }

  catch (error) {

    console.log("❌ STATUS EMAIL FAILED");

    console.log(error.message);

  }

};




/*
========================================
EMAIL VERIFICATION EMAIL
========================================
*/

export const sendVerificationEmail = async ({

  userEmail,
  userName,
  token

}) => {

  try {

    const verifyLink =
      `${FRONTEND_URL}/verify/${token}`;


    const html = `

      <div style="font-family:Arial;padding:20px">

        <h2>Email Verification</h2>

        <p>Hello ${userName},</p>

        <p>

        Click below to verify your account:

        </p>

        <br>

        <a href="${verifyLink}"
        style="
        background:#144474;
        color:white;
        padding:12px 25px;
        text-decoration:none;
        border-radius:6px;
        display:inline-block;
        font-weight:bold;
        ">

        Verify Email

        </a>

        <br><br>

        <p>Or copy this link:</p>

        <p>${verifyLink}</p>

        <br>

        <p>

        If you did not create account, ignore.

        </p>

      </div>

    `;


    await resend.emails.send({

      from: process.env.EMAIL_FROM,

      to: userEmail,

      subject: "Verify your email",

      html

    });


    console.log("✅ VERIFICATION EMAIL SENT");

    console.log("Link:", verifyLink);

  }

  catch (error) {

    console.log("❌ VERIFICATION EMAIL FAILED");

    console.log(error.message);

  }

};