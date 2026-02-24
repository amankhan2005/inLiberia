 import express from "express";
import dotenv from "dotenv";
 
dotenv.config();
import cors from "cors";
import path from "path";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import helpdeskRoutes from "./routes/helpdeskRoutes.js";

import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();


// CORS

 app.use(
  cors({
    origin: [

      "http://localhost:5173",

      "http://localhost:5174",
      "https://knowliberia.com/admin",
      "https://knowliberia.com",

    ],

    credentials: true,

  })
);


// BODY

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// STATIC

const __dirname = path.resolve();

app.use(
  "/uploads",
  express.static(path.join(__dirname, "/uploads"))
);


// ROUTES

app.use("/api/auth", authRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/helpdesk", helpdeskRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
});


app.use(errorMiddleware);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);

});