let mongoose = require('mongoose');

let ComponentSchema = new mongoose.Schema({
    name: String,
    type: String,
    description:String

}) 

module.exports = mongoose.model("Component", ComponentSchema);