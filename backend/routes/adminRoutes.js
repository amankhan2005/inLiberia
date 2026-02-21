import express from "express";

import protect from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

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


// DASHBOARD

router.get("/stats", getAdminStats);


export default router;