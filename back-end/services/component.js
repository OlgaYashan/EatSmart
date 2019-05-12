const ComponentRepository = require("../repositories/ComponentRepository");

module.exports = {
  findAll: callback => {
    ComponentRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    ComponentRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  }
};