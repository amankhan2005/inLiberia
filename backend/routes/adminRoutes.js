import express from "express";

import protect from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";
import Enquiry from "../models/Enquiry.js";

import {

  getAllUsers,
  deleteUser,

  getAllListings,
  approveListing,
  rejectListing,
  deleteListingAdmin,

  getAdminStats,

} from "../controllers/adminController.js";


const router = express.Router();


// protect + admin middleware applied to ALL routes

router.use(protect);
router.use(adminMiddleware);


// USERS

router.get("/users", getAllUsers);

router.delete("/users/:id", deleteUser);


// LISTINGS

router.get("/listings", getAllListings);

router.put("/listings/:id/approve", approveListing);

router.put("/listings/:id/reject", rejectListing);

router.delete("/listings/:id", deleteListingAdmin);


// ENQUIRIES

router.get("/enquiries", async (req, res) => {

  const enquiries = await Enquiry
    .find()
    .populate("listing");

  res.json(enquiries);

});

// DASHBOARD

router.get("/stats", getAdminStats);


export default router;