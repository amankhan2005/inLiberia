import Listing from "../models/Listing.js";


// CREATE LISTING (User)

export const createListing = async (req, res) => {

  try {

    const listing = await Listing.create({

      ...req.body,

      user: req.user._id,

      status: "pending",   // admin will approve

    });

    res.status(201).json(listing);

  } catch {

    res.status(500).json({

      message: "Failed to create listing",

    });

  }

};


// GET ALL APPROVED LISTINGS (Public)

export const getListings = async (req, res) => {

  try {

    const listings = await Listing.find({

      status: "approved",

    }).populate("category user", "name email");

    res.json(listings);

  } catch {

    res.status(500).json({

      message: "Failed to fetch listings",

    });

  }

};


// GET SINGLE LISTING

export const getListingById = async (req, res) => {

  try {

    const listing = await Listing.findById(

      req.params.id

    ).populate("category user");

    if (!listing)

      return res.status(404).json({

        message: "Listing not found",

      });

    res.json(listing);

  } catch {

    res.status(500).json({

      message: "Error fetching listing",

    });

  }

};


// GET MY LISTINGS (User dashboard)

export const getMyListings = async (req, res) => {

  try {

    const listings = await Listing.find({

      user: req.user._id,

    });

    res.json(listings);

  } catch {

    res.status(500).json({

      message: "Failed to fetch your listings",

    });

  }

};


// DELETE LISTING (User)

export const deleteListing = async (req, res) => {

  try {

    const listing = await Listing.findById(

      req.params.id

    );

    if (!listing)

      return res.status(404).json({

        message: "Listing not found",

      });

    if (

      listing.user.toString() !== req.user._id.toString()

    )

      return res.status(403).json({

        message: "Not authorized",

      });

    await listing.deleteOne();

    res.json({

      message: "Listing deleted",

    });

  } catch {

    res.status(500).json({

      message: "Delete failed",

    });

  }

}; 