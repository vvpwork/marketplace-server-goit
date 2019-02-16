const allProducts = require("../db/products/all-products.json");

const getId = (...ids) => {
  const products = Array.from(ids).map(id =>
    allProducts.find(product => Number(id) === product.id)
  );
  return products[0] ? products : [];
};
module.exports = getId;
