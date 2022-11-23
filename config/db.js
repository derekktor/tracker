const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        console.log(`Connecting to MongoDB...`);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
        })

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB