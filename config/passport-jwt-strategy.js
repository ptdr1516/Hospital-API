const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const Doctor = require("../models/doctor");

//extract token from header
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "secret",
};
console.log(opts.jwtFromRequest);
//authenticate using jwt
passport.use(
    new JWTStrategy(opts, async function (jwtPayload, done) {
        Doctor.findById(jwtPayload._id, "email name", function (err, doctor) {
            if (err) {
                req.code = 500;
                req.info = "Internal Server Error!!!";
                console.log("Error in finding Doctor -> JWT");
                return done(err, false);
            } else {
                if (doctor) {
                    return done(null, doctor);
                } else {
                    req.code = 401;
                    req.info =
                        "Authorization failed! Invalid Authorization key or Doctor Doesn't exits!!";
                    return done(null, false);
                }
            }
        });
    })
);

module.exports = passport;
