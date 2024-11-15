<<<<<<< Updated upstream
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cors from "cors";
import initRoutes from "./src/routes/index.js";
// import connectDatabase from './src/config/connectDatabase'

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initRoutes(app);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));
const port = process.env.PORT || 8888;
const listener = app.listen(port, () => {
  console.log(`Server is running on the port ${listener.address().port}`);
});
=======
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/userRoutes");

dotenv.config();
// Kết nối tới MongoDB
const connectionStringCluster =
  "mongodb+srv://hidengu:meo3102003@cluster0.pmuki99.mongodb.net/BookingTicketApp";
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan("common"));
app.use(express.json());

app.use("/api/v1/users", userRoutes);

// ...
// Sử dụng body-parser middleware
app.use(bodyParser.json());

// Lắng nghe các yêu cầu từ client
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
>>>>>>> Stashed changes
