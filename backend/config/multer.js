// import multer from "multer";
// import path from "path";


// // STORAGE CONFIG

// const storage = multer.diskStorage({

//   destination: (req, file, cb) => {

//     cb(null, "uploads/listings");

//   },

//   filename: (req, file, cb) => {

//     const uniqueName =

//       Date.now() +

//       "-" +

//       Math.round(Math.random() * 1e9) +

//       path.extname(file.originalname);

//     cb(null, uniqueName);

//   },

// });


// // FILE FILTER

// const fileFilter = (req, file, cb) => {

//   if (

//     file.mimetype.startsWith("image")

//   ) {

//     cb(null, true);

//   } else {

//     cb(

//       new Error("Only images allowed"),

//       false

//     );

//   }

// };


// const upload = multer({

//   storage,

//   fileFilter,

//   limits: {

//     fileSize: 5 * 1024 * 1024, // 5MB

//   },

// });

// export default upload;


  import dotenv from "dotenv";
dotenv.config();

import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";


// CLOUDINARY CONFIG

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});


// STORAGE CONFIG

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "listings",
    resource_type: "image",
  },
});


// FILE FILTER

const fileFilter = (req, file, cb) => {

  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files allowed"), false);
  }

};


// MULTER

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});


export default upload;