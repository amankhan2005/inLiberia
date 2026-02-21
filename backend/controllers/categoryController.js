import Category from "../models/Category.js";


// GET ALL CATEGORIES (Public)

export const getCategories = async (req, res) => {

  try {

    const categories = await Category.find().sort({

      createdAt: -1,

    });

    res.json(categories);

  } catch {

    res.status(500).json({

      message: "Failed to fetch categories",

    });

  }

};



// CREATE CATEGORY (Admin)

export const createCategory = async (req, res) => {

  try {

    const { name, icon } = req.body;

    const exists = await Category.findOne({ name });

    if (exists)

      return res.status(400).json({

        message: "Category already exists",

      });

    const category = await Category.create({

      name,

      icon,

    });

    res.status(201).json(category);

  } catch {

    res.status(500).json({

      message: "Failed to create category",

    });

  }

};



// DELETE CATEGORY (Admin)

export const deleteCategory = async (req, res) => {

  try {

    const category = await Category.findById(

      req.params.id

    );

    if (!category)

      return res.status(404).json({

        message: "Category not found",

      });

    await category.deleteOne();

    res.json({

      message: "Category deleted",

    });

  } catch {

    res.status(500).json({

      message: "Delete failed",

    });

  }

};