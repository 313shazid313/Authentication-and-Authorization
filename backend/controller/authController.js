const userSchema = require("../model/Model");
const bcrypt = require("bcryptjs");

const MyHouse = async (req, res) => {
  try {
    res.status(200).send("welcome to home");
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "Cought error" });
  }
};

//! registration code starts ------>
const registration = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const exist = await userSchema.findOne({ email: email }); //!first email destructure kora email ar 2nd ta schema theke nawa hoise

    if (exist) {
      return res.status(409).json({ message: "email exist already" }); //? status code 409 means user alreadu exist
    } else {
      // const saltRoud = 10;
      // const hashPossard = await bcrypt.hash(password, saltRoud);
      const creation = await userSchema.create({
        username,
        email,
        phone,
        // password: hashPossard,
        password,
      });

      return res
        .status(201) //?status code 201 means user created successfully
        .json({
          message: "registration successful",
          token: await creation.generateToken(),
          userId: creation._id.toString(),
        });
    }
  } catch (error) {
    console.log(error)
  }
};
// ! registration code ends ------>

//!login code starts ------>
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const ifExist = await userSchema.findOne({ email });
    console.log(ifExist);

    if (!ifExist) {
      return res.status(409).json({ message: "Invalid email or password" });
    }

    const isValid = await bcrypt.compare(password, ifExist.password);

    if (isValid) {
      res
        .status(200) //?status code 201 means user created successfully
        .json({
          message: "login successful",
          token: await ifExist.generateToken(),
          userId: ifExist._id.toString(),
        });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(404).send("404 not found");
    console.log(error);
  }
};
//!login code ends ------>

module.exports = { MyHouse, registration, login };
