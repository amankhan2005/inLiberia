// import User from "../models/User.js";






// import generateToken from "../utils/generateToken.js";


// // SIGNUP

// export const registerUser = async (req, res) => {

//   const { name, email, password } = req.body;

//   try {

//     const userExists = await User.findOne({ email });

//     if (userExists)

//       return res.status(400).json({

//         message: "User already exists",

//       });

//     const user = await User.create({

//       name,

//       email,

//       password,

//     });

//     res.status(201).json({

//       _id: user._id,

//       name: user.name,

//       email: user.email,

//       role: user.role,

//       token: generateToken(user._id),

//     });

//   } catch (error) {

//     res.status(500).json({

//       message: "Signup failed",

//     });

//   }

// };


// // LOGIN

// export const loginUser = async (req, res) => {

//   const { email, password } = req.body;

//   try {

//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {

//       res.json({

//         _id: user._id,

//         name: user.name,

//         email: user.email,

//         role: user.role,

//         token: generateToken(user._id),

//       });

//     } else {

//       res.status(401).json({

//         message: "Invalid email or password",

//       });

//     }

//   } catch {

//     res.status(500).json({

//       message: "Login failed",

//     });

//   }

// };


// // GET CURRENT USER

// export const getMe = async (req, res) => {

//   res.json(req.user);

// };


  import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/sendEmail.js";



/*
========================================
SIGNUP
AUTO LOGIN ENABLED
========================================
*/

export const registerUser = async (req, res) => {

try {

const { name, email, password } = req.body;


// check existing user

let user = await User.findOne({ email });

if (user) {


// ⭐ IF EXISTS BUT NOT VERIFIED → RESEND TOKEN

if (!user.isVerified) {

const verificationToken =
crypto.randomBytes(32).toString("hex");

user.verificationToken = verificationToken;

await user.save();

await sendVerificationEmail({

userEmail: user.email,
userName: user.name,
token: verificationToken,

});

return res.status(200).json({

_id: user._id,
name: user.name,
email: user.email,
role: user.role,
isVerified: user.isVerified,
token: generateToken(user._id),

message:
"Account exists. Verification email resent."

});

}


// already verified

return res.status(400).json({
message: "User already exists"
});

}



// create new user

const verificationToken =
crypto.randomBytes(32).toString("hex");


user = await User.create({

name,
email,
password,
verificationToken,
isVerified: false,

});


// send email

await sendVerificationEmail({

userEmail: user.email,
userName: user.name,
token: verificationToken,

});


// auto login

return res.status(201).json({

_id: user._id,
name: user.name,
email: user.email,
role: user.role,
isVerified: user.isVerified,
token: generateToken(user._id),

message:
"Registration successful. Verification email sent."

});

}

catch (error) {

console.log(error);

res.status(500).json({

message: "Signup failed"

});

}

};





/*
========================================
LOGIN
========================================
*/

export const loginUser = async (req, res) => {

try {

const { email, password } = req.body;

const user =
await User.findOne({ email });

if (!user ||
!(await user.matchPassword(password))) {

return res.status(401).json({

message: "Invalid email or password"

});

}


return res.json({

_id: user._id,
name: user.name,
email: user.email,
role: user.role,
isVerified: user.isVerified,
token: generateToken(user._id)

});

}

catch (error) {

console.log(error);

res.status(500).json({

message: "Login failed"

});

}

};






/*
========================================
VERIFY EMAIL
FIXED FINAL VERSION
========================================
*/

export const verifyEmail = async (req, res) => {

try {

const token =
req.params.token;


// find user

const user =
await User.findOne({
verificationToken: token
});


// ❌ invalid token

if (!user) {

return res.status(400).json({

success:false,

message:
"This verification link is invalid or already used"

});

}


// ⭐ verify

user.isVerified = true;

user.verificationToken = undefined;

await user.save();


// ⭐ return login

return res.status(200).json({

success:true,

user:{
_id:user._id,
name:user.name,
email:user.email,
role:user.role,
isVerified:true
},

token:
generateToken(user._id),

message:
"Email verified successfully"

});

}

catch(error){

console.log(error);

return res.status(500).json({

success:false,

message:"Verification failed"

});

}

};






/*
========================================
RESEND VERIFICATION
========================================
*/

export const resendVerification =
async (req, res) => {

try {

const user =
await User.findById(req.user._id);

if (!user) {

return res.status(404).json({

message:"User not found"

});

}


if (user.isVerified) {

return res.status(400).json({

message:"Already verified"

});

}


// generate new token

const verificationToken =
crypto.randomBytes(32).toString("hex");


user.verificationToken =
verificationToken;

await user.save();


// send email

await sendVerificationEmail({

userEmail:user.email,
userName:user.name,
token:verificationToken

});


return res.json({

message:
"Verification email sent"

});

}

catch(error){

console.log(error);

res.status(500).json({

message:
"Failed to send email"

});

}

};






/*
========================================
GET CURRENT USER
========================================
*/

export const getMe =
async (req,res)=>{

try{

const user =
await User.findById(req.user._id)
.select("-password");


res.json({

_id:user._id,
name:user.name,
email:user.email,
role:user.role,
isVerified:user.isVerified

});

}

catch(error){

console.log(error);

res.status(500).json({

message:"Failed"

});

}

};