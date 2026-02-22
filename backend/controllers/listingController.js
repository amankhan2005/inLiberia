//  import Listing from "../models/Listing.js";


// // ================= CREATE LISTING =================

// export const createListing = async (req, res) => {

//   try {

//     // FIX 1: Save uploaded images

//     const images = req.files?.map(

//       file => `/uploads/listings/${file.filename}`

//     ) || [];


//     const listing = await Listing.create({

//       ...req.body,

//       images,                 // ⭐ ADD THIS

//       user: req.user._id,

//       status: "pending",

//     });


//     res.status(201).json(listing);

//   } catch (error) {

//     res.status(500).json({

//       message: error.message,

//     });

//   }

// };



// // ================= GET ALL APPROVED =================

// export const getListings = async (req, res) => {

//   try {

//     const listings = await Listing.find({

//       status: "approved",

//     })

//     .populate("category", "name")   // ⭐ IMPORTANT

//     .populate("user", "name email");


//     res.json(listings);

//   } catch (error) {

//     res.status(500).json({

//       message: error.message,

//     });

//   }

// };



// // ================= GET SINGLE =================

// export const getListingById = async (req, res) => {

//   try {

//     const listing = await Listing.findById(

//       req.params.id

//     )

//     .populate("category", "name")  // ⭐ IMPORTANT

//     .populate("user", "name email");


//     if (!listing)

//       return res.status(404).json({

//         message: "Listing not found",

//       });


//     res.json(listing);

//   } catch (error) {

//     res.status(500).json({

//       message: error.message,

//     });

//   }

// };



// // ================= GET MY LISTINGS =================

// export const getMyListings = async (req, res) => {

//   try {

//     const listings = await Listing.find({

//       user: req.user._id,

//     })

//     .populate("category", "name");


//     res.json(listings);

//   } catch (error) {

//     res.status(500).json({

//       message: error.message,

//     });

//   }

// };



// // ================= DELETE =================

// export const deleteListing = async (req, res) => {

//   try {

//     const listing = await Listing.findById(

//       req.params.id

//     );


//     if (!listing)

//       return res.status(404).json({

//         message: "Listing not found",

//       });


//     if (

//       listing.user.toString() !== req.user._id.toString()

//     )

//       return res.status(403).json({

//         message: "Not authorized",

//       });


//     await listing.deleteOne();


//     res.json({

//       message: "Listing deleted",

//     });

//   } catch (error) {

//     res.status(500).json({

//       message: error.message,

//     });

//   }

// };

 import Listing from "../models/Listing.js";


// ================= CREATE LISTING =================

export const createListing = async (req, res) => {

  try {

    const images = req.files?.map(
      file => `/uploads/listings/${file.filename}`
    ) || [];


    const listing = await Listing.create({

      title: req.body.title,

      price: req.body.price,

      location: req.body.location,

      description: req.body.description,

      category: req.body.category,

      contactEmail: req.body.contactEmail,

      contactPhone: req.body.contactPhone,

      images,

      user: req.user._id,

      status: "pending",

    });


    res.status(201).json(listing);

  }

  catch (error) {

    res.status(500).json({

      message: error.message,

    });

  }

};




// ================= GET ALL LISTINGS =================

export const getListings = async (req, res) => {

  try {

    const {

      category,

      sort,

      search,

      location,   // ⭐ added

      minPrice,   // ⭐ added

      maxPrice,   // ⭐ added

      page = 1,

      limit = 12

    } = req.query;



    let query = {

      status: "approved"

    };



    // CATEGORY

    if (category)

      query.category = category;



    // LOCATION ⭐

    if (location)

      query.location = location;



    // PRICE RANGE ⭐

    if (minPrice || maxPrice)

      query.price = {

        ...(minPrice && { $gte: Number(minPrice) }),

        ...(maxPrice && { $lte: Number(maxPrice) })

      };



    // SEARCH

    if (search)

      query.title = {

        $regex: search,

        $options: "i"

      };



    let listings = Listing.find(query)

      .populate("category", "name icon")

      .populate("user", "name email");



    // SORT

    if (sort === "price_asc")

      listings = listings.sort({ price: 1 });



    else if (sort === "price_desc")

      listings = listings.sort({ price: -1 });



    else if (sort === "newest")

      listings = listings.sort({ createdAt: -1 });



    // PAGINATION

    const skip = (page - 1) * limit;

    listings = listings.skip(skip).limit(Number(limit));



    const result = await listings;



    res.json(result);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};




// ================= GET SINGLE =================

export const getListingById = async (req, res) => {

  try {

    const listing = await Listing.findById(req.params.id)

      .populate("category", "name icon")

      .populate("user", "name email");



    if (!listing)

      return res.status(404).json({

        message: "Listing not found"

      });



    res.json(listing);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};




// ================= GET MY LISTINGS =================

export const getMyListings = async (req, res) => {

  try {

    const listings = await Listing.find({

      user: req.user._id

    })

      .populate("category", "name icon")

      .sort({ createdAt: -1 });



    res.json(listings);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};




// ================= GET LOCATIONS =================

export const getLocations = async (req, res) => {

  try {

    const locations = await Listing.distinct("location", {

      status: "approved"

    });



    res.json(locations);

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};




// ================= DELETE =================

export const deleteListing = async (req, res) => {

  try {

    const listing = await Listing.findById(req.params.id);



    if (!listing)

      return res.status(404).json({

        message: "Listing not found"

      });



    if (

      listing.user.toString() !== req.user._id.toString()

    )

      return res.status(403).json({

        message: "Not authorized"

      });



    await listing.deleteOne();



    res.json({

      message: "Listing deleted"

    });

  }

  catch (error) {

    res.status(500).json({

      message: error.message

    });

  }

};