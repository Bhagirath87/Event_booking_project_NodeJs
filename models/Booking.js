const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/event");

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  seatsBooked: Number,
  bookingDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", bookingSchema);