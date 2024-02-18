const express = require("express");
const router = express.Router();
const validOrNotSchema = require("../validator/validity.js");
const validate = require("../middleware/valid-middleware.js");
const auth_middleware = require("../middleware/auth-middleware");

const {
  MyHouse,
  registration,
  login,
  unique_user,
} = require("../controller/authController.js");

router.route("/").get(MyHouse);
router.route("/register").post(validate(validOrNotSchema), registration);
router.route("/login").post(login);
router.route("/unique_user").get(auth_middleware, unique_user);

module.exports = router;
