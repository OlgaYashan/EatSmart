const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Diet = require("../models/diet");

function DietRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Diet;
}

DietRepository.prototype = new Repository();

module.exports = new DietRepository();