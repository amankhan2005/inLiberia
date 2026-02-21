import multer from "multer";
import path from "path";


// STORAGE CONFIG

const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/listings");

  },

  filename: (req, file, cb) => {

    const uniqueName =

      Date.now() +

      "-" +

      Math.round(Math.random() * 1e9) +

      path.extname(file.originalname);

    cb(null, uniqueName);

  },

});


// FILE FILTER

const fileFilter = (req, file, cb) => {

  if (

    file.mimetype.startsWith("image")

  ) {

    cb(null, true);

  } else {

    cb(

      new Error("Only images allowed"),

      false

    );

  }

};


const upload = multer({

  storage,

  fileFilter,

  limits: {

    fileSize: 5 * 1024 * 1024, // 5MB

  },

});

export default upload;