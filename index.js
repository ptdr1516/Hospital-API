require("dotenv").config();
const express = require("express");
const app = express();
const port = 8000;
//import db (mongodb)
const db = require("./config/mongoose");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const passportJWT = require("./config/passport-jwt-strategy");

//read requests
app.use(express.urlencoded({ extended: true }));

//use express router
app.use("/", require("./routes"));

app.listen(port, function (error) {
    if (error) {
        console.log("Error :", error);
    } else {
        console.log(`Server is running on port: ${port}`);
    }
});
