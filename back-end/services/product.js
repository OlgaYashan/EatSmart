const ProductRepository = require("../repositories/ProductRepository");

module.exports = {
  findAll: callback => {
    ProductRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    ProductRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};