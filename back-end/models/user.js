const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  description: String

});

const User = mongoose.model("User", userSchema);

module.exports = User;
