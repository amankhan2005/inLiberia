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
      `${process.env.FRONTEND_URL}/verify-email/${token}`;


    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  
  <!-- Main Container Table -->
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f3f4f6; padding: 20px 0;">
    <tr>
      <td align="center">
        
        <!-- Content Card -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 30px 0; background-color: #144474;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: 1px;">
                KNOW LIBERIA
              </h1>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 40px 30px; text-align: center;">
              
              <!-- Greeting -->
              <h2 style="margin: 0 0 10px 0; font-size: 22px; color: #333333;">
                Hello ${userName},
              </h2>
              
              <p style="margin: 0 0 20px 0; color: #666666; font-size: 16px; line-height: 1.5;">
                Thank you for registering. To ensure the security of your account and unlock full access, please verify your email address by clicking the button below.
              </p>

              <!-- Button (Table based for maximum compatibility) -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: 25px 0;">
                <tr>
                  <td align="center" style="background-color: #144474; border-radius: 6px;">
                    <a href="${verifyLink}" target="_blank" style="display: inline-block; padding: 14px 35px; font-size: 16px; color: #ffffff; text-decoration: none; font-weight: 600;">
                      Verify My Email
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Footer Info -->
              <p style="margin: 20px 0 0 0; color: #999999; font-size: 14px;">
                If you did not create an account, no further action is required.
              </p>

              <!-- Fallback Link -->
              <p style="margin: 20px 0 0 0; color: #aaaaaa; font-size: 12px; word-break: break-all;">
                Button not working? Paste this link into your browser:<br>
                <a href="${verifyLink}" style="color: #144474; text-decoration: underline;">${verifyLink}</a>
              </p>

            </td>
          </tr>

          <!-- Bottom Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 30px; border-top: 1px solid #eeeeee; text-align: center;">
              <p style="margin: 0; color: #8898aa; font-size: 12px;">
                © ${new Date().getFullYear()} Know Liberia. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
        <!-- End Content Card -->

      </td>
    </tr>
  </table>
  <!-- End Main Container -->

</body>
</html>
`;



    const response =
      await resend.emails.send({

        from: process.env.EMAIL_FROM,

        to: userEmail,

        subject: "Verify your email",

        html

      });



    console.log("✅ Verification email sent");

    console.log(response);


    return response;

  }

  catch (error) {

    console.error("❌ Verification email failed");

    console.error(error);


    // ⭐ THIS LINE FIXES EVERYTHING

    throw error;

  }

};