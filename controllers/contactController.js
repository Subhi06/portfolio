const Contact = require("../models/Contact");

const validatePayload = ({ name, email, message }) => {
  if (!name || !email || !message) {
    return "Name, email, and message are required.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please provide a valid email address.";
  }

  return null;
};

const submitContactForm = async (req, res) => {
  try {
    const error = validatePayload(req.body);
    if (error) {
      return res.status(400).json({ message: error });
    }

    const savedContact = await Contact.create(req.body);
    return res.status(201).json({
      message: "Thank you! Your message has been received.",
      data: savedContact
    });
  } catch (err) {
    console.error("Contact submit error:", err);
    return res.status(500).json({ message: "Failed to save contact request." });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    return res.status(200).json({ data: contacts });
  } catch (err) {
    console.error("Get contacts error:", err);
    return res.status(500).json({ message: "Failed to fetch contacts." });
  }
};

module.exports = {
  submitContactForm,
  getAllContacts
};
