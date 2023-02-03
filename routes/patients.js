const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patients_controller");
const passport = require("passport");
const middleWare = require("../config/middleware-for-handling-error");
// route for registering patients
router.post(
    "/register",
    passport.authenticate("jwt", { session: false, failWithError: true }),
    middleWare.handleError,
    patientController.create
);

module.exports = router;
