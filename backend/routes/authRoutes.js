 import express from "express";

import {

  registerUser,
  loginUser,
  getMe,

  verifyEmail,
  resendVerification,

} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


// ================= SIGNUP =================

router.post("/signup", registerUser);


// ================= LOGIN =================

router.post("/login", loginUser);


// ================= VERIFY EMAIL =================

// when user clicks email link

router.get(
  "/verify-email/:token",
  verifyEmail
);


// ================= RESEND EMAIL =================

// when user clicks verify button in profile

router.post(
  "/resend-verification",
  protect,
  resendVerification
);


// ================= GET CURRENT USER =================

router.get(
  "/me",
  protect,
  getMe
);


export default router;