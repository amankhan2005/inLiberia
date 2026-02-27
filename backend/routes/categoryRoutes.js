 import express from "express";

import protect from "../middleware/authMiddleware.js";
import adminMiddleware from "../middleware/adminMiddleware.js";

import upload from "../config/multer.js";

import {

  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,

} from "../controllers/categoryController.js";


const router = express.Router();


// ================= PUBLIC =================

router.get("/", getCategories);

router.get("/:id", getCategoryById);


// ================= ADMIN =================


// ✅ CREATE CATEGORY

router.post(

  "/",

  protect,
  adminMiddleware,

  upload.single("icon"),

  createCategory

);


// ✅ UPDATE CATEGORY

router.put(

  "/:id",

  protect,
  adminMiddleware,

  upload.single("icon"),

  updateCategory

);


// ✅ DELETE CATEGORY

router.delete(

  "/:id",

  protect,
  adminMiddleware,

  deleteCategory

);


export default router;