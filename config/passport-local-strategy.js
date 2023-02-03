const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Doctor = require("../models/Doctor");

// authentication with local strategy
passport.use(
    new localStrategy(
        {
            usernameField: "email",
            passReqToCallback: true,
        },
        function (req, email, password, done) {
            // find a doctor and establish identity
            Doctor.findOne({ email: email }, function (err, doctor) {
                if (err) {
                    console.log("error finding in user --> passport");
                    req.info = "Something's not Right";
                    req.code = 500;
                    return done(err);
                }
                if (!doctor || doctor.password != password) {
                    console.log("Invalid username password");
                    req.code = 401;
                    req.info = "Invalid username password";
                    return done(null, false);
                } else {
                    console.log(doctor);
                    req.code = 200;
                    return done(null, doctor);
                }
            });
        }
    )
);
