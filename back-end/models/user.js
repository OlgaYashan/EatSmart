const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: String,
  password: String,
  name: String,
  surname: String,
  age: Number,
  gender: String,
  role: String,
  forbidenComponents: [],
  diet: {},
  rating: Number,
  lastProducts: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;
