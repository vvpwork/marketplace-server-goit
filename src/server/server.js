const http = require("http");
const url = require("url");
const morgan = require("morgan");

const logger = morgan("combined");

const { products, signUp, defaultRout } = require("../routes");

const serverStart = port => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    switch (parsedUrl.pathname) {
      case "/products":
       return logger(req, res, ()=> products(req, res));
      case "/signup":
        return logger(req, res, ()=> signUp(req,res));
      default:
        return logger(req,res, ()=>defaultRout(req,res));
    }

  });

  console.log('port : 4040');
  server.listen(port);
};

module.exports = serverStart;
