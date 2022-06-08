const Router = require("express").Router();
const reportController = require("../controllers/reportController");

Router.route("/reports").get(reportController.get).post(reportController.post);

module.exports = Router;
