const allProducts = require("../../db/products/all-products.json");

const getId = ids => {
  const products = allProducts.reduce(
    (acc, val) => (ids.includes(val.id) ? acc.concat(val) : acc),
    []
  );
  return products[0] ? products : [];
};
module.exports = getId;
