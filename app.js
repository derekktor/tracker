const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const exphbs = require("express-handlebars")
const connectDB = require("./config/db")

// Load config
dotenv.config({path: "./config/config.env"})

// Connect to DB
connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"))
}

// Handlebars
app.engine(
    ".hbs",
    exphbs.engine({
        // helpers: {
        //     formatDate,
        //     stripTags,
        //     truncate,
        //     editIcon,
        //     select,
        // },
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", ".hbs")

// Static
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/index"))

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Running, PORT = ${PORT}, ENV = ${process.env.NODE_ENV}`))