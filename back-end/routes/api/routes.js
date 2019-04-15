const user = require("./user");
const product = require("./product");

module.exports = function(app) {
  app.use("/api/user", user);
  app.use("/api/product", product);
};
