const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema(
  {
    id: {
      type: String,
      default: "949832f8-48c7-4cb2-8dcd-98f046a9a2e3",
    },
    userID: String,
    marketID: String,
    marketName: String,
    cmdtyID: String,
    marketType: String,
    cmdtyName: String,
    priceUnit: String,
    convFctr: Number,
    price: Number,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("report", reportSchema);
