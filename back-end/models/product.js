let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: String,
    components: [],
    rating: Number,
    id_producers: Number
}) 

module.exports = mongoose.model("Product", ProductSchema);