const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Habit = require("../models/Habit");

// @desc    Login/Landing page
// @route   GET /
router.get("/", ensureGuest, (req, res) => {
    res.render("login", {
        layout: "login",
    });
});

// @desc    Dashboard
// @route   GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
    try {
        const habits = await Habit.find({ user: req.user.id }).lean();
        res.render("dashboard", {
            name: req.user.displayName,
            habits
        });
    } catch (err) {
        console.error(err);
        res.render("error/500")
    }
});

module.exports = router;
