const allProducts = require("../../db/products/all-products.json");

const getProductsWithCategories = query => {
  const category = query.replace(/"/g, "");
  const ids = allProducts.reduce(
    (acc, val) =>
      val.categories.includes(category) ? acc.concat(val.id) : acc,
    []
  );
  
  return ids;
  
};

module.exports = getProductsWithCategories;
