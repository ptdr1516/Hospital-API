const Patient = require("../models/patient");
const Report = require("../models/report");
const status = {
    N: "Negative",
    TQ: "Travelled-Quarantine",
    SQ: "Symptoms-Quarantine",
    PA: "Positive-Admit",
};

// create a report for a patient by getting status.
module.exports.createReport = async function (req, res) {
    const patient_id = req.params.id;
    try {
        let patient = await Patient.findOne({ phone_number: patient_id });
        console.log(patient);
        if (patient) {
            req.body.patient = patient._id;
            req.body.doctor = req.user._id;
            req.body.status = status[req.body.status.toUpperCase()];
            if (!req.body.status) {
                console.log("Error 1");
                return res.json(500, {
                    status: 500,
                    message: "Please enter the correct status",
                });
            }
            let report = await await Report.create(req.body);

            if (report) {
                console.log(report);
                patient.reports.push(report._id);
                patient.save();
                return res.json(200, {
                    status: 200,
                    message: "Report Generation Sucess!",
                    data: {
                        report: report,
                    },
                });
            } else {
                console.log("Error 2");
                return res.json(500, {
                    status: 500,
                    message: "Internal Server Error",
                });
            }
        } else {
            return res.json(500, {
                status: 500,
                message: "Patient ID incorrect",
            });
        }
    } catch (error) {
        console.log("Error 3");
        console.log(error);
        return res.json(500, {
            status: 500,
            message: "Internal Server Error",
        });
    }
};

// generate all reports of a particular user by getting id
module.exports.allReports = async function (request, response) {
    const patient_id = request.params.id;
    try {
        let patient = await Patient.findOne({ phone_number: patient_id });
        if (patient) {
            let reports = await Report.find({ patient: patient._id });

            return response.json(200, {
                status: 200,
                message: "All Reports",
                data: {
                    patient: { name: patient.name, phone_number: patient.phone_number },
                    reports: reports,
                },
            });
        } else {
            return response.json(500, {
                status: 500,
                message: "Patient ID incorrect",
            });
        }
    } catch (error) {
        return response.json(500, {
            status: 500,
            message: "Internal Server Error!",
        });
    }
};

//send report by status
module.exports.report_by_status = async (req, res) => {
    try {
        req.params.status = status[req.params.status.toUpperCase()];
        const reports = Report.find({ status: req.params.status });
        reports.exec(function (err, rep) {
            return res.send(rep);
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};
