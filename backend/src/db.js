require("dotenv").config();
const mongoose = require("mongoose");

mongoose.set("strictQuery", false); // Suppress Mongoose 7 warning

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("✅ Database connected successfully!");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
        process.exit(1);
    }
};

module.exports = { connectDb };
