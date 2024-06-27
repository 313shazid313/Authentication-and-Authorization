const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const regSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//!schema model e o hashing er kaj kora jai

//!hiding password using bcrypt starts --->
regSchema.pre("save", async function (next) {
  console.log("pre method", this);
  const user = this;
  if (!user.isModified("password")) {
    next();
  } else {
    try {
      const solting = await bcrypt.genSalt(10);
      const hashPossard = await bcrypt.hash(user.password, solting);
      user.password = hashPossard;
    } catch (error) {
      next(error);
    }
  }
});
//!hiding password using bcrypt ends --->

//!token generate kore authentication authorization korar kaj kore // cookies hishabe browser e joma rakhe
//! json web token code (jwt) starts  ---->

regSchema.methods.generateToken = async function () {
  //! instance method
  try {
    return jwt.sign(
      {
        userId: this._id.toString(), //? these are payload
        email: this.email, //? these are payload
        isAdmin: this.isAdmin, //? these are payload
      },
      process.env.SECRET,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
  }
};
//! in most cases converting id to a string is a good practice because it ensure the consistency
//! and compatibility accross different JWT librarys and systems . it also aligns with the exceptaions
//! that claims in a jwt are represented as string

//! jwt code ends --->

const Users = new mongoose.model("User", regSchema);
module.exports = Users;
