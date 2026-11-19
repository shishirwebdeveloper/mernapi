const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/olx');
        console.log("MongoDB database connected successfully")
    } catch (error) {
        console.error("Not connected",error);
        process.exit(1);
    }
}

module.exports = connectDB;