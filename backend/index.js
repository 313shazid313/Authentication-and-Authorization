const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

const bodyParser = require("body-parser");
//!expressjs jeno json file read korte pare tai boduparser.json babohar korte hoi
app.use(bodyParser.json()); //!  babohar kora jai tahole expresjs json read korte pare //
//! use na korte chaile //app.use(express.json())//middle ware hishabe babohar hoi
// app.use(express.json());: This line of code adds Express middleware that parses incoming request
// bodies with JSON payloads. It's important to place this before any routes that need to handle JSON data in the request body.
// This middleware is responsible for parsing JSON data from requests, and it should be applied at the beginning of your middleware
// stack to ensure it's available for all subsequent route handlers.

app.use(cors());
const router = require("./router/authRouter");
const ContactRouter = require("./router/contactRouter");
dotenv.config();

mongoose
  .connect("mongodb://127.0.0.1:27017/myproject")
  .then(() => {
    console.table("connected");
    app.listen(process.env.PORT, () => {
      console.log(`lisenng at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("failed", error);
  });

app.use("/api", router);
app.use("/api", ContactRouter);
