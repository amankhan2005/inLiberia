// import Category from "../models/Category.js";


// // GET ALL CATEGORIES (Public)

// export const getCategories = async (req, res) => {

//   try {

//     const categories = await Category.find().sort({

//       createdAt: -1,

//     });

//     res.json(categories);

//   } catch {

//     res.status(500).json({

//       message: "Failed to fetch categories",

//     });

//   }

// };



// // CREATE CATEGORY (Admin)

// export const createCategory = async (req, res) => {

//   try {

//     const { name, icon } = req.body;

//     const exists = await Category.findOne({ name });

//     if (exists)

//       return res.status(400).json({

//         message: "Category already exists",

//       });

//     const category = await Category.create({

//       name,

//       icon,

//     });

//     res.status(201).json(category);

//   } catch {

//     res.status(500).json({

//       message: "Failed to create category",

//     });

//   }

// };



// // DELETE CATEGORY (Admin)

// export const deleteCategory = async (req, res) => {

//   try {

//     const category = await Category.findById(

//       req.params.id

//     );

//     if (!category)

//       return res.status(404).json({

//         message: "Category not found",

//       });

//     await category.deleteOne();

//     res.json({

//       message: "Category deleted",

//     });

//   } catch {

//     res.status(500).json({

//       message: "Delete failed",

//     });

//   }

// };


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

    const { name, icon } = req.body;


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


    const category = await Category.create({

      name: name.trim(),

      icon

    });


    res.status(201).json(category);

  }

  catch (error) {

    res.status(500).json({

      message: "Failed to create category",

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