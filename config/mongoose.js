const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ptdr1516:ptdr105283921@cluster0.k7srh0y.mongodb.net/hospitalApi");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error In Connecting Database"));
db.once("open", function () {
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;
