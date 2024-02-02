const contactSchemea = require("../model/contactFormSchema");

const contactWith = async (req, res) => {
  try {
    const resp = req.body;
    await contactSchemea.create(resp);
    return res.status(200).json({ message: "message sent successfully" });
  } catch (error) {
    // return res.status(200).json({ message: "message not sent " }).
    console.log(error);
  }
};

module.exports = contactWith;
