const Patient = require("../models/patient");

// Create a patient record getting phone number and
// name only after authentication if patient already exist return patient
module.exports.create = async function (req, res) {
    try {
        let patient = await Patient.findOne(
            { phone_number: req.body.phone_number },
            "name phone_number"
        );
        if (!patient) {
            let patient = await Patient.create(req.body);
            console.log("Patient Created Hurrah!");
            return res.json(200, {
                status: 200,
                message:
                    "Registration Success, Patient Registered! Your Mobile Number is id for now!!!",
                data: {
                    patient: patient,
                },
            });
        } else {
            console.log("Patient already exists");
            return res.json(409, {
                status: 409,
                message: "Patient already exists",
                data: {
                    patient: patient,
                },
            });
        }
    } catch (err) {
        console.log(err);
        return res.json(500, {
            message: "Internal Server Error",
        });
    }
};
