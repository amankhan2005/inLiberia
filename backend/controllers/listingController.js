  import Listing from "../models/Listing.js";
import Category from "../models/Category.js";



 

 
 export const createListing = async (req, res) => {

  try {

    // ✅ CLOUDINARY URL SAVE
    const images = req.files?.map(
      file => file.path
    ) || [];



    // ⭐ SLUG LOGIC
    let slug = req.body.slug;

    if (!slug || slug.trim() === "") {

      slug = req.body.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

    }



    // duplicate check
    const exists = await Listing.findOne({ slug });

    if (exists)
      return res.status(400).json({
        message: "Slug already exists"
      });



    // CREATE LISTING
    const listing = await Listing.create({

      title: req.body.title,

      slug: slug,

      location: req.body.location,

      description: req.body.description,

      category: req.body.category,

      contactEmail: req.body.contactEmail,

      contactPhone: req.body.contactPhone,

      images: images, // ✅ Cloudinary URLs

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

      categoryName,

      search,

      location,

      sort,

      page = 1,

      limit = 12

    } = req.query;



    let query = {

      status: "approved"

    };



    // FILTER BY CATEGORY ID

    if (category) {

      query.category = category;

    }



    // ⭐ FILTER BY CATEGORY NAME (Residence / Business)

if (categoryName) {

  const categoryDoc = await Category.findOne({

    name: { $regex: `^${categoryName}$`, $options: "i" }

  });

  if (!categoryDoc) {

    return res.json([]);

  }

  query.category = categoryDoc._id;

}



    // LOCATION FILTER

    if (location) {

      query.location = location;

    }



    // SEARCH FILTER

    if (search) {

      query.title = {

        $regex: search,

        $options: "i"

      };

    }



    // QUERY BUILD

    let listingsQuery = Listing.find(query)

      .populate("category", "name icon")

      .populate("user", "name email");



    // SORT

    if (sort === "newest") {

      listingsQuery = listingsQuery.sort({

        createdAt: -1

      });

    }



    // PAGINATION

    const skip = (Number(page) - 1) * Number(limit);


    listingsQuery = listingsQuery

      .skip(skip)

      .limit(Number(limit));



    const listings = await listingsQuery;



    res.json(listings);

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


// ================= GET BY SLUG =================

export const getListingBySlug = async (req, res) => {

  try {

    const listing = await Listing.findOne({
      slug: req.params.slug
    })
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

      .sort({

        createdAt: -1

      });


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

    const locations = await Listing.distinct(

      "location",

      {

        status: "approved"

      }

    );


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

    const listing = await Listing.findById(

      req.params.id

    );


    if (!listing)

      return res.status(404).json({

        message: "Listing not found"

      });


    if (

      listing.user.toString()

      !== req.user._id.toString()

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