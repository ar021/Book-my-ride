const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookingSchema = new mongoose.Schema(
  {
    bike: { type: Schema.Types.ObjectId, ref: "Bike" },
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
