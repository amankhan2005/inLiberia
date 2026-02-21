import express from "express";

import protect from "../middleware/authMiddleware.js";

import adminMiddleware from "../middleware/adminMiddleware.js";

import {

  getCategories,

  createCategory,

  deleteCategory,

} from "../controllers/categoryController.js";


const router = express.Router();


// Public

router.get("/", getCategories);


// Admin only

router.post("/", protect, adminMiddleware, createCategory);

router.delete("/:id", protect, adminMiddleware, deleteCategory);


export default router;