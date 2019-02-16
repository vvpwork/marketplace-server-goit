const allProducts = require("../../db/products/all-products.json");
const getProducts = (req, res) => {

  if (req.method === "GET") {
    res.writeHead(200, { "content-type": "aplication/json" });
    res.write(JSON.stringify(allProducts));
    res.end();
  }
  if (req.method === "POST") {
    res.writeHead(200, { "content-type": "aplication/json" });
    res.write("post");
    res.end();
  }
};

module.exports = getProducts

