let mongoose = require('mongoose');

let ProductSchema = new mongoose.Schema({
    name: String,
    components: [],
    rating: Number,
    id_producer: String,
    barCode: {type: Number, default: 0},
    date:{type: Date, default: Date.now},
}) 

module.exports = mongoose.model("Product", ProductSchema);