 import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";


// ROUTES

import authRoutes from "./routes/authRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";


// ERROR MIDDLEWARE

import errorMiddleware from "./middleware/errorMiddleware.js";


// LOAD ENV

dotenv.config();


// CONNECT DATABASE

connectDB();


// INIT EXPRESS

const app = express();


// ================= CORS CONFIG =================

// Allow Vite frontend

const allowedOrigins = [

  "http://localhost:5173",

  "http://127.0.0.1:5173",

];

app.use(

  cors({

    origin: function (origin, callback) {

      if (!origin || allowedOrigins.includes(origin)) {

        callback(null, true);

      } else {

        callback(

          new Error("CORS not allowed")

        );

      }

    },

    credentials: true,

  })

);


// ================= BODY PARSER =================

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ================= STATIC FILES =================

// Image access

app.use(

  "/uploads",

  express.static(

    path.join(process.cwd(), "uploads")

  )

);


// ================= API ROUTES =================

app.use("/api/auth", authRoutes);

app.use("/api/listings", listingRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/admin", adminRoutes);


// ================= TEST ROUTE =================

app.get("/", (req, res) => {

  res.send("API is running...");

});


// ================= ERROR HANDLER =================

app.use(errorMiddleware);


// ================= START SERVER =================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `🚀 Server running on port ${PORT}`

  );

});