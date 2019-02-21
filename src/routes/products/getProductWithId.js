const getProductFromID = require("../../helper/products/getProductsFromID");

const getProductWithId = (req, res) => {
  const params = req.params;

  const products = getProductFromID([params.id]);
  if (params.id > 0)
    return res
      .status(200)
      .set("content-type", "aplication/json")
      .json({
        status: products.length > 0 ? "success" : "no products",
        products
      })
      .end();
};
module.exports = getProductWithId;
