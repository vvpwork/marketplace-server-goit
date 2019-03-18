const getOrderMongo = require("../../helper/orders/getOrderWithIdMongo");
const getOrder = (req, res) => {
  const id = req.params.id;
  console.log(id);
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
  getOrderMongo(id).exec((err, order) => {
    if (!err) return answer.ok(order);
    answer.error();
  });
};

module.exports = getOrder;
