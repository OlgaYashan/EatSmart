let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: String,
    description: {
        type: String,
        required: true,
        unique: true
    }
}) 

module.exports = mongoose.model("Product", ProductSchema);