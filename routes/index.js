const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

// to handle home route
router.get("/", homeController.home);

// Route for handling doctor registration and login.
router.use("/doctors", require("./doctor"));

// Route for handling pateint data.
router.use("/patients", require("./patient"));

// Route for handling report generation.
router.use("/reports", require("./report"));

module.exports = router;
