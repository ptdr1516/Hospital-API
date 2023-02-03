const express = require("express");
const router = express.Router();
const passport = require("passport");
const doctorController = require("../controllers/doctor");
const middleWare = require("../config/errorHandle");
//register the doctor
router.post("/register", doctorController.create);

// handling doctor login
router.post(
    "/login",
    passport.authenticate("local", { session: false, failWithError: true }),
    middleWare.handleError,
    doctorController.generateKey
);

module.exports = router;
