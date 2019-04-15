module.exports = {
  dbname: "recipes",
  uri: "mongodb://localhost/recipes",
  opts: {
    auto_reconnect: true,
    poolSize: 40
  }
};
