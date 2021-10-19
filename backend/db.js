
import dotenv from 'dotenv';
const mongoose = require('mongoose');
require('dotenv').config();
dotenv.config();


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connection Succesful !!");
    } catch (error) {
        console.log("MongoDB connection failed");
        process.exit(1);
    }
};

module.exports = connectDB;