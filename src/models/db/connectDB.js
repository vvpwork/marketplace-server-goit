const mongoose = require("mongoose");

const connectDB = uriDB => {
  mongoose
    .connect(uriDB, { useNewUrlParser: true })
    .then(() => console.log("Database is connected"))
    .catch(error => console.error("Database connection error"));
};


module.exports = connectDB
