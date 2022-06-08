const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const db = require("./config/db");
const reportRoute = require("./routes/reportRoutes");
require("dotenv").config();

const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use("/api/v1", reportRoute);

app.get("/", (req, res) => {
  res.send("Agrilinks api ready to use...");
});

app.listen(PORT, () => console.log("Server running on port " + PORT));
