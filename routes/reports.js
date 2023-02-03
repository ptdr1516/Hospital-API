const express = require("express");
const router = express.Router();
const passport = require("passport");
const middleWare = require("../config/middleware-for-handling-error");

const reportController = require("../controllers/reports_controller");

//creating route for report

router.post(
    "/:id/create_report",
    passport.authenticate("jwt", { session: false, failWithError: true }),
    middleWare.handleError,
    reportController.createReport
);

// route for viewing all reports of a patient
router.get("/:id/all_reports", reportController.allReports);

//route to view all the reports based on status
router.get("/:status", reportController.report_by_status);
module.exports = router;
