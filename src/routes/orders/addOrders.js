const addOrder = require("../../helper/orders/addOrders");
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
    .then(r => (r > 0 ? answer.ok(order) : answer.error()))
    .catch(error => console.log(error));
};

module.exports = getOrder;
