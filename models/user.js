const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/event");


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});

module.exports = mongoose.model("User", userSchema);
