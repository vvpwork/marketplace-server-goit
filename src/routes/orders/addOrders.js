const addOrder = require("../../helper/orders/createOrderMongo");
const getOrder = (req, res) => {
  const order = req.body;
  const answer = {
    ok(order) {
      res
        .status(200)
        .set("content-type", "aplication/json")
        .json({ status: "success", order })
        .end();
    },

    error() {
      res
        .status(200)
        .set("content-type", "aplication/json")
        .json({ status: "failed", order: null })
        .end();
    }
  };

  addOrder(order)
    .then(dataOrder => answer.ok(dataOrder))
    .catch(error => answer.error(error.massage));
};

module.exports = getOrder;
