const express = require("express");
const router = express.Router();
const  ContactController  = require("../controller/ContactController.js");

router.route("/contact").post(ContactController);
module.exports= router;
