const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema(
  {
    brand: String,
    model: String,
    year: Number,
    engine: Number,
    bikeImage: { path: String, filename: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bike", bikeSchema);
