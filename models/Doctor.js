// require mongoose
const mongoose = require("mongoose");

// create schema for doctors
const doctorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Doctor = mongoose.model("doctors", doctorSchema);

module.exports = Doctor;
