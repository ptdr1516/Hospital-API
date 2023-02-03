const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

// to handle home route
router.get("/", homeController.home);

// Route for handling doctor registration and login.
router.use("/doctors", require("./doctors"));

// Route for handling pateint data.
router.use("/patients", require("./patients"));

// Route for handling report generation.
router.use("/reports", require("./reports"));

module.exports = router;
