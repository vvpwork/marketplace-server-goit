const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

const getid = require("../helper/getIdWithPathname");
const { products, signUp, defaultRout, productID } = require("../routes");

const logger = morgan("combined");

const options = {
  key: fs.readFileSync(path.join(__dirname, "../ssl/server.key")),
  cert: fs.readFileSync(path.join(__dirname, "../ssl/server.crt"))
};

const serverStart = port => {
  const server = http.createServer( (req, res) => {
    const parsedUrl = url.parse(req.url).pathname;
    console.log(parsedUrl);
    const id = getid(parsedUrl);

    switch (parsedUrl) {
      case "/products":
        return logger(req, res, () => products(req, res));
      case "/signup":
        return logger(req, res, () => signUp(req, res));
      case `/products/${id}`:
        return logger(req, res, () => productID(req, res));
      default:
        return logger(req, res, () => defaultRout(req, res));
    }
  });

  console.log(port);
  server.listen(port);
};

module.exports = serverStart;
