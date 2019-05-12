const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Component = require("../models/component");

function ComponentRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Component;
}

ComponentRepository.prototype = new Repository();

module.exports = new ComponentRepository();