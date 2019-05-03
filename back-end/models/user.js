const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  login: String,
  password: String,
  name: String,
  surname: String,
  age: { type: Number, min: 18, max: 65 },
  gender: String,
  role: String,
  forbidenComponents: [String],
  desises: [String],
  rating: Number,
  lastProducts: [],
  lastComponentsId: [Number]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
