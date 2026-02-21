 import User from "../models/User.js";
import Listing from "../models/Listing.js";
import Category from "../models/Category.js";


// ================= USERS =================


// GET ALL USERS

export const getAllUsers = async (req, res) => {

  try {

    const users = await User.find().select("-password");

    res.json(users);

  } catch {

    res.status(500).json({

      message: "Failed to fetch users",

    });

  }

};



// DELETE USER

export const deleteUser = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user)

      return res.status(404).json({

        message: "User not found",

      });

    await user.deleteOne();

    res.json({

      message: "User deleted",

    });

  } catch {

    res.status(500).json({

      message: "Delete failed",

    });

  }

};



// ================= LISTINGS =================


// GET ALL LISTINGS (Admin)

export const getAllListings = async (req, res) => {

  try {

    const listings = await Listing.find()

      .populate("user", "name email")

      .populate("category", "name");

    res.json(listings);

  } catch {

    res.status(500).json({

      message: "Failed to fetch listings",

    });

  }

};



// APPROVE LISTING

export const approveListing = async (req, res) => {

  try {

    const listing = await Listing.findById(

      req.params.id

    );

    if (!listing)

      return res.status(404).json({

        message: "Listing not found",

      });

    listing.status = "approved";

    await listing.save();

    res.json({

      message: "Listing approved",

    });

  } catch {

    res.status(500).json({

      message: "Approve failed",

    });

  }

};



// REJECT LISTING

export const rejectListing = async (req, res) => {

  try {

    const listing = await Listing.findById(

      req.params.id

    );

    if (!listing)

      return res.status(404).json({

        message: "Listing not found",

      });

    listing.status = "rejected";

    await listing.save();

    res.json({

      message: "Listing rejected",

    });

  } catch {

    res.status(500).json({

      message: "Reject failed",

    });

  }

};



// DELETE LISTING

export const deleteListingAdmin = async (req, res) => {

  try {

    const listing = await Listing.findById(

      req.params.id

    );

    if (!listing)

      return res.status(404).json({

        message: "Listing not found",

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



// ================= DASHBOARD STATS =================


// ADMIN STATS

export const getAdminStats = async (req, res) => {

  try {

    const users = await User.countDocuments();

    const listings = await Listing.countDocuments();

    const pending = await Listing.countDocuments({

      status: "pending",

    });

    const approved = await Listing.countDocuments({

      status: "approved",

    });

    res.json({

      users,

      listings,

      pending,

      approved,

    });

  } catch {

    res.status(500).json({

      message: "Stats failed",

    });

  }

};