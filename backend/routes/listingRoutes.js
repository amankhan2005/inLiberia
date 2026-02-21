 import express from "express";

import protect from "../middleware/authMiddleware.js";

import upload from "../config/multer.js";   // ⭐ ADD THIS


import {

  createListing,

  getListings,

  getListingById,

  getMyListings,

  deleteListing,

} from "../controllers/listingController.js";


const router = express.Router();


// ================= PUBLIC =================


// Get all approved listings

router.get("/", getListings);


// Get single listing

router.get("/:id", getListingById);



// ================= USER =================


// Create listing WITH image upload

router.post(

  "/",

  protect,

  upload.array("images", 5),   // ⭐ IMPORTANT

  createListing

);


// Get my listings

router.get(

  "/my/listings",

  protect,

  getMyListings

);


// Delete listing

router.delete(

  "/:id",

  protect,

  deleteListing

);


export default router;