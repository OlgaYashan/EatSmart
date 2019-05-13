let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: String,
    components: [],
    rating: Number,
    id_producer: String
}) 

module.exports = mongoose.model("Product", ProductSchema);