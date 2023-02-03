const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patient");
const passport = require("passport");
const middleWare = require("../config/errorHandle");
// route for registering patients
router.post(
    "/register",
    passport.authenticate("jwt", { session: false, failWithError: true }),
    middleWare.handleError,
    patientController.create
);

module.exports = router;
