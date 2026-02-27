 

//   import dotenv from "dotenv";

// dotenv.config();

// import multer from "multer";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import { v2 as cloudinary } from "cloudinary";


// // CLOUDINARY CONFIG

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_SECRET,
// });


// // STORAGE CONFIG

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "listings",
//     resource_type: "image",
//   },
  
// });


// // FILE FILTER

// const fileFilter = (req, file, cb) => {

//   if (file.mimetype.startsWith("image")) {
//     cb(null, true);
//   } else {
//     cb(new Error("Only image files allowed"), false);
//   }

// };


// // MULTER

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {
//     fileSize: 5 * 1024 * 1024,
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


// STORAGE CONFIG ⭐ DYNAMIC FOLDER

const storage = new CloudinaryStorage({

  cloudinary,

  params: async (req, file) => {

    let folder = "listings"; // default (OLD LOGIC SAFE)

    // ⭐ CATEGORY ICON
    if (req.originalUrl.includes("categories")) {

      folder = "categories";

    }

    return {

      folder: folder,

      resource_type: "image",

      public_id:
        Date.now() +
        "-" +
        file.originalname.split(".")[0],

    };

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