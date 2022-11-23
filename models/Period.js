const mongoose = require("mongoose");

const PeriodSchema = new mongoose.Schema({
    perdiodId: {
        type: String,
        required: true,
    },
    timeStarted: {
        type: Date,
    },
    timeFinished: {
        type: Date,
    },
    note: {
        type: String,
        trim: true,
    },
    habit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habit"
    }
});

module.exports = mongoose.model("Period", PeriodSchema);
