const {app} = require('../modules/app');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const router = require('../routes/router');



const erorrTemp = (req,res, next) =>{
  res.status(500).send('no such page');
  next()
}

const startServer = port =>{
  app
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/', router)
  .use(erorrTemp)

  app.listen(port)
  console.log("server was started at port", port);
}



  
module.exports = startServer;

// const getid = require("../helper/getIdWithPathname");
// const { products, signUp, defaultRout, productID } = require("../routes");

// const logger = morgan("combined");


// const options = {
  //   key: fs.readFileSync(path.join(__dirname, "../ssl/server.key")),
  //   cert: fs.readFileSync(path.join(__dirname, "../ssl/server.crt"))
  // };
  // const serverStart = port => {
    //   const server = http.createServer( (req, res) => {
      //     const parsedUrl = url.parse(req.url).pathname;
      //     console.log(parsedUrl);
      //     const id = getid(parsedUrl);
      
      //     switch (parsedUrl) {
        //       case "/products":
        //         return logger(req, res, () => products(req, res));
        //       case "/signup":
        //         return logger(req, res, () => signUp(req, res));
        //       case `/products/${id}`:
        //         return logger(req, res, () => productID(req, res));
        //       default:
        //         return logger(req, res, () => defaultRout(req, res));
        //     }
//   });

//   console.log(port);
//   server.listen(port);
// };
// const url = require("url");
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
