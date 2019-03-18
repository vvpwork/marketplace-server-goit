const productSchema = require("../../models/db/shemas/productSchema");
const update = require("../../models/operations/updateForId");

const updateProduct = (req, res) => {
  const id = req.params.id;
  console.log(id);

  const answer = {
    ok(update) {
      res.json({
        status: "success",
        product: update
      });
    },

    error(error) {
      res.json({
        status: "error",
        error
      });
    }
  };
  update(productSchema, req)
    .then(prod => answer.ok(prod))
    .catch(error => answer.error(error));
};

module.exports = updateProduct;
