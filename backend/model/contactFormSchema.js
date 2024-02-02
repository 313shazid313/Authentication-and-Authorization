const mongoose = require("mongoose");

const fromSchema = new mongoose.Schema({
  username: {
    type: String,
    requiredd: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});


const ContactForm = new mongoose.model("ContactForm", fromSchema);
module.exports = ContactForm;
