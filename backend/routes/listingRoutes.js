 import express from "express";

import protect from "../middleware/authMiddleware.js";

import upload from "../config/multer.js";

import {

  createListing,

  getListings,

  getListingById,

  getMyListings,

  deleteListing,

  getLocations,

} from "../controllers/listingController.js";


const router = express.Router();


// ================= PUBLIC =================


// Get all listings

router.get("/", getListings);


// ⭐ FIX: locations route BEFORE :id

router.get("/locations", getLocations);


// ================= USER =================


// Get my listings

router.get(

  "/my/listings",

  protect,

  getMyListings

);


// Create listing

router.post(

  "/",

  protect,

  upload.array("images", 5),

  createListing

);


// Delete listing

router.delete(

  "/:id",

  protect,

  deleteListing

);


// ⭐ ALWAYS KEEP :id LAST

router.get("/:id", getListingById);



export default router;