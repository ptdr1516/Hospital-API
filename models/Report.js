//require mongoose
const mongoose = require("mongoose");

//create schema for reports

const reportSchema = mongoose.Schema(
    {
        status: {
            type: String,
            required: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
            required: true,
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Report = mongoose.model("reports", reportSchema);

module.exports = Report;
