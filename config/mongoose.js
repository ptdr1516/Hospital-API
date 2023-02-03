const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Hospital-API");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error In Connecting Database"));

db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;
