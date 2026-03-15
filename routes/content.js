const express = require("express");
const { getServices, getProjects } = require("../controllers/contentController");

const router = express.Router();

router.get("/services", getServices);
router.get("/projects", getProjects);

module.exports = router;
