const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema(
  {
    bike: { type: Schema.Types.ObjectId, ref: "Bike" },
    // bike: String,
    date: Date,
  },
  {
    timestamps: true,
  }
);

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    bookings: [bookingSchema],
    vehicale: [{ type: Schema.Types.ObjectId, ref: "Bike" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
