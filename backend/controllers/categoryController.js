 


import Category from "../models/Category.js";


// ================= GET ALL CATEGORIES =================

export const getCategories = async (req, res) => {

  try {

    const categories = await Category.find()

      .sort({ createdAt: -1 });

    res.json(categories);

  }

  catch (error) {

    res.status(500).json({

      message: "Failed to fetch categories",

      error: error.message

    });

  }

};



// ================= GET SINGLE CATEGORY =================

export const getCategoryById = async (req, res) => {

  try {

    const category = await Category.findById(req.params.id);

    if (!category)

      return res.status(404).json({

        message: "Category not found"

      });

    res.json(category);

  }

  catch (error) {

    res.status(500).json({

      message: "Error fetching category",

      error: error.message

    });

  }

};




// ================= CREATE CATEGORY =================

 export const createCategory = async (req, res) => {

try {

const { name } = req.body;

if (!name)
return res.status(400).json({
message: "Category name required"
});

const exists = await Category.findOne({
name: name.trim()
});

if (exists)
return res.status(400).json({
message: "Category already exists"
});

const iconUrl = req.file?.path || "";

const category = await Category.create({

name: name.trim(),

icon: iconUrl

});


// ⭐ SEND FULL OBJECT

res.status(201).json(category);

}

catch (error) {

res.status(500).json({

message: "Failed to create category",

error: error.message

});

}

};
// ================= UPDATE CATEGORY =================

export const updateCategory = async (req, res) => {

try {

const category =
await Category.findById(req.params.id);

if (!category)
return res.status(404).json({
message: "Category not found"
});


if (req.body.name)
category.name =
req.body.name.trim();


if (req.file)
category.icon =
req.file.path;


await category.save();


// ✅ FIX

res.json(category);

}

catch (error) {

res.status(500).json({

message: "Update failed",

error: error.message

});

}

};


// ================= DELETE CATEGORY =================

export const deleteCategory = async (req, res) => {

  try {

    const category = await Category.findById(

      req.params.id

    );


    if (!category)

      return res.status(404).json({

        message: "Category not found"

      });


    await category.deleteOne();


    res.json({

      message: "Category deleted successfully"

    });

  }

  catch (error) {

    res.status(500).json({

      message: "Delete failed",

      error: error.message

    });

  }

};