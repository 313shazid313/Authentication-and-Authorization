const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controller/adminController");
const { getAllContact } = require("../controller/adminController")

const authMiddleware = require ('../middleware/auth-middleware')

router.route("/users").get(authMiddleware ,getAllUsers);
router.route("/contact").get(getAllContact)

module.exports = router;
