const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/event");

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  location: String,
  price: Number,
  totalSeats: Number
});

module.exports = mongoose.model("Event", eventSchema);