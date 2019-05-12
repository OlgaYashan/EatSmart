const user = require("./user");
const product = require("./product");
const component = require("./component");
const diet = require("./diet");

module.exports = function(app) {
  app.use("/api/user", user);
  app.use("/api/product", product);
  app.use("/api/component", component);
  app.use("/api/diet", diet);
};
