//  import express from "express";

// import {

//   registerUser,

//   loginUser,

//   getMe,

//   verifyEmail,

//   resendVerification   // ⭐ ADD THIS (recommended)

// } from "../controllers/authController.js";

// import protect from "../middleware/authMiddleware.js";


// const router = express.Router();


// // ✅ Signup

// router.post("/signup", registerUser);


// // ✅ Login

// router.post("/login", loginUser);


// // ✅ Email Verify

// router.get("/verify/:token", verifyEmail);


// // ✅ Resend Verification (IMPORTANT)

// router.post(
//   "/resend-verification",
//   protect,
//   resendVerification
// );


// // ✅ Get Current User

// router.get(
//   "/me",
//   protect,
//   getMe
// );


// export default router;



 import express from "express";

import {

  registerUser,

  loginUser,

  getMe,

  verifyEmail,

  resendVerification   // ⭐ ADD THIS (recommended)

} from "../controllers/authController.js";

import protect from "../middleware/authMiddleware.js";


const router = express.Router();


// ✅ Signup

router.post("/signup", registerUser);


// ✅ Login

router.post("/login", loginUser);


// ✅ Email Verify

router.get("/verify/:token", verifyEmail);


// ✅ Resend Verification (IMPORTANT)

router.post(
  "/resend-verification",
  protect,
  resendVerification
);


// ✅ Get Current User

router.get(
  "/me",
  protect,
  getMe
);


export default router;