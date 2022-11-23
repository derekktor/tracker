const mongoose = require("mongoose");

const HabitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    frequency: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Habit", HabitSchema);
