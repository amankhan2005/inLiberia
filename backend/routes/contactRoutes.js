 import express from "express";

import sendEmail from "../utils/sendEmail.js";

import Enquiry from "../models/Enquiry.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const {

      ownerEmail,
      visitorName,
      visitorEmail,
      subject,
      message,
      listingTitle,
      listingId

    } = req.body;



    // ✅ SAVE TO MONGODB


    const enquiry = await Enquiry.create({

      listing: listingId,

      listingTitle,

      ownerEmail,

      visitorName,

      visitorEmail,

      subject,

      message

    });



    console.log("💾 Enquiry saved:", enquiry._id);



    // ✅ SEND EMAIL


    await sendEmail(req.body);



    console.log("📧 Email sent");



    res.json({

      message: "Enquiry saved & email sent"

    });

  }

  catch (error) {

    console.error(error);

    res.status(500).json({

      message: error.message

    });

  }

});

export default router;