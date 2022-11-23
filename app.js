// Imports
const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
// const MongoStore = require("connect-mongo")(session)
const MongoStore = require("connect-mongo");
const connectDB = require("./config/db");

// Configs
dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5001;
require("./config/passport")(passport);

// Connect to DB
connectDB();

// Initialize app
const app = express();

// Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Handlebars Helpers
const { formatDate } = require("./helpers/hbs");

// Handlebars - template engine
app.engine(
    ".hbs",
    exphbs.engine({
        helpers: { formatDate },
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs");

// Sessions
app.use(
    session({
        secret: "why cat",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            mongooseConnection: mongoose.connection,
        }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Static
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/habits", require("./routes/habits"));

app.listen(
    PORT,
    console.log(`Running, PORT=${PORT}, ENV=${process.env.NODE_ENV}`)
);
