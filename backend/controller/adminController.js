const User = require("../model/Model");
const ContactForm = require("../model/contactFormSchema")

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    // for getting user data without password

    if (!users || users.length === 0) {
      return res.status(401).json({ message: "No Users Found" });
    } 
    else {
      return res.status(200).json(users);
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllContact = async(req, res) => {
  try {
    const allContacts = await ContactForm.find();
    return res.status(200).json(allContacts);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getAllUsers, getAllContact };
