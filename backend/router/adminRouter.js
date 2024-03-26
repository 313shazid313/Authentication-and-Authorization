const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controller/adminController");

router.route("/users").get(getAllUsers);

module.exports = router;
