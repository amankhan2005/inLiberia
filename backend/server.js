 // server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contact.routes.js";
import careerRoutes from "./routes/career.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import settingsRoutes from "./routes/settings.routes.js";
import mapRoutes from "./routes/map.routes.js";
import heroRoutes from "./routes/hero.routes.js";
 import requestRoutes from "./routes/request.routes.js";



dotenv.config();

/* -------------------- APP SETUP -------------------- */
const app = express();
app.set("trust proxy", 1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------- SECURITY -------------------- */
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

/* -------------------- RATE LIMIT -------------------- */
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 100,
  })
);

/* -------------------- CORS -------------------- */
const allowedOrigins = [
  // Production (Zenithcare only)
  "https://zenithcareservices.netlify.app",
  "https://www.zenithcareservices.com",

  // Optional: without www
  "https://zenithcareservices.com",

  // Regex for preview deployments
  /\.netlify\.app$/,
  /\.vercel\.app$/,

  ...(process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(",").map((o) => o.trim())
    : []),
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowed = allowedOrigins.some((o) =>
        o instanceof RegExp ? o.test(origin) : o === origin
      );

      if (allowed) return callback(null, true);

      console.warn("❌ CORS blocked:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
      "Referer",
      "Cache-Control",
      "x-admin-user",
      "x-admin-pass",
      "x-admin-token",
    ],
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Preflight
app.options("*", cors());

/* -------------------- BODY PARSER -------------------- */
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

/* -------------------- STATIC UPLOADS -------------------- */
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"), {
    setHeaders: (res) => {
      res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);

/* -------------------- ROUTES -------------------- */
app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/request", requestRoutes);

/* -------------------- HEALTH CHECK -------------------- */
app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: " Zenithcare Backend Service API",
    env: process.env.NODE_ENV || "development",
    db: process.env.DISABLE_DB === "true" ? "disabled" : "enabled",
  });
});

/* -------------------- 404 -------------------- */
app.use((_req, res) => {
  res.status(404).json({ ok: false, message: "Not Found" });
});

/* -------------------- ERROR HANDLER -------------------- */
app.use((err, _req, res, _next) => {
  console.error("Unhandled Error:", err);
  if (err.message?.toLowerCase().includes("cors")) {
    return res.status(403).json({ ok: false, message: "CORS not allowed" });
  }
  res.status(500).json({ ok: false, message: "Internal Server Error" });
});

/* -------------------- DB + SERVER -------------------- */
const PORT = process.env.PORT || 5000;
const disableDb = process.env.DISABLE_DB === "true";
const MONGO_URI = process.env.MONGO_URI;
let server;

async function startServer() {
  try {
    if (!disableDb) {
      if (!MONGO_URI) {
        console.error("❌ MONGO_URI missing");
        process.exit(1);
      }

      mongoose.set("strictQuery", false);

      console.log("🔌 Connecting to MongoDB...");
      await mongoose.connect(MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
      });
      console.log("✅ MongoDB connected");
    } else {
      console.log("⚠️ MongoDB disabled");
    }

    server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Startup error:", err);
    process.exit(1);
  }
}

startServer();

/* -------------------- GRACEFUL SHUTDOWN -------------------- */
async function shutdown(signal) {
  console.log(`🛑 ${signal} received, shutting down...`);
  try {
    if (server) server.close();
    if (!disableDb && mongoose.connection.readyState === 1) {
      await mongoose.connection.close(false);
    }
    process.exit(0);
  } catch {
    process.exit(1);
  }
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("unhandledRejection", (r) =>
  console.error("Unhandled Rejection:", r)
);
process.on("uncaughtException", (e) =>
  console.error("Uncaught Exception:", e)
);
