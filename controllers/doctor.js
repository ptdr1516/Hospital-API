const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");

//  Create a record for doctor in db by taking password, confirm password, username and name.

module.exports.create = async function (req, res) {
    console.log(req.body);
    if (req.body["password"] != req.body["confirm-password"]) {
        console.log("password and confirm password not equal!");
        return res.json(422, {
            status: 422,
            message: "Password and confirm-password not matched",
        });
    }
    try {
        let doctor = await Doctor.findOne({ email: req.body.email });
        console.log("doctor", doctor);
        // if doctor exists the render the login page
        if (doctor) {
            return res.status(409).json({
                message: "Already Registered, Please Login to Continue !!",
                data: {
                    doctor: doctor,
                },
            });
        } else {
            //create doctor
            doctor = await Doctor.create(req.body);

            return res.status(200).json({
                message: "You are registered Successfully!!",
                data: {
                    doctor: doctor,
                },
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: "Internal Server Error",
        });
    }
};

// Login with username and password of doctor, generate jwt token for doctor and return in json.
module.exports.generateKey = function (req, res) {
    if (req.user) {
        return res.json(200, {
            status: req.code,
            message: "Sign in successful take the token and keep it safe",
            data: {
                token: jwt.sign(req.user.toJSON(), "secret", {
                    expiresIn: 100000,
                }),
            },
        });
    } else {
        return res.json(500, {
            status: req.code,
            message: "Something's Not right",
        });
    }
};
