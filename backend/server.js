// import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

// Set up routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Uncomment this if you want a default root route
// app.get("/", (req, res) => {
//     res.send("Hello World!!");
// });

// Start the server and connect to MongoDB
server.listen(PORT, () => {
    connectToMongoDB();  // Ensure database connection is established
    console.log(`Server running on port ${PORT}`);
});
