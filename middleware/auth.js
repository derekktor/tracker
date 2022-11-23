module.exports = {
    // Do not let anyone without an acc to the system
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect("/")
        }
    },
    // don't show login page to already connected users
    ensureGuest: function (req, res, next) {
        if (req.isAuthenticated()) {
            res.redirect("/dashboard")
        } else {
            return next()
        }
    }
}