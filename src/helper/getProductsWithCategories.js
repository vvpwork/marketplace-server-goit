const allProducts = require("../db/products/all-products.json");
const qs = require("querystring");

const getProductsWithCategories = url => {
  const query = qs.parse(url.query);

  if (!query.category) return;
  const category = query.category.replace(/"/g, "");

  const ids = allProducts.reduce(
    (acc, val) =>
      val.categories.includes(category) ? acc.concat(val.id) : acc,
    []
  );
  return ids;
};

module.exports = getProductsWithCategories;
