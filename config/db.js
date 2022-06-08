const mongoose = require("mongoose");
require("dotenv").config();

const { DATABASE_URL } = process.env;

module.exports = mongoose.connect(DATABASE_URL, (err) =>
  err ? console.log(err) : console.log("Database connected")
);
