const express = require("express");
const router = express.Router();
const validOrNotSchema = require("../validator/validity.js");
const validate = require("../middleware/valid-middleware.js");

const {
  MyHouse,
  registration,
  login,
} = require("../controller/authController.js");

router.route("/").get(MyHouse);
router.route("/register").post(validate(validOrNotSchema), registration);
router.route("/login").post(login);

module.exports = router;
