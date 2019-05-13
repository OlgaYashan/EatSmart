let mongoose = require('mongoose');

let DietSchema = new mongoose.Schema({
    name: String,
    description:String,
    forbidenComponents: []

}) 

module.exports = mongoose.model("Diet", DietSchema);