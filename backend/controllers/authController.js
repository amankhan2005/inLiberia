 import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import crypto from "crypto";

import {
  sendVerificationEmail
} from "../utils/sendEmail.js";



// ================= SIGNUP =================

export const registerUser = async (req, res) => {

  const { name, email, password } = req.body;

  try {

    const userExists =
      await User.findOne({ email });

    if (userExists)
      return res.status(400).json({
        message: "User already exists",
      });


    // create token

    const verificationToken =
      crypto.randomBytes(32).toString("hex");


    // create user

    const user = await User.create({

      name,
      email,
      password,

      verificationToken,
      isVerified: false,

    });



    // ✅ SEND VERIFICATION EMAIL

    await sendVerificationEmail({

      userEmail: user.email,

      userName: user.name,

      token: verificationToken,

    });



    // login also

    res.status(201).json({

      _id: user._id,

      name: user.name,

      email: user.email,

      role: user.role,

      isVerified: user.isVerified,

      token: generateToken(user._id),

      message:
        "Signup successful. Verification email sent",

    });


  }

  catch (error) {

    console.error(error);

    res.status(500).json({

      message: "Signup failed",

    });

  }

};



// ================= LOGIN =================

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user =
      await User.findOne({ email });

    if (!user)
      return res.status(401).json({

        message:
          "Invalid email or password",

      });



    if (!(await user.matchPassword(password)))
      return res.status(401).json({

        message:
          "Invalid email or password",

      });



    res.json({

      _id: user._id,

      name: user.name,

      email: user.email,

      role: user.role,

      isVerified: user.isVerified,

      token:
        generateToken(user._id),

    });


  }

  catch {

    res.status(500).json({

      message: "Login failed",

    });

  }

};




// ================= VERIFY EMAIL =================

export const verifyEmail = async (req, res) => {

  try {

    const { token } = req.params;

    const user =
      await User.findOne({

        verificationToken: token

      });


    if (!user)
      return res.status(400).json({

        message:
          "Invalid or expired token",

      });



    user.isVerified = true;

    user.verificationToken = undefined;

    await user.save();



    res.json({

      message:
        "Email verified successfully",

      token:
        generateToken(user._id),

    });

  }

  catch {

    res.status(500).json({

      message:
        "Verification failed",

    });

  }

};




// ================= RESEND EMAIL =================

 export const resendVerification = async (req, res) => {

  try {

    // ✅ CHECK USER EXISTS

    if (!req.user) {

      return res.status(401).json({

        message: "Not authorized"

      });

    }


    const user = await User.findById(req.user._id);


    if (!user)

      return res.status(404).json({

        message: "User not found"

      });



    if (user.isVerified)

      return res.json({

        message: "Already verified"

      });




    const verificationToken =

      crypto.randomBytes(32).toString("hex");



    user.verificationToken = verificationToken;

    await user.save();




    await sendVerificationEmail({

      userEmail: user.email,

      userName: user.name,

      token: verificationToken

    });



    res.json({

      message: "Verification email sent"

    });

  }


  catch (error) {

    console.error(error);   // ⭐ VERY IMPORTANT

    res.status(500).json({

      message: "Failed to resend email"

    });

  }

};




// ================= GET ME =================

export const getMe =
  async (req, res) => {

    res.json(req.user);

  };