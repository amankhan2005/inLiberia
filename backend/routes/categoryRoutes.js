// import express from "express";

// import protect from "../middleware/authMiddleware.js";

// import adminMiddleware from "../middleware/adminMiddleware.js";

// import {

//   getCategories,

//   createCategory,

//   deleteCategory,

// } from "../controllers/categoryController.js";


// const router = express.Router();


// // Public

// router.get("/", getCategories);


// // Admin only

// router.post("/", protect, adminMiddleware, createCategory);

// router.delete("/:id", protect, adminMiddleware, deleteCategory);


// export default router;

import express from "express";

import protect from "../middleware/authMiddleware.js";

import adminMiddleware from "../middleware/adminMiddleware.js";

import {

  getCategories,

  getCategoryById,   // ⭐ ADD THIS

  createCategory,
  updateCategory,
  deleteCategory,

} from "../controllers/categoryController.js";


const router = express.Router();


// ================= PUBLIC =================


// Get all categories

router.get("/", getCategories);


// Get single category ⭐ ADD THIS

router.get("/:id", getCategoryById);



// ================= ADMIN =================


// Create category

router.post(

  "/",

  protect,

  adminMiddleware,

  createCategory

);
// ⭐  
router.put(
  "/:id",
  protect,
  adminMiddleware,
  updateCategory
);


// Delete category

router.delete(

  "/:id",

  protect,

  adminMiddleware,

  deleteCategory

);


export default router;