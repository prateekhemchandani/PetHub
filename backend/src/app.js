import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true,
//   })
// );
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, // Allows cookies
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

//routes

import userRoute from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import { petRouter } from "./routes/pet.routes.js";

app.use("/api/v1/users", userRoute);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/pet", petRouter);
export { app };
