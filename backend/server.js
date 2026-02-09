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

// Routes
import contactRoutes from "./routes/contact.routes.js";
import careerRoutes from "./routes/career.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import settingsRoutes from "./routes/settings.routes.js";
import mapRoutes from "./routes/map.routes.js";
import heroRoutes from "./routes/hero.routes.js";
import requestRoutes from "./routes/request.routes.js";

dotenv.config();

/* ================= APP ================= */

const app = express();
app.set("trust proxy", 1);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ================= CORS (FIRST) ================= */

const allowedOrigins = [
  "https://zenithcareservice.org",
  "https://www.zenithcareservice.org",
  "https://zenithcareservices.netlify.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS BLOCKED:", origin);
      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

/* ================= SECURITY ================= */

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

/* ================= RATE LIMIT ================= */

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 100,
  })
);

/* ================= BODY ================= */

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

/* ================= STATIC ================= */

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

/* ================= ROUTES ================= */

app.use("/api/contact", contactRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/map", mapRoutes);
app.use("/api/hero", heroRoutes);
app.use("/api/request", requestRoutes);

/* ================= HEALTH ================= */

app.get("/", (req, res) => {
  res.json({
    ok: true,
    service: "Zenithcare Backend API",
    env: process.env.NODE_ENV || "dev",
  });
});

/* ================= 404 ================= */

app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Route not found",
  });
});

/* ================= ERROR ================= */

app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err);

  res.status(500).json({
    ok: false,
    message: "Server error",
  });
});

/* ================= SERVER ================= */

const PORT = process.env.PORT || 10000;
const MONGO_URI = process.env.MONGO_URI;

async function startServer() {
  try {
    if (!MONGO_URI) {
      console.log("⚠️ MongoDB disabled (No URI)");
    } else {
      console.log("🔌 Connecting MongoDB...");
      await mongoose.connect(MONGO_URI);
      console.log("✅ MongoDB Connected");
    }

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Startup Error:", err);
    process.exit(1);
  }
}

startServer();

/* ================= SHUTDOWN ================= */

process.on("SIGINT", () => process.exit());
process.on("SIGTERM", () => process.exit());
process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);
