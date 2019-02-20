const allProducts = require("../../db/products/all-products.json");
const {
  getProductsFromId,
  getProductsFromCategory,
  getProductsFromQueryIds
} = require("../../helper/products");

const getAllProducts = (req, res) => {
  const query = req.query;
  const queryLength = Object.keys(query).length;
  
  const resOk = products =>
    res
      .status(200)
      .set("content-type", "aplication/json")
      .json({
        status: products.length > 0 ? "success" : "no products",
        products
      })
      .end();

  switch (queryLength) {
    case 0:
      return resOk(allProducts);
    case 1:
      return resOk(
        getProductsFromId(
          query.category
            ? getProductsFromCategory(query.category)
            : getProductsFromQueryIds(query.ids)
        )
      );
    default:
      return resOk([]);
  }
};

module.exports = getAllProducts;
