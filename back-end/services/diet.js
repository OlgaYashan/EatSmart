const DietRepository = require("../repositories/DietRepository");

module.exports = {
  findAll: callback => {
    DietRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    DietRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};