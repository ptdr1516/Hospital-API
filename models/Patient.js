const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phone_number: {
            type: String,
            required: true,
            unique: true,
        },
        reports: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Report",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Patient = mongoose.model("patients", patientSchema);
module.exports = Patient;
