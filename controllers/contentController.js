const services = require("../data/services.api.json");
const projects = require("../data/projects.api.json");

const getServices = (req, res) => {
  return res.status(200).json({ data: services });
};

const getProjects = (req, res) => {
  return res.status(200).json({ data: projects });
};

module.exports = {
  getServices,
  getProjects
};
