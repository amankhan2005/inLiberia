 import express from "express";

import protect from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import Enquiry from "../models/Enquiry.js";


import {

getAllUsers,
deleteUser,
makeAdmin,
removeAdmin,

getAllListings,
approveListing,
rejectListing,
deleteListingAdmin,

getAdminStats,

} from "../controllers/adminController.js";


const router = express.Router();



// Apply to ALL routes

router.use(protect);
router.use(adminMiddleware);



// ================= USERS =================

router.get("/users", getAllUsers);

router.delete("/users/:id", deleteUser);

router.put("/make-admin/:id", makeAdmin);

router.put("/remove-admin/:id", removeAdmin);




// ================= LISTINGS =================

router.get("/listings", getAllListings);

router.put("/listings/:id/approve", approveListing);

router.put("/listings/:id/reject", rejectListing);

router.delete("/listings/:id", deleteListingAdmin);




// ================= ENQUIRIES =================

// router.get("/enquiries", async (req, res) => {

// const enquiries = await Enquiry.find()
// .populate("listing");

// res.json(enquiries);

// });

router.get("/enquiries", async (req, res) => {

  try {

    const enquiries = await Enquiry.find()
    .populate("listing");

    res.json(enquiries);

  }

  catch {

    res.status(500).json({
      message: "Failed to fetch enquiries"
    });

  }

});




// ================= DASHBOARD =================

router.get("/stats", getAdminStats);



export default router;