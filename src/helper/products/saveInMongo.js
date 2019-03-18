const schema = require("../../models/db/shemas/productSchema");
const product = require("../../db/products/all-products.json");
const save = require("../../models/operations/saveInMongo");

const saveInMongoDB = (req, res) => {
  save(schema, product);
};

module.exports = saveInMongoDB;
