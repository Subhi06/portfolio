const express = require("express");
const { submitContactForm, getAllContacts } = require("../controllers/contactController");

const router = express.Router();

router.post("/", submitContactForm);
router.get("/", getAllContacts);

module.exports = router;
