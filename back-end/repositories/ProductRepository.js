const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Product = require("../models/product");

function ProductRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Product;
}

ProductRepository.prototype = new Repository();

module.exports = new ProductRepository();