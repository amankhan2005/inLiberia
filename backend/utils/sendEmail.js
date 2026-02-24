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